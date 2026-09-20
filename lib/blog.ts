import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  draft: boolean
}

const postsDirectory = path.join(process.cwd(), "content", "blog")

function getPostRaw(slug: string) {
  const mdPath = path.join(postsDirectory, `${slug}.mdx`)
  if (fs.existsSync(mdPath)) {
    return { content: fs.readFileSync(mdPath, "utf8"), slug }
  }
  const mdAltPath = path.join(postsDirectory, `${slug}.md`)
  if (fs.existsSync(mdAltPath)) {
    return { content: fs.readFileSync(mdAltPath, "utf8"), slug }
  }
  return null
}

function parsePost(raw: { content: string; slug: string }): Post | null {
  const { data } = matter(raw.content)
  if (!data.title || !data.date) return null
  return {
    slug: raw.slug,
    title: data.title,
    description: data.description ?? "",
    date: new Date(data.date).toISOString(),
    tags: Array.isArray(data.tags) ? data.tags : [],
    draft: data.draft === true,
  }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""))
  const posts = files
    .map((slug) => {
      const raw = getPostRaw(slug)
      return raw ? parsePost(raw) : null
    })
    .filter((post): post is Post => post !== null && !post.draft)
  return posts.sort((a, b) => b.date.localeCompare(a.date))
}

export function getPostSource(slug: string): { content: string; frontmatter: Record<string, unknown> } | null {
  const raw = getPostRaw(slug)
  if (!raw) return null
  const { content, data } = matter(raw.content)
  return { content, frontmatter: data }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""))
}
