
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from '@/stores/CartStore';
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category }) => {
  const addToCart = useCart(state => state.addItem);
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
    });
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center rounded-full bg-blue-600 px-2.5 py-1 text-xs font-medium text-white">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4" />
        </div>
        <h3 className="font-semibold text-lg mb-2 text-gray-900">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">${price}</span>
          <Button 
            onClick={handleAddToCart}
            variant="default"
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
