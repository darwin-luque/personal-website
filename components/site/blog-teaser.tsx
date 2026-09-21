import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3)
  if (posts.length === 0) return null

  return (
    <section className="mx-auto max-w-4xl px-4 py-24 md:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">From the blog</p>
          <h2 className="text-3xl font-bold md:text-4xl">Stories from the trenches</h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
        >
          All posts <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="h-full cursor-pointer border-border/60 bg-card/40 transition-colors duration-200 hover:border-primary/50">
              <CardHeader>
                <time className="text-xs text-muted-foreground" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </time>
                <CardTitle className="text-base transition-colors duration-200 group-hover:text-primary">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
