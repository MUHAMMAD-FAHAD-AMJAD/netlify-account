"use client";

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

const brands = ["Syngenta", "FMC", "Engro", "Bayer", "Maher Seeds", "Other"];
const stockStatus = ["In Stock", "Out of Stock"];

export default function ProductFilters() {
  return (
    <div className="space-y-6 sticky top-24">
       <Accordion type="multiple" defaultValue={["brands", "price", "stock"]} className="w-full">
        <AccordionItem value="brands">
          <AccordionTrigger className="text-base font-medium">Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {brands.map(brand => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand}`} />
                  <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="p-1">
                <Slider defaultValue={[1000, 5000]} max={10000} step={100} />
                <div className="flex justify-between text-sm text-muted-foreground mt-3">
                    <span>Rs. 1,000</span>
                    <span>Rs. 5,000</span>
                </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="stock">
          <AccordionTrigger className="text-base font-medium">Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {stockStatus.map(status => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox id={`stock-${status}`} />
                  <Label htmlFor={`stock-${status}`} className="font-normal">{status}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
       <div className="space-y-3">
          <h3 className="text-base font-medium">Sort By</h3>
            <RadioGroup defaultValue="featured">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="featured" id="sort-featured" />
                    <Label htmlFor="sort-featured" className="font-normal">Featured</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="price-asc" id="sort-price-asc" />
                    <Label htmlFor="sort-price-asc" className="font-normal">Price: Low to High</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="price-desc" id="sort-price-desc" />
                    <Label htmlFor="sort-price-desc" className="font-normal">Price: High to Low</Label>
                </div>
                 <div className="flex items-center space-x-2">
                    <RadioGroupItem value="newest" id="sort-newest" />
                    <Label htmlFor="sort-newest" className="font-normal">Newest Arrivals</Label>
                </div>
            </RadioGroup>
        </div>
        <Button className="w-full h-11" variant="outline">Clear Filters</Button>
    </div>
  );
}
