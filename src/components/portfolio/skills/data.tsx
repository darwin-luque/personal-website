import {
  SiCss3,
  SiTrpc,
  SiHtml5,
  SiReact,
  SiDocker,
  SiNestjs,
  SiGraphql,
  SiExpress,
  SiAmazons3,
  SiFirebase,
  SiVuedotjs,
  SiAwslambda,
  SiNextdotjs,
  SiNodedotjs,
  SiAmazonec2,
  SiAmazonecs,
  SiAmazonrds,
  SiAwsfargate,
  SiAwsamplify,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGooglecloud,
  SiDigitalocean,
  SiAmazonroute53,
  SiAmazondynamodb,
  SiOpenai,
} from "react-icons/si";
import { GitGraph, RefreshCcw } from "lucide-react";
import Image from "next/image";

export type ISkill = {
  id: number;
  name: string;
  level: number; // 1-100
  icon: JSX.Element;
  color: string;
};

export const skills = [
  {
    id: 2,
    name: "Typescript",
    level: 100,
    color: "[#3178c6]",
    icon: <SiTypescript className="text-[#3178c6]" />,
  },
  {
    id: 3,
    name: "React",
    level: 100,
    color: "[#3178c6]",
    icon: <SiReact className="text-[#3178c6]" />,
  },
  {
    id: 4,
    name: "Next.js",
    level: 95,
    color: "primary",
    icon: <SiNextdotjs className="text-primary" />,
  },
  {
    id: 6,
    name: "Node.js",
    level: 90,
    color: "[#8cc84b]",
    icon: <SiNodedotjs className="text-[#8cc84b]" />,
  },
  {
    id: 30,
    name: "Git",
    level: 90,
    color: "primary",
    icon: <GitGraph className="text-primary" />,
  },
  {
    id: 31,
    name: "OpenAI",
    level: 80,
    color: "primary",
    icon: <SiOpenai className="text-primary" />,
  },
  {
    id: 32,
    name: "LangChain",
    level: 80,
    color: "primary",
    icon: <p>🦜</p>,
  },
  {
    id: 33,
    name: "Copilot",
    level: 80,
    color: "primary",
    icon: (
      <Image
        src="https://copilot.microsoft.com/rp/vE266_E90czuUc-Fs55Qoq9hIBc.svg"
        alt="Github Copilot"
        width={120}
        height={120}
        className="h-4 w-4 "
      />
    ),
  },
  {
    id: 1,
    name: "JavaScript",
    level: 100,
    color: "[#f7df1e]",
    icon: <SiJavascript className="text-[#f7df1e]" />,
  },
  {
    id: 5,
    name: "NestJS",
    level: 95,
    color: "[#e0234e]",
    icon: <SiNestjs className="text-[#e0234e]" />,
  },
  {
    id: 7,
    name: "React Native",
    level: 95,
    color: "[#3178c6]",
    icon: <SiReact className="text-[#3178c6]" />,
  },
  {
    id: 8,
    name: "Express.js",
    level: 90,
    color: "primary",
    icon: <SiExpress className="text-primary" />,
  },
  {
    id: 9,
    name: "tRPC",
    level: 90,
    color: "primary",
    icon: <SiTrpc className="text-primary" />,
  },
  {
    id: 10,
    name: "Vue.js",
    level: 70,
    color: "[#41b883]",
    icon: <SiVuedotjs className="text-[#41b883]" />,
  },
  {
    id: 11,
    name: "HTML",
    level: 100,
    color: "[#f06529]",
    icon: <SiHtml5 className="text-[#f06529]" />,
  },
  {
    id: 12,
    name: "CSS",
    level: 100,
    color: "[#2965f1]",
    icon: <SiCss3 className="text-[#2965f1]" />,
  },
  {
    id: 14,
    name: "Tailwind CSS",
    level: 90,
    color: "primary",
    icon: <SiTailwindcss className="text-primary" />,
  },
  {
    id: 15,
    name: "GraphQL",
    level: 80,
    color: "[#e535ab]",
    icon: <SiGraphql className="text-[#e535ab]" />,
  },
  {
    id: 16,
    name: "Docker",
    level: 80,
    color: "[#0db7ed]",
    icon: <SiDocker className="text-[#0db7ed]" />,
  },
  {
    id: 17,
    name: "AWS Amplify",
    level: 75,
    color: "[#ff9002]",
    icon: <SiAwsamplify className="text-[#ff9002]" />,
  },
  {
    id: 18,
    name: "AWS Lambda",
    level: 70,
    color: "[#ff9900]",
    icon: <SiAwslambda className="text-[#ff9900]" />,
  },
  {
    id: 19,
    name: "Amazon S3",
    level: 70,
    color: "[#E15343]",
    icon: <SiAmazons3 className="text-[#E15343]" />,
  },
  {
    id: 20,
    name: "Amazon RDS",
    level: 70,
    color: "[#3369A3]",
    icon: <SiAmazonrds className="text-[#3369A3]" />,
  },
  {
    id: 21,
    name: "Amazon Route 53",
    level: 70,
    color: "[#FF9900]",
    icon: <SiAmazonroute53 className="text-[#FF9900]" />,
  },
  {
    id: 22,
    name: "Amazon DynamoDB",
    level: 70,
    color: "[#3369A3]",
    icon: <SiAmazondynamodb className="text-[#3369A3]" />,
  },
  {
    id: 23,
    name: "Amazon EC2",
    level: 70,
    color: "[#FF9900]",
    icon: <SiAmazonec2 className="text-[#FF9900]" />,
  },
  {
    id: 24,
    name: "Amazon ECS",
    level: 70,
    color: "[#FF9900]",
    icon: <SiAmazonecs className="text-[#FF9900]" />,
  },
  {
    id: 25,
    name: "AWS Fargate",
    level: 70,
    color: "[#FF9900]",
    icon: <SiAwsfargate className="text-[#FF9900]" />,
  },
  {
    id: 26,
    name: "Google Cloud",
    level: 60,
    color: "[#4285F4]",
    icon: <SiGooglecloud className="text-[#4285F4]" />,
  },
  {
    id: 27,
    name: "Firebase",
    level: 60,
    color: "[#FFCA28]",
    icon: <SiFirebase className="text-[#FFCA28]" />,
  },
  {
    id: 28,
    name: "DigitalOcean",
    level: 80,
    color: "[#0281FF]",
    icon: <SiDigitalocean className="text-[#0281FF]" />,
  },
  {
    id: 29,
    name: "Agile",
    level: 90,
    color: "primary",
    icon: <RefreshCcw className="text-primary" />,
  },
] satisfies ISkill[];
