
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
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const insecticides = [
    { title: "Contact Insecticides", href: "/products/insecticides/contact"},
    { title: "Systemic Insecticides", href: "/products/insecticides/systemic"},
    { title: "Biological Control", href: "/products/insecticides/biological"},
]

const herbicides = [
    { title: "Pre-emergence", href: "/products/herbicides/pre-emergence"},
    { title: "Post-emergence", href: "/products/herbicides/post-emergence"},
    { title: "Non-selective", href: "/products/herbicides/non-selective"},
]

const fungicides = [
    { title: "Preventive", href: "/products/fungicides/preventive"},
    { title: "Curative", href: "/products/fungicides/curative"},
    { title: "Systemic", href: "/products/fungicides/systemic"},
]

const fertilizers = [
    { title: "NPK", href: "/products/fertilizers/npk"},
    { title: "Urea", href: "/products/fertilizers/urea"},
    { title: "DAP", href: "/products/fertilizers/dap"},
    { title: "Organic", href: "/products/fertilizers/organic"},
]

const seeds = [
    { title: "Wheat", href: "/products/seeds/wheat"},
    { title: "Rice", href: "/products/seeds/rice"},
    { title: "Cotton", href: "/products/seeds/vegetables"},
    { title: "Vegetables", href: "/products/seeds/vegetables"},
]

const navLinks = [
    { name: "Insecticides", subLinks: insecticides },
    { name: "Herbicides", subLinks: herbicides },
    { name: "Fungicides", subLinks: fungicides },
    { name: "Fertilizers", subLinks: fertilizers },
    { name: "Seeds", subLinks: seeds },
];

export default function MainNav({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-4">
        {navLinks.map((link) => (
          link.subLinks ? (
            <Accordion type="single" collapsible className="w-full" key={link.name}>
              <AccordionItem value={link.name} className="border-b-0">
                <AccordionTrigger className="text-lg font-medium py-3 hover:no-underline">{link.name}</AccordionTrigger>
                <AccordionContent>
                  <ul className="pl-4 space-y-2">
                    {link.subLinks.map((sub) => (
                      <li key={sub.title}>
                        <Link href={sub.href} className="block py-2 text-muted-foreground hover:text-primary">{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            'href' in link && <Link href={link.href!} key={link.name} className="text-lg font-medium py-3 hover:text-primary">{link.name}</Link>
          )
        ))}
      </div>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.name} value={link.name}>
            <NavigationMenuTrigger className="text-base font-medium bg-transparent transition-colors hover:text-white focus:text-white data-[active]:text-white data-[state=open]:text-white hover:bg-black focus:bg-black rounded-xl">
              {link.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-1 p-4 md:w-[250px] lg:w-[300px]">
                {link.subLinks.map((sub) => (
                  <ListItem key={sub.title} title={sub.title} href={sub.href} />
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
  ({ className, title, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none group-hover:underline group-hover:underline-offset-4">{title}</div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
