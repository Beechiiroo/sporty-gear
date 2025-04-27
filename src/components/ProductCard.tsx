
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useCart } from '@/stores/CartStore';
import { useFavorites } from '@/stores/FavoritesStore';
import { useToast } from "@/hooks/use-toast";
import useSound from '@/hooks/useSound';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category, rating = 5, featured }) => {
  const addToCart = useCart(state => state.addItem);
  const { toast } = useToast();
  const { toggleFavorite, isFavorite } = useFavorites();
  const isLiked = isFavorite(id);
  const { playAddToCartSound } = useSound();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
    playAddToCartSound();
    toast({
      title: "Ajouté au panier",
      description: `${name} a été ajouté à votre panier`,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(id);
    toast({
      title: isLiked ? "Retiré des favoris" : "Ajouté aux favoris",
      description: `${name} a été ${isLiked ? "retiré de" : "ajouté à"} votre liste de favoris`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 relative bg-background border-purple-500/20">
      {featured && (
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-800">
            Produit Vedette
          </span>
        </div>
      )}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 left-2 bg-background/80 hover:bg-background rounded-full"
          onClick={handleToggleFavorite}
        >
          <Heart className={`h-5 w-5 ${isLiked ? 'fill-purple-500 text-purple-500' : 'text-foreground'}`} />
        </Button>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-1 text-purple-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < filledStars ? 'fill-current' : (i === filledStars && hasHalfStar ? 'fill-[50%]' : '')}`} 
            />
          ))}
          <span className="text-xs text-purple-200/80 ml-1">({rating.toFixed(1)})</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-purple-500">{category}</span>
          <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-purple-400 transition-colors">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {formatPrice(price)}
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    onClick={handleAddToCart}
                    variant="default"
                    size="sm"
                    className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ajouter
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ajouter au panier</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
