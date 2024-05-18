import type { FC } from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

type Course = {
  id: number;
  title: string;
  platform: string;
  certificationUrl: string;
};

const courses = [
  {
    id: 0,
    title: "The Complete Self-Driving Car Course - Applied Deep Learning",
    platform: "Udemy",
    certificationUrl:
      "https://www.udemy.com/certificate/UC-b2571768-a6b8-4ae1-98b9-bcf39c351637/",
  },
  {
    id: 1,
    title: "PyTorch for Deep Learning and Computer Vision",
    platform: "Udemy",
    certificationUrl:
      "https://www.udemy.com/certificate/UC-822feafb-6c72-445a-9d82-b0e471f11cea/",
  },
  {
    id: 2,
    title: "The Complete Python Bootcamp Frrom Zero to Hero in Python",
    platform: "Udemy",
    certificationUrl:
      "https://www.udemy.com/certificate/UC-28df3927-b691-4966-80f3-694fd95aab52/",
  },
  {
    id: 3,
    title: "Vue - The Complete Guide (incl. Router & Composition API)",
    platform: "Udemy",
    certificationUrl:
      "https://www.udemy.com/certificate/UC-675a6956-ec07-4c7c-b012-e0770cfbccec/",
  },
  {
    id: 4,
    title: "React - The Complete Guide 2024 (incl. React Router & Redux)",
    platform: "Udemy",
    certificationUrl:
      "https://www.udemy.com/certificate/UC-aa39bad6-29f5-417e-bb12-aae5f452268d/",
  },
  {
    id: 5,
    title: "Typescript: The Complete Developer's Guide",
    platform: "Udemy",
    certificationUrl:
      "https://www.udemy.com/certificate/UC-15aee72c-6151-447f-aded-7222fa0c65ee/",
  },
  {
    id: 6,
    title: "The Complete 2024 Web Development Bootcamp",
    platform: "Udemy",
    certificationUrl:
      "https://www.udemy.com/certificate/UC-1cea4eb2-c88a-450c-af2c-2363d8af0a9a/",
  },
  {
    id: 7,
    title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    platform: "Udemy",
    certificationUrl:
      "https://www.udemy.com/certificate/UC-32212798-0b91-4504-97cf-8e3bae2f059c/",
  },
  {
    id: 8,
    title: "Machine Learning",
    platform: "Coursera",
    certificationUrl:
      "https://coursera.org/share/d90f2e5135655cbcf10897faca48a252",
  },
  {
    id: 9,
    title:
      "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    platform: "Coursera",
    certificationUrl:
      "https://coursera.org/share/82014f58536a1e663c725c8ab0a455a1",
  },
  {
    id: 10,
    title: "Using Python to Access Web Data",
    platform: "Coursera",
    certificationUrl:
      "https://coursera.org/share/1857474ce0ddf046984ea7c2b9f1ddc8",
  },
  {
    id: 11,
    title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    platform: "Coursera",
    certificationUrl:
      "https://coursera.org/share/193903c849fd9d41634bf0ecc821750d",
  },
  {
    id: 12,
    title: "Neural Networks and Deep Learning",
    platform: "Coursera",
    certificationUrl:
      "https://coursera.org/share/e75c52f05a2a833e734171150fe9a6b5",
  },
  {
    id: 13,
    title: "Using Databases with Python",
    platform: "Coursera",
    certificationUrl:
      "https://coursera.org/share/6bc4a99d42706120a56e05ee712dbdca",
  },
  {
    id: 14,
    title: "Structuring Machine Learning Projects",
    platform: "Coursera",
    certificationUrl:
      "https://coursera.org/share/b9593b3a4fe48eea4c4fb11a42c3cd87",
  },
  {
    id: 15,
    title: "Python Data Structures",
    platform: "Coursera",
    certificationUrl:
      "https://coursera.org/share/3ffc6eb5db11edc8e7a74b859994b3b6",
  },
  {
    id: 16,
    title: "Programming for Everybody (Getting Started with Python)",
    platform: "Coursera",
    certificationUrl:
      "https://coursera.org/share/7c18b4843b4e98774a084c31b68c6e43",
  },
] satisfies Course[];

export const CoursesTab: FC = () => {
  const t = useTranslations("portfolio.education");

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
            <CardDescription>{course.platform}</CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href={course.certificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("viewCertification")}
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
