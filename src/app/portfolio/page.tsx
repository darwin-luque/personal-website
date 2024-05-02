import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsCarousel } from "@/components/portfolio/projects-carousel";
import { AcademicTab } from "@/components/portfolio/education/academic-tab";
import { CoursesTab } from "@/components/portfolio/education/courses-tab";
import { Separator } from "@/components/ui/separator";

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <section
        id="projects"
        className="mx-auto flex max-w-5xl flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
      >
        <div className="mb-2 flex items-center space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground">
              Explore my portfolio showcasing innovative projects that reflect
              my expertise, creativity, and dedication to excellence. Each
              project demonstrates my ability to tackle challenges and deliver
              impactful solutions.
            </p>
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
            <h2 className="text-2xl font-bold tracking-tight">Testimonials</h2>
            <p className="text-muted-foreground">
              Read what my clients and colleagues have to say about working with
              me. Their testimonials highlight my professionalism, expertise,
              and commitment to delivering high-quality work. I take pride in
              building strong relationships and exceeding expectations.
            </p>
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
            <h2 className="text-2xl font-bold tracking-tight">Education</h2>
            <p className="text-muted-foreground">
              Explore my academic background, which underpins my expertise in
              Engineering. I&apos;ve pursued studies at various institutions,
              honing my skills and knowledge in the diverse realms of
              engineering. My educational journey reflects my commitment to
              continuous learning and growth.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
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
            <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
            <p className="text-muted-foreground">
              Discover my technical and soft skills, which enable me to excel in
              my work. I&apos;ve developed a diverse skill set that encompasses
              various programming languages, tools, and methodologies. My skills
              enable me to tackle complex challenges and deliver innovative
              solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
