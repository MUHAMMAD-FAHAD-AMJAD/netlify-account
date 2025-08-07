
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    image: 'https://picsum.photos/seed/agri1/1600/600',
    title: 'Protect Your Crops, Secure Your Future',
    description: 'Discover our range of advanced pesticides, designed to protect your crops from pests and diseases, ensuring a bountiful harvest.',
    imageHint: 'A lush green field of crops under a clear blue sky'
  },
  {
    image: 'https://picsum.photos/seed/agri2/1600/600',
    title: 'Nourish Your Soil, Flourish Your Farm',
    description: 'Our high-quality fertilizers provide the essential nutrients your soil needs for optimal growth and yield.',
    imageHint: 'A farmer holding rich, dark soil in their hands'
  },
  {
    image: 'https://picsum.photos/seed/agri3/1600/600',
    title: 'The Best Start for Your Seeds',
    description: 'Choose from our wide selection of high-yield seeds for a successful planting season.',
    imageHint: 'Close-up of a young sprout growing from the earth'
  },
  {
    image: 'https://picsum.photos/seed/agri4/1600/600',
    title: 'Expert Solutions for Every Farmer',
    description: 'From pest control to soil health, we offer expert advice and products to help you succeed.',
    imageHint: 'An agronomist inspecting a wheat field with a magnifying glass'
  },
];

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full relative">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }} plugins={[]}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="h-[600px] w-full relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  data-ai-hint={slide.imageHint}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-50"
                  priority={index === 0}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="container mx-auto px-4 text-center"
                  >
                    <h1 className="text-5xl md:text-7xl font-black mb-4 text-balance">{slide.title}</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-balance">{slide.description}</p>
                    <Link href="/products/all" passHref>
                      <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg bg-white text-black hover:bg-gray-200">
                        <span>Explore Products <ArrowRight className="ml-2 h-5 w-5" /></span>
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-white/80 hover:bg-black text-black hover:text-white transition-colors duration-300 backdrop-blur-sm border-none shadow-lg" />
        <CarouselNext className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-white/80 hover:bg-black text-black hover:text-white transition-colors duration-300 backdrop-blur-sm border-none shadow-lg" />
      </Carousel>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === i ? 'w-6 bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
