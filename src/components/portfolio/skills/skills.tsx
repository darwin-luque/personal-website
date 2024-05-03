import type { FC } from "react";
import { Skill } from "./skill";
import { skills } from "./data";

export const Skills: FC = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </div>
  );
};
