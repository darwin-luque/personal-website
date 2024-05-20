import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsCarousel } from "@/components/portfolio/projects-carousel";
import { AcademicTab } from "@/components/portfolio/education/academic-tab";
import { CoursesTab } from "@/components/portfolio/education/courses-tab";
import { WorkExperience } from "@/components/portfolio/work-experience";
import { PortfolioHeader } from "@/components/portfolio/header";
import { Skills } from "@/components/portfolio/skills";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const sectionClassName =
  "mx-auto flex max-w-5xl flex-col gap-2 py-6 space-y-4 md:py-10 md:pb-6 lg:py-16 lg:pb-14";

export default function PortfolioPage() {
  const t = useTranslations("portfolio");

  return (
    <main className="flex-1">
      <section id="experience" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={t("experience.title")}
          description={t("experience.description")}
        />
        <WorkExperience />
      </section>
      <Separator />
      <section id="projects" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={t("projects.title")}
          description={t("projects.description")}
        />
        <div className="flex w-full justify-center">
          <ProjectsCarousel />
        </div>
      </section>
      <Separator />
      <section id="testimonials" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={t("testimonials.title")}
          description={t("testimonials.description")}
        />
      </section>
      <Separator />
      <section id="education" className={cn(sectionClassName)}>
        <PortfolioHeader
          title={t("education.title")}
          description={t("education.description")}
        />
        <div className="flex w-full justify-center">
          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="academic">
                {t("education.academic")}
              </TabsTrigger>
              <TabsTrigger value="courses">
                {t("education.courses")}
              </TabsTrigger>
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
          title={t("skills.title")}
          description={t("skills.description")}
        />
        <Skills />
      </section>
    </main>
  );
}
