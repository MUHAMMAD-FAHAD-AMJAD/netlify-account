
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const brands = ["Saver", "Kanzo AG", "Bayer", "FMC", "Other"];
const stockStatus = ["In Stock", "Out of Stock"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest Arrivals" },
];

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([1000, 5000]);

  return (
    <div className="space-y-8 sticky top-28">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Filters</h2>
        <Button variant="ghost" className="text-sm text-primary hover:text-primary/80">Clear all</Button>
      </div>
      
       <Accordion type="multiple" defaultValue={["brands", "price", "stock", "sort"]} className="w-full space-y-4">
        
        <AccordionItem value="brands" className="border-b-0">
          <AccordionTrigger className="text-lg font-semibold py-2 hover:no-underline">Brands</AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-3">
              {brands.map(brand => (
                <div key={brand} className="flex items-center space-x-3">
                  <Checkbox id={`brand-${brand}`} className="h-5 w-5 rounded"/>
                  <Label htmlFor={`brand-${brand}`} className="font-normal text-base cursor-pointer">{brand}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <Separator />

        <AccordionItem value="price" className="border-b-0">
          <AccordionTrigger className="text-lg font-semibold py-2 hover:no-underline">Price Range</AccordionTrigger>
          <AccordionContent className="pt-4">
             <Slider 
                value={priceRange} 
                onValueChange={setPriceRange}
                max={10000} 
                step={100} 
                className="mb-6"
            />
            <div className="flex justify-between items-center gap-4 text-sm">
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="min-price" className="text-muted-foreground">Min</Label>
                    <Input 
                      id="min-price"
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full h-10"
                      prefix="Rs."
                    />
                </div>
                <div className="text-muted-foreground pt-5">-</div>
                 <div className="flex flex-col gap-1.5">
                    <Label htmlFor="max-price" className="text-muted-foreground">Max</Label>
                    <Input 
                      id="max-price"
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full h-10"
                      prefix="Rs."
                    />
                </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <Separator />

        <AccordionItem value="stock" className="border-b-0">
          <AccordionTrigger className="text-lg font-semibold py-2 hover:no-underline">Availability</AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-3">
              {stockStatus.map(status => (
                <div key={status} className="flex items-center space-x-3">
                  <Checkbox id={`stock-${status}`} className="h-5 w-5 rounded"/>
                  <Label htmlFor={`stock-${status}`} className="font-normal text-base cursor-pointer">{status}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <Separator />

        <AccordionItem value="sort" className="border-b-0">
          <AccordionTrigger className="text-lg font-semibold py-2 hover:no-underline">Sort By</AccordionTrigger>
          <AccordionContent className="pt-4">
            <RadioGroup defaultValue="featured" className="space-y-3">
                {sortOptions.map(option => (
                    <div key={option.value} className="flex items-center space-x-3">
                        <RadioGroupItem value={option.value} id={`sort-${option.value}`} className="h-5 w-5"/>
                        <Label htmlFor={`sort-${option.value}`} className="font-normal text-base cursor-pointer">{option.label}</Label>
                    </div>
                ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}


function Separator() {
    return <div className="border-t border-gray-200" />;
}
