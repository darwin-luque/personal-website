import type { FC } from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import type { PropsWithDictionary } from "@/lib/types";

const getAcademics = (
  degreesDict: PropsWithDictionary["dict"]["portfolio"]["education"]["degrees"],
) => [
  {
    id: 1,
    institution: "Universidad Tecnológica Centroamericana (UNITEC)",
    degree: degreesDict.college.title,
    duration: "2015 - 2020",
    location: "San Pedro Sula, Honduras",
    description: degreesDict.college.description,
  },
  {
    id: 2,
    institution: "Instituto Morazanni",
    degree: degreesDict.highSchool.title,
    duration: "2011 - 2015",
    location: "San Pedro Sula, Honduras",
    description: degreesDict.highSchool.description,
  },
];

export const AcademicTab: FC<PropsWithDictionary> = ({ dict }) => (
  <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
    {getAcademics(dict.portfolio.education.degrees).map((academic) => (
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
