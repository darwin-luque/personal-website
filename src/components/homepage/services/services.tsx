import type { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { type ISkill, skills } from "../../portfolio/skills/data";
import { useTranslations } from "next-intl";

interface ServicesProps {
  title: string;
  description: string;
  keyTechnologies: ISkill[];
  features: string[];
}

const servicesList = (
  t: ReturnType<typeof useTranslations<string>>,
): ServicesProps[] => [
  {
    title: t("frontend.title"),
    description: t("frontend.description"),
    keyTechnologies: skills.filter((skill) => skill.type === "frontend"),
    features: [
      t("frontend.features.1"),
      t("frontend.features.2"),
      t("frontend.features.3"),
    ],
  },
  {
    title: t("backend.title"),
    description: t("backend.description"),
    keyTechnologies: skills.filter((skill) => skill.type === "backend"),
    features: [
      t("backend.features.1"),
      t("backend.features.2"),
      t("backend.features.3"),
    ],
  },
  {
    title: t("devops.title"),
    description: t("devops.description"),
    keyTechnologies: skills.filter((skill) => skill.type === "devops"),
    features: [
      t("devops.features.1"),
      t("devops.features.2"),
      t("devops.features.3"),
    ],
  },
];

export const Services: FC = () => {
  const t = useTranslations("services");

  return (
    <div className="py-12 md:container lg:py-16">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        {t("title")}
      </h2>
      <h3 className="pb-8 pt-4 text-center text-muted-foreground md:text-lg lg:text-xl">
        {t("description")}
      </h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesList(t).map((services: ServicesProps) => (
          <Card key={services.title}>
            <CardHeader>
              <CardTitle className="item-center flex justify-between">
                {services.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4 grid grid-cols-1 grid-rows-3">
              <CardDescription className="text-base">
                {services.description}
              </CardDescription>
              <span>
                <h4 className="font-bold">{t("keyTechnologies")}</h4>
                <ul className="grid list-disc grid-cols-2 grid-rows-6 pl-6">
                  {services.keyTechnologies.map((technology) => (
                    <li key={technology.id}>{technology.name}</li>
                  ))}
                </ul>
              </span>
              <span>
                <Separator className="mb-4" />
                <h4 className="font-bold">{t("features")}</h4>
                <ul className="list-disc pl-6">
                  {services.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
