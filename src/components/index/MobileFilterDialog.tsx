
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import PriceFilter from "@/components/PriceFilter";
import RatingFilter from "@/components/RatingFilter";
import { useMemo } from "react";
import { products } from "@/data/products";

interface MobileFilterDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
  minPrice: number;
  maxPrice: number;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (show: boolean) => void;
  resetFilters: () => void;
}

const MobileFilterDialog = ({
  isOpen,
  setIsOpen,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  maxPrice,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  showFavoritesOnly,
  setShowFavoritesOnly,
  resetFilters,
}: MobileFilterDialogProps) => {
  const categories = useMemo(() => 
    ["All", ...new Set(products.map(p => p.category))], 
    []
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filtres</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Catégories</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category);
                  }}
                  className="text-sm h-8"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            currentMin={priceRange[0]}
            currentMax={priceRange[1]}
            onChange={setPriceRange}
          />
          
          <RatingFilter
            minRating={minRating}
            onChange={setMinRating}
          />
          
          <div className="flex items-center justify-between">
            <span>Favoris uniquement</span>
            <Switch 
              checked={showFavoritesOnly} 
              onCheckedChange={setShowFavoritesOnly} 
            />
          </div>
          
          <Button className="w-full" onClick={() => setIsOpen(false)}>
            Appliquer les filtres
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={resetFilters}
          >
            Réinitialiser
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileFilterDialog;
