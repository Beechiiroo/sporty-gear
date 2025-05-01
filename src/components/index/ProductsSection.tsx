
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SortOptions, { SortOption } from "@/components/SortOptions";
import CategoryFilter from "./CategoryFilter";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import { products } from "@/data/products";

interface ProductsSectionProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (show: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
  activeFilterCount: number;
  resetFilters: () => void;
}

const ProductsSection = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  showFavoritesOnly,
  setShowFavoritesOnly,
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
  activeFilterCount,
  resetFilters,
}: ProductsSectionProps) => {
  // Calculate min and max prices
  const minPrice = useMemo(() => Math.min(...products.map(p => p.price)), []);
  const maxPrice = useMemo(() => Math.max(...products.map(p => p.price)), []);

  return (
    <div id="products-section" className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0">
          {showFavoritesOnly ? "Mes Favoris" : (selectedCategory || "Tous les Produits")}
        </h2>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="md:hidden w-full">
            <Input 
              type="text" 
              placeholder="Rechercher..." 
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <SortOptions value={sortOption} onChange={setSortOption} />
            
            {activeFilterCount > 0 && (
              <Button 
                variant="outline"
                size="sm"
                onClick={resetFilters}
                className="hidden md:flex items-center"
              >
                Réinitialiser
                <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200">{activeFilterCount}</Badge>
              </Button>
            )}
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters - Desktop */}
        <FilterSidebar 
          minPrice={minPrice}
          maxPrice={maxPrice}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minRating={minRating}
          setMinRating={setMinRating}
          showFavoritesOnly={showFavoritesOnly}
          setShowFavoritesOnly={setShowFavoritesOnly}
          activeFilterCount={activeFilterCount}
          resetFilters={resetFilters}
        />
        
        {/* Products */}
        <div className="lg:col-span-3">
          <ProductGrid
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            minRating={minRating}
            showFavoritesOnly={showFavoritesOnly}
            searchQuery={searchQuery}
            sortOption={sortOption}
            resetFilters={resetFilters}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
