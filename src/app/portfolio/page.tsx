import { ProjectsCarousel } from "@/components/portfolio/projects-carousel";
import { Separator } from "@/components/ui/separator";

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <section
        id="projects"
        className="mx-auto flex flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
      >
        <div className="mb-2 flex items-center space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground">
              Small glance of my work! This list will be changing with time as I
              add more projects to my portfolio
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <ProjectsCarousel />
        </div>
      </section>
      <Separator />
      <section id="education"></section>
    </main>
  );
}
