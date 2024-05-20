import { forwardRef } from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import type { LinkProps } from "@/lib/intl";
import { ListItemContent } from "./content";

export const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & LinkProps
>((props, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <ListItemContent {...props} ref={ref} />
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
