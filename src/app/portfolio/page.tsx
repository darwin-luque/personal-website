import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsCarousel } from "@/components/portfolio/projects-carousel";
import { AcademicTab } from "@/components/portfolio/education/academic-tab";
import { CoursesTab } from "@/components/portfolio/education/courses-tab";
import { Separator } from "@/components/ui/separator";
import { Skills } from "@/components/portfolio/skills";
import {
  skills,
  courses,
  academic,
  projects,
  education,
  testimonials,
  skillsDescription,
  projectsDescription,
  educationDescription,
  testimonialsDescription,
} from "@/paraglide/messages";

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <section
        id="projects"
        className="mx-auto flex max-w-5xl flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
      >
        <div className="mb-2 flex items-center space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{projects()}</h2>
            <p className="text-muted-foreground">{projectsDescription()}</p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <ProjectsCarousel />
        </div>
      </section>
      <Separator />
      <section
        id="testimonials"
        className="mx-auto flex max-w-5xl flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
      >
        <div className="mb-2 flex items-center space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {testimonials()}
            </h2>
            <p className="text-muted-foreground">{testimonialsDescription()}</p>
          </div>
        </div>
      </section>
      <Separator />
      <section
        id="education"
        className="mx-auto flex max-w-5xl flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
      >
        <div className="mb-2 flex items-center space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{education()}</h2>
            <p className="text-muted-foreground">{educationDescription()}</p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="academic">{academic()}</TabsTrigger>
              <TabsTrigger value="courses">{courses()}</TabsTrigger>
            </TabsList>
            <TabsContent value="academic">
              <AcademicTab />
            </TabsContent>
            <TabsContent value="courses">
              <CoursesTab />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Separator />
      <section
        id="skills"
        className="mx-auto flex max-w-5xl flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
      >
        <div className="mb-2 flex items-center space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{skills()}</h2>
            <p className="text-muted-foreground">{skillsDescription()}</p>
          </div>
        </div>
        <Skills />
      </section>
    </main>
  );
}
