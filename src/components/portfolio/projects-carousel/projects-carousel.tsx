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
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    id: "another-blog-app",
    title: "Another Blog App",
    description: "A simple blog app built with Next.js and Tailwind CSS.",
    previewImage: "/blog-app-preview.png",
    alt: "Preview Screenshot of another-blog-app.vercel.app",
    url: "https://another-blog-app.vercel.app/",
  },
];

export const ProjectsCarousel: FC = () => (
  <Carousel className="w-full">
    <CarouselContent>
      {projects.map((project) => (
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
                    className="h-full w-full object-contain"
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
