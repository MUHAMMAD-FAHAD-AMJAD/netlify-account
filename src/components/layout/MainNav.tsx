"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const categories = {
  Insecticides: ["Contact", "Systemic", "Biological Control"],
  Herbicides: ["Pre-emergence", "Post-emergence", "Non-selective"],
  Fungicides: ["Preventive", "Curative", "Systemic"],
  Fertilizers: ["NPK", "Urea", "DAP", "Organic"],
  Seeds: ["Wheat", "Rice", "Cotton", "Vegetables"],
};

export default function MainNav({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(categories).map(([category, subcategories]) => (
          <AccordionItem value={category} key={category}>
            <AccordionTrigger className="text-lg font-semibold py-4">{category}</AccordionTrigger>
            <AccordionContent>
              <ul className="pl-4 space-y-2">
                {subcategories.map((sub) => (
                  <li key={sub}>
                    <Link href="#" className="block py-2 text-muted-foreground hover:text-primary">{sub}</Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(categories).map(([category, subcategories]) => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger className="text-base font-medium transition-colors hover:text-black focus:text-black data-[active]:text-black data-[state=open]:text-black">
              {category}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {subcategories.map((sub) => (
                  <ListItem key={sub} title={sub} href="#">
                    Shop all {sub.toLowerCase()} {category.toLowerCase()}.
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
