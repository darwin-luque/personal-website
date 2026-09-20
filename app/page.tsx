import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Story } from "@/components/site/story"
import { Skills } from "@/components/site/skills"
import { BlogTeaser } from "@/components/site/blog-teaser"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Skills />
        <BlogTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
