import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsCarousel } from "@/components/portfolio/projects-carousel";
import { AcademicTab } from "@/components/portfolio/education/academic-tab";
import { CoursesTab } from "@/components/portfolio/education/courses-tab";
import { WorkExperience } from "@/components/portfolio/work-experience";
import { PortfolioHeader } from "@/components/portfolio/header";
import { Separator } from "@/components/ui/separator";
import { Skills } from "@/components/portfolio/skills";
import {
  skills,
  courses,
  academic,
  projects,
  education,
  experience,
  testimonials,
  skillsSectionDescription,
  projectsSectionDescription,
  educationSectionDescription,
  experienceSectionDescription,
  testimonialsSectionDescription,
} from "@/paraglide/messages";
import { cn } from "@/lib/utils";

const sectionClassName =
  "mx-auto flex max-w-5xl flex-col gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14";

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <section id="projects" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={experience()}
          description={experienceSectionDescription()}
        />
        <WorkExperience />
      </section>
      <Separator />
      <section id="projects" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={projects()}
          description={projectsSectionDescription()}
        />
        <div className="flex w-full justify-center">
          <ProjectsCarousel />
        </div>
      </section>
      <Separator />
      <section id="testimonials" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={testimonials()}
          description={testimonialsSectionDescription()}
        />
      </section>
      <Separator />
      <section id="education" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={education()}
          description={educationSectionDescription()}
        />
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
      <section id="skills" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={skills()}
          description={skillsSectionDescription()}
        />
        <Skills />
      </section>
    </main>
  );
}
