import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import type { FC } from "react";
import type { Course as ICourse } from "../data";
import { useTranslations } from "next-intl";

export const Course: FC<{ course: ICourse }> = ({ course }) => {
  const t = useTranslations("portfolio.education");

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <div className="flex items-center gap-2">
          {course.platform.logo}
          <CardDescription>{course.platform.name}</CardDescription>
        </div>
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
  );
};
