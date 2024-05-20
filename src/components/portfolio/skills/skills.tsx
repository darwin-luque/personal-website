import type { FC } from "react";
import { skills } from "./data";
import { Progress } from "@/components/ui/progress";

const hexPattern = /^#[0-9A-F]{6}$/i;

export const Skills: FC = () => (
  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    {skills.map((skill) => {
      const skillColor = skill.color.replace("[", "").replace("]", "");
      const color = hexPattern.test(skillColor) ? skillColor : undefined;

      return (
        <div
          key={skill.id}
          className="w-11/12 md:w-full space-y-1 rounded-lg border border-transparent px-4 py-2 hover:border-foreground"
        >
          <div className="flex items-center">
            <div className="mr-2">{skill.icon}</div>
            <p className={`text-${skill.color}`}>{skill.name}</p>
          </div>
          <Progress value={skill.level} className="h-3 w-full" color={color} />
        </div>
      );
    })}
  </div>
);
