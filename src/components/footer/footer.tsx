import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-muted-foreground py-6 text-background">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-6">
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Darwin Luque. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            className="text-background transition-colors hover:text-gray-100"
            href="https://github.com/darwin-luque"
            target="_blank"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            className="text-background transition-colors hover:text-gray-100"
            href="https://www.linkedin.com/in/darwin-luque"
            target="_blank"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">Linkedin</span>
          </Link>
          <Link
            className="text-background transition-colors hover:text-gray-100"
            href="https://twitter.com/dluque_98"
            target="_blank"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            className="text-background transition-colors hover:text-gray-100"
            href="https://www.instagram.com/darwin.vlm"
            target="_blank"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
