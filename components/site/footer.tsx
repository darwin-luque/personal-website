export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} Darwin Luque · built with Next.js, shadcn &amp; an unhealthy
          amount of GSAP
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/darwin-luque" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-foreground">
            GitHub
          </a>
          <a href="https://linkedin.com/in/darwin-luque" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-foreground">
            LinkedIn
          </a>
          <a href="/resume-darwin-luque.pdf" download className="transition-colors duration-200 hover:text-foreground">
            Résumé
          </a>
        </div>
      </div>
    </footer>
  )
}
