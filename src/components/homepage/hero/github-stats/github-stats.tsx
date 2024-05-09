import { GitMerge } from "lucide-react";
import { type FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  currentYear,
  ghStatsComparison,
  notThatBad,
  pastFourYears,
} from "@/paraglide/messages";
import { scrapeGitHubContributions } from "@/lib/scrape";

export const HeroGithubStats: FC = async () => {
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
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{currentYear()}</CardTitle>
          <GitMerge className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {contributions.total[thisYear]}
          </div>
          <p className="text-xs text-muted-foreground">
            {ghStatsComparison({
              percent: (relativeChange * 100).toPrecision(2),
            })}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {pastFourYears()}
          </CardTitle>
          <GitMerge className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalContributions.toLocaleString("en-US")}
          </div>
          <p className="text-xs text-muted-foreground">{notThatBad()}</p>
        </CardContent>
      </Card>
    </div>
  );
};
