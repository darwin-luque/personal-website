import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsCarousel } from "@/components/portfolio/projects-carousel";
import { AcademicTab } from "@/components/portfolio/education/academic-tab";
import { CoursesTab } from "@/components/portfolio/education/courses-tab";
import { WorkExperience } from "@/components/portfolio/work-experience";
import { PortfolioHeader } from "@/components/portfolio/header";
import { Skills } from "@/components/portfolio/skills";
import { Separator } from "@/components/ui/separator";
import { getDictionary } from "@/lib/dictionaries";
import type { ParamsWithLang } from "@/lib/types";
import { cn } from "@/lib/utils";

const sectionClassName =
  "mx-auto flex max-w-5xl flex-col gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14";

export default async function PortfolioPage({
  params,
}: {
  params: ParamsWithLang;
}) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="flex-1">
      <section id="experience" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={dict.portfolio.experience.title}
          description={dict.portfolio.experience.description}
        />
        <WorkExperience dict={dict} />
      </section>
      <Separator />
      <section id="projects" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={dict.portfolio.projects.title}
          description={dict.portfolio.projects.description}
        />
        <div className="flex w-full justify-center">
          <ProjectsCarousel dict={dict} />
        </div>
      </section>
      <Separator />
      <section id="testimonials" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={dict.portfolio.testimonials.title}
          description={dict.portfolio.testimonials.description}
        />
      </section>
      <Separator />
      <section id="education" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={dict.portfolio.education.title}
          description={dict.portfolio.education.description}
        />
        <div className="flex w-full justify-center">
          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="academic">
                {dict.portfolio.education.academic}
              </TabsTrigger>
              <TabsTrigger value="courses">
                {dict.portfolio.education.courses}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="academic">
              <AcademicTab dict={dict} />
            </TabsContent>
            <TabsContent value="courses">
              <CoursesTab dict={dict} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Separator />
      <section id="skills" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={dict.portfolio.skills.title}
          description={dict.portfolio.skills.description}
        />
        <Skills />
      </section>
    </main>
  );
}
