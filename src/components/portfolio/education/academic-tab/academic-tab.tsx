import type { FC } from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  collegeDegree,
  highSchoolDegree,
  collegeDescription,
  highSchoolDescription,
} from "@/paraglide/messages";

const academics = [
  {
    id: 1,
    institution: "Universidad Tecnológica Centroamericana (UNITEC)",
    degree: collegeDegree(),
    duration: "2015 - 2020",
    location: "San Pedro Sula, Honduras",
    description: collegeDescription(),
  },
  {
    id: 2,
    institution: "Instituto Morazanni",
    degree: highSchoolDegree(),
    duration: "2011 - 2015",
    location: "San Pedro Sula, Honduras",
    description: highSchoolDescription(),
  },
];

export const AcademicTab: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
      {academics.map((academic) => (
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
