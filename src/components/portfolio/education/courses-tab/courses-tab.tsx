import type { FC } from "react";
import { useTranslations } from "next-intl";
import { type Course, courses } from "./data";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CoursesTab: FC = () => {
  const t = useTranslations("portfolio.education");

  // sort courses by relevance, split them by greater than 7 relevance, pick the top 6
  const [mainCourses, otherCourses] = courses
    .sort((a, b) => b.relevance - a.relevance)
    .reduce(
      ([main, other], course) => {
        if (course.relevance > 7 && main.length < 6) {
          return [[...main, course], other];
        }
        return [main, [...other, course]];
      },
      [[], []] as [Course[], Course[]],
    );

  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
        {mainCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.platform}</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={course.certificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("viewCertification")}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <Accordion collapsible type="single" className="w-full">
        <AccordionItem value="more-courses" className="w-full">
          <AccordionTrigger>{t("more")}</AccordionTrigger>
          <AccordionContent className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
            {otherCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.platform}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={course.certificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t("viewCertification")}
                  </a>
                </CardContent>
              </Card>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
