import { type FC } from "react";
import { GitMerge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { scrapeGitHubContributions } from "@/lib/scrape";
import { useTranslations } from "next-intl";

export const HeroGithubStats: FC = async () => {
  const t = useTranslations("hero.github");

  const thisYear = new Date().getFullYear();
  const years: [number, ...number[]] = [
    thisYear,
    thisYear - 1,
    thisYear - 2,
    thisYear - 3,
  ];
  const contributions = await scrapeGitHubContributions("darwin-luque", {
    format: "nested",
    fetchAll: false,
    lastYear: false,
    years,
  });
  const thisYearContributions = contributions.total[thisYear] ?? 0;
  const lastYearContributions = contributions.total[thisYear - 1] ?? 0;
  const relativeChange =
    (thisYearContributions - lastYearContributions) /
    (lastYearContributions || 1);
  const totalContributions = years.reduce(
    (acc, year) => acc + (contributions.total[year] ?? 0),
    0,
  );

  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-8 xl:grid-cols-3">
      <Card className="max-w-[250px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t("currentYear")}
          </CardTitle>
          <GitMerge className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {contributions.total[thisYear]}
          </div>
          <p className="text-xs text-muted-foreground">
            {t("statsComparison", {
              percent: (relativeChange * 100).toPrecision(2),
            })}
          </p>
        </CardContent>
      </Card>
      <Card className="max-w-[250px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t("pastFourYears")}
          </CardTitle>
          <GitMerge className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalContributions.toLocaleString("en-US")}
          </div>
          <p className="text-xs text-muted-foreground">{t("notThatBad")}</p>
        </CardContent>
      </Card>
    </div>
  );
};
