import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Blog — Darwin Luque",
  description: "Engineering deep-dives, architecture stories, and occasional career confessions from Darwin Luque.",
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold md:text-5xl">
          The <span className="text-primary">blog</span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Engineering deep-dives and architecture stories. Mostly how systems break, and how I make them not.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="cursor-pointer border-border/60 bg-card/50 transition-colors duration-200 hover:border-primary/50 group-hover:bg-card">
              <CardHeader>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.tags.length > 0 && (
                    <div className="flex gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <CardTitle className="transition-colors duration-200 group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-muted-foreground">No posts yet. Soon.</p>
        )}
      </div>

      <footer className="mt-16">
        <Link href="/" className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
          ← Back to the story
        </Link>
      </footer>
    </main>
  )
}
