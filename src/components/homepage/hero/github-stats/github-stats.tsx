import { GitMerge } from "lucide-react";
import { type FC } from "react";
import { api } from "@/trpc/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HeroGithubStats: FC = async () => {
  const currentYear = new Date().getFullYear();
  const years: [number, ...number[]] = [
    currentYear,
    currentYear - 1,
    currentYear - 2,
    currentYear - 3,
  ];
  const contributions = await api.github.getContributions({
    username: "darwin-luque",
    format: "nested",
    fetchAll: false,
    lastYear: false,
    years,
  });
  const currentYearContributions = contributions.total[currentYear] ?? 0;
  const lastYearContributions = contributions.total[currentYear - 1] ?? 0;
  const relativeChange =
    (currentYearContributions - lastYearContributions) /
    (lastYearContributions || 1);
  const totalContributions = years.reduce(
    (acc, year) => acc + (contributions.total[year] ?? 0),
    0,
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Year</CardTitle>
          <GitMerge className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {contributions.total[currentYear]}
          </div>
          <p className="text-xs text-muted-foreground">
            {(relativeChange * 100).toPrecision(2)}% from last year
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">4 Last Years</CardTitle>
          <GitMerge className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalContributions.toLocaleString("en-US")}
          </div>
          <p className="text-xs text-muted-foreground">Not that bad tbh</p>
        </CardContent>
      </Card>
    </div>
  );
};
