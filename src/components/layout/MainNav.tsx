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

const products = [
    { title: "Insecticides", href: "/products/insecticides", description: "Effective solutions to protect your crops from pests." },
    { title: "Weedicides", href: "/products/weedicides", description: "Control and eliminate unwanted weeds efficiently." },
    { title: "Fungicides", href: "/products/fungicides", description: "Prevent and treat fungal diseases in your plants." },
    { title: "Micro Nutrients", href: "/products/micronutrients", description: "Essential nutrients for optimal plant growth." },
    { title: "Granules", href: "/products/granules", description: "Slow-release granules for sustained nutrient supply." },
    { title: "Fertilizers", href: "/products/fertilizers", description: "Boost your soil's fertility for a richer harvest." },
]

const navLinks = [
    { name: "Home", href: "/" },
    { 
        name: "Products", 
        subLinks: products
    },
    { name: "Solutions", href: "/solutions" },
    { name: "Company", href: "/company" },
    { name: "Support", href: "/support" },
];

export default function MainNav({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-4">
        {navLinks.map((link) => (
          link.subLinks ? (
            <Accordion type="single" collapsible className="w-full" key={link.name}>
              <AccordionItem value={link.name}>
                <AccordionTrigger className="text-lg font-semibold py-2">{link.name}</AccordionTrigger>
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
            <Link href={link.href!} key={link.name} className="text-lg font-semibold py-2 hover:text-primary">{link.name}</Link>
          )
        ))}
      </div>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
            link.subLinks ? (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuTrigger className="text-base font-medium transition-colors hover:text-black focus:text-black data-[active]:text-black data-[state=open]:text-black hover:bg-black hover:text-white focus:bg-black focus:text-white rounded-full">
                  {link.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] lg:w-[300px]">
                    {link.subLinks.map((sub) => (
                      <ListItem key={sub.title} title={sub.title} href={sub.href}>
                        {sub.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
                 <NavigationMenuItem key={link.name}>
                    <Link href={link.href!} legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-base font-medium transition-colors hover:text-black focus:text-black data-[active]:text-black data-[state=open]:text-black hover:bg-black hover:text-white focus:bg-black focus:text-white rounded-full")}>
                        {link.name}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            )
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
