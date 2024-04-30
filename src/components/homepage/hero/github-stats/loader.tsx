import type { FC } from "react";
import { GitMerge } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const HeroGithubStatsLoader: FC = () => (
  <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
    {[0, 1].map((i) => (
      <Card key={i}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <Skeleton className="h-5 w-20" />
          <GitMerge className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-full" />
          <Skeleton className="mt-1 h-4 w-full" />
        </CardContent>
      </Card>
    ))}
  </div>
);
