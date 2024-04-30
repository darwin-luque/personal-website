import { publicProcedure } from "@/server/api/trpc";
import { scrapeGitHubContributions } from "@/lib/scrape";
import { z } from "zod";

export const getContributionsQuery = z.object({
  username: z.string(),
  format: z.enum(["nested"]),
  fetchAll: z.boolean(),
  lastYear: z.boolean(),
  years: z.array(z.number()).nonempty(),
});

export const getContributions = publicProcedure
  .input(getContributionsQuery)
  .query(
    async ({ input }) => scrapeGitHubContributions(input.username, input)
  );
