import type { FC } from "react";
import { useTranslations } from "next-intl";
import { type Course as ICourse, courses } from "./data";
import { Course } from "./course";
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
      [[], []] as [ICourse[], ICourse[]],
    );

  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
        {mainCourses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
      <Accordion collapsible type="single" className="w-full">
        <AccordionItem value="more-courses" className="w-full">
          <AccordionTrigger className="px-4">{t("more")}</AccordionTrigger>
          <AccordionContent className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
            {otherCourses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
