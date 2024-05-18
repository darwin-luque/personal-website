import type { FC } from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

const getAcademics = (t: ReturnType<typeof useTranslations<string>>) => [
  {
    id: 1,
    institution: "Universidad Tecnológica Centroamericana (UNITEC)",
    degree: t("degrees.college.title"),
    duration: "2015 - 2020",
    location: "San Pedro Sula, Honduras",
    description: t("degrees.college.description"),
  },
  {
    id: 2,
    institution: "Instituto Morazanni",
    degree: t("degrees.highSchool.title"),
    duration: "2011 - 2015",
    location: "San Pedro Sula, Honduras",
    description: t("degrees.highSchool.description"),
  },
];

export const AcademicTab: FC = () => {
  const t = useTranslations("portfolio.education");

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
      {getAcademics(t).map((academic) => (
        <Card key={academic.id}>
          <CardHeader>
            <CardTitle>{academic.degree}</CardTitle>
            <CardDescription>{academic.institution}</CardDescription>
            <CardDescription>{academic.duration}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {academic.description}
            </p>
            <address className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {academic.location}
            </address>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
