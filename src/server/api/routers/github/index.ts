import { createTRPCRouter } from "@/server/api/trpc";
import { getContributions } from "./get-contributions";

export const githubRouter = createTRPCRouter({
  getContributions,
});
