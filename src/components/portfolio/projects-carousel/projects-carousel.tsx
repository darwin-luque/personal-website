import type { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import type { PropsWithDictionary } from "@/lib/types";

const getProjects = (
  projectsDict: PropsWithDictionary["dict"]["portfolio"]["projects"]["projects"],
) => [
  {
    id: "another-blog-app",
    title: projectsDict.anotherBlogApp.title,
    description: projectsDict.anotherBlogApp.description,
    previewImage: "/blog-app-preview.png",
    alt: "Preview Screenshot of another-blog-app.vercel.app",
    url: "https://another-blog-app.vercel.app/",
  },
];

export const ProjectsCarousel: FC<PropsWithDictionary> = ({ dict }) => (
  <Carousel className="w-full">
    <CarouselContent>
      {getProjects(dict.portfolio.projects.projects).map((project) => (
        <CarouselItem key={project.id}>
          <div className="p-1">
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex aspect-[3012/1605] w-full items-center justify-center p-2">
                <a
                  href={project.url}
                  className="w-full outline-none [text-decoration:none]"
                >
                  <Image
                    src={project.previewImage}
                    alt={project.alt}
                    aria-label={project.title}
                    aria-hidden="true"
                    width={3012}
                    height={1605}
                    className="h-full w-full rounded-lg object-contain"
                  />
                </a>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);
