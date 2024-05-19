import { forwardRef } from "react";
import { Link, type LinkProps } from "@/lib/intl";
import { cn } from "../../../lib/utils";

export const ListItemContent = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & LinkProps
>(({ className, title, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className,
      )}
      {...props}
    >
      <p className="text-sm font-medium leading-none">{title}</p>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </Link>
  );
});

ListItemContent.displayName = "ListItemContent";
