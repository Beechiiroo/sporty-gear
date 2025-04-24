
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { Trophy } from 'lucide-react';

const FeaturedCarousel = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="py-12 container mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10" />
      <div className="flex items-center gap-4 justify-center mb-8">
        <Trophy className="h-8 w-8 text-yellow-500" />
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Produits Vedettes
        </h2>
      </div>
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {featuredProducts.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ProductCard {...product} featured />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 bg-white/80 hover:bg-white" />
        <CarouselNext className="hidden md:flex -right-4 bg-white/80 hover:bg-white" />
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
