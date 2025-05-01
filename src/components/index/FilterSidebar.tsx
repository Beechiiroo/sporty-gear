
import PriceFilter from "@/components/PriceFilter";
import RatingFilter from "@/components/RatingFilter";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface FilterSidebarProps {
  minPrice: number;
  maxPrice: number;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (show: boolean) => void;
  activeFilterCount: number;
  resetFilters: () => void;
}

const FilterSidebar = ({
  minPrice,
  maxPrice,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  showFavoritesOnly,
  setShowFavoritesOnly,
  activeFilterCount,
  resetFilters,
}: FilterSidebarProps) => {
  return (
    <div className="hidden lg:block space-y-6">
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
      
      <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-100">
        <h3 className="font-semibold mb-4">Filtres</h3>
        
        <div className="flex items-center justify-between">
          <span>Favoris uniquement</span>
          <Switch 
            checked={showFavoritesOnly} 
            onCheckedChange={setShowFavoritesOnly} 
          />
        </div>
        
        {activeFilterCount > 0 && (
          <Button 
            variant="outline"
            className="w-full mt-4"
            onClick={resetFilters}
          >
            Réinitialiser les filtres
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
