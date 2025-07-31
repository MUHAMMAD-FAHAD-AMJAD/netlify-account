
"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { ChevronDown } from "lucide-react";

const navLinks = [
    { 
        name: "Insecticides", 
        href: "/products/insecticides",
        subLinks: [
            { title: "Contact", href: "/products/insecticides/contact"},
            { title: "Systemic", href: "/products/insecticides/systemic"},
            { title: "Biological", href: "/products/insecticides/biological"},
        ]
    },
    { 
        name: "Herbicides", 
        href: "/products/herbicides",
        subLinks: [
            { title: "Pre-emergence", href: "/products/herbicides/pre-emergence"},
            { title: "Post-emergence", href: "/products/herbicides/post-emergence"},
            { title: "Non-selective", href: "/products/herbicides/non-selective"},
        ]
    },
    { 
        name: "Fungicides", 
        href: "/products/fungicides",
        subLinks: [
            { title: "Preventive", href: "/products/fungicides/preventive"},
            { title: "Curative", href: "/products/fungicides/curative"},
            { title: "Systemic", href: "/products/fungicides/systemic"},
        ]
    },
    { 
        name: "Fertilizers", 
        href: "/products/fertilizers",
        subLinks: [
            { title: "NPK", href: "/products/fertilizers/npk"},
            { title: "Urea", href: "/products/fertilizers/urea"},
            { title: "DAP", href: "/products/fertilizers/dap"},
            { title: "Organic", href: "/products/fertilizers/organic"},
        ]
    },
    { 
        name: "Seeds", 
        href: "/products/seeds",
        subLinks: [
            { title: "Wheat", href: "/products/seeds/wheat"},
            { title: "Rice", href: "/products/seeds/rice"},
            { title: "Cotton", href: "/products/seeds/cotton"},
            { title: "Vegetables", href: "/products/seeds/vegetables"},
        ]
    },
];

interface NavItemProps {
  link: typeof navLinks[0];
  closeMobileMenu: () => void;
}

const NavItem = ({ link, closeMobileMenu }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={link.href}
        className={cn(
          "flex items-center gap-1 text-base font-medium transition-colors duration-300 rounded-full px-4 py-2",
          isHovered ? "bg-black text-white" : "bg-transparent text-black"
        )}
        onClick={closeMobileMenu}
      >
        {link.name}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isHovered && "rotate-180")} />
      </Link>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-20 border"
          >
            <ul className="flex flex-col gap-1">
              {link.subLinks.map((sub) => (
                <li key={sub.title}>
                   <Link href={sub.href} className="block w-full text-left px-3 py-2 text-sm text-black hover:bg-gray-100 rounded-md" onClick={closeMobileMenu}>
                      {sub.title}
                   </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface MainNavProps {
  isMobile?: boolean;
  closeMobileMenu: () => void;
}

export default function MainNav({ isMobile = false, closeMobileMenu }: MainNavProps) {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <Accordion type="single" collapsible className="w-full" key={link.name}>
            <AccordionItem value={link.name} className="border-b-0">
              <AccordionTrigger className="text-lg font-medium py-3 hover:no-underline">
                <Link href={link.href} onClick={closeMobileMenu}>{link.name}</Link>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="pl-4 space-y-2">
                  {link.subLinks.map((sub) => (
                    <li key={sub.title}>
                      <Link href={sub.href} className="block py-2 text-muted-foreground hover:text-primary" onClick={closeMobileMenu}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    );
  }

  return (
     <nav className="flex gap-2">
      {navLinks.map((link) => (
        <NavItem key={link.name} link={link} closeMobileMenu={closeMobileMenu} />
      ))}
    </nav>
  );
}
