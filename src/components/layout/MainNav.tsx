"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
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

const NavItem = ({ link }: { link: typeof navLinks[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={cn(
          "text-base font-medium transition-colors duration-300 rounded-full px-4 py-2",
          isHovered ? "bg-black text-white" : "bg-transparent text-black"
        )}
      >
        {link.name}
      </button>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-20"
          >
            <ul className="flex flex-col gap-1">
              {link.subLinks.map((sub) => (
                <li key={sub.title}>
                   <Link href={sub.href} className="block w-full text-left px-3 py-2 text-sm text-black hover:underline rounded-md">
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
     <nav className="flex gap-2">
      {navLinks.map((link) => (
        <NavItem key={link.name} link={link} />
      ))}
    </nav>
  );
}