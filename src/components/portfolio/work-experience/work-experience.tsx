import { useTranslations } from "next-intl";
import { ContactRound } from "lucide-react";
import { Fragment, type FC } from "react";
import Image from "next/image";
import { Link } from "@/lib/intl";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const companies = [
  {
    id: 1,
    name: "CODE Éxitos",
    logo: "https://codexitos.com/hubfs/CEx%20Symbol%20-%20RGB-1.png",
  },
  {
    id: 2,
    name: "PartnerHero",
    logo: "https://assets-global.website-files.com/64469b7fb04c5ad8c3fb80e2/64ee0c5b5e9631259cabc0ad_256fav.png",
  },
  {
    id: 3,
    name: "Universidad Tecnológica Centroamericana (UNITEC)",
    logo: "https://www.unitec.edu/favicon/apple-icon-180x180.png",
  },
];

export const getJobs = (t: ReturnType<typeof useTranslations<string>>) => [
  {
    id: 1,
    title: "Software Engineer",
    companyId: 1,
    location: "San Pedro Sula, Honduras",
    startDate: new Date("2021-02-01"),
    endDate: new Date("2022-04-15"),
    description: (
      <p>
        {t("jobs.softwareEngineer.description1")}{" "}
        <Link
          className="inline items-center text-blue-700 hover:underline dark:text-blue-500"
          href="/portfolio#skills"
        >
          {t("jobs.softwareEngineer.description2")}
        </Link>{" "}
        {t("jobs.softwareEngineer.description3")}
      </p>
    ),
  },
  {
    id: 2,
    title: "Tech Lead",
    companyId: 1,
    location: "San Pedro Sula, Honduras",
    startDate: new Date("2022-04-15"),
    endDate: new Date("2023-05-15"),
    description: <p>{t("jobs.techLead.description")}</p>,
  },
  {
    id: 3,
    title: "Engineering Manager",
    companyId: 1,
    location: "San Pedro Sula, Honduras",
    startDate: new Date("2023-05-15"),
    description: <p>{t("jobs.engineeringManager.description")}</p>,
  },
  {
    id: 4,
    title: "Support Hero",
    companyId: 2,
    location: "Remote",
    startDate: new Date("2020-10-15"),
    endDate: new Date("2021-01-31"),
    description: <p>{t("jobs.supportHero.description")}</p>,
  },
  {
    id: 5,
    title: "IT Support",
    companyId: 3,
    location: "San Pedro Sula, Honduras",
    startDate: new Date("2018-01-15"),
    endDate: new Date("2020-01-31"),
    description: <p>{t("jobs.itSupport.description")}</p>,
  },
];

type Job = ReturnType<typeof getJobs>[number];

type ParsedJob = {
  companyId: number;
  positions: Job[];
};

export const WorkExperience: FC = () => {
  const t = useTranslations("portfolio.experience");
  const parsedJobs = getJobs(t).reduce((acc, job) => {
    const existingJob = acc.find((j) => j.companyId === job.companyId);
    if (existingJob) {
      existingJob.positions.push(job);
    } else {
      acc.push({ companyId: job.companyId, positions: [job] });
    }
    return acc;
  }, [] as ParsedJob[]);

  return (
    <div className="flex w-full flex-col justify-center gap-4">
      {parsedJobs.map((parsedJob) => {
        const company = companies.find((c) => c.id === parsedJob.companyId);
        if (!company) return null;

        return (
          <Card key={parsedJob.companyId} className="w-full">
            <CardHeader className="flex-row">
              <div className="flex aspect-square w-10 items-center justify-center rounded-full">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={95}
                  height={95}
                  className="h-9 w-9"
                />
              </div>
              <div className="ml-2 flex flex-1 flex-col justify-center">
                <CardTitle>{company.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {parsedJob.positions.map((position, i, arr) => (
                  <Fragment key={position.id}>
                    <div className="flex w-full gap-2">
                      <div>
                        <ContactRound />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h3 className="text-lg font-bold">{position.title}</h3>
                        <p className="text-sm text-gray-500">
                          {position.startDate.toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}{" "}
                          -{" "}
                          {position.endDate
                            ? position.endDate.toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                              })
                            : "Present"}
                        </p>
                        {position.description}
                      </div>
                    </div>
                    {arr.length === i + 1 ? null : (
                      <Separator className="w-11/12" />
                    )}
                  </Fragment>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
