import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-card py-6 text-card-foreground shadow-sm">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-6">
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Darwin Luque. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Download my resume{" "}
            <a
              className="font-bold"
              href="https://utfs.io/f/cf333d0b-71b9-46f1-b1f5-0b5ca20eb1a5-td3bos.pdf"
              download
            >
              here
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <a
            className="text-foreground transition-colors"
            href="https://github.com/darwin-luque"
            target="_blank"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            className="text-foreground transition-colors"
            href="https://www.linkedin.com/in/darwin-luque"
            target="_blank"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">aedin</span>
          </a>
          <a
            className="text-foreground transition-colors"
            href="https://twitter.com/dluque_98"
            target="_blank"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            className="text-foreground transition-colors"
            href="https://www.instagram.com/darwin.vlm"
            target="_blank"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
