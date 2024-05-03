"use client";

import type { FC } from "react";
import { Progress } from "@/components/ui/progress";

export type ISkill = {
  id: number;
  name: string;
  level: number; // 1-100
  icon: JSX.Element;
  color: string;
};

export type SkillProps = {
  skill: ISkill;
};

export const Skill: FC<SkillProps> = ({ skill }) => {
  return (
    <div className="w-full space-y-1 rounded-lg border border-transparent px-4 py-2 hover:border-foreground">
      <div className="flex items-center">
        <div className="mr-2">{skill.icon}</div>
        <p className={`text-${skill.color}`}>{skill.name}</p>
      </div>
      <Progress value={skill.level} className="h-3 w-full" />
    </div>
  );
};
