
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useMemo } from "react";
import { useFavorites } from "@/stores/FavoritesStore";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SortOption } from "@/components/SortOptions";

interface ProductGridProps {
  selectedCategory: string | null;
  priceRange: [number, number];
  minRating: number;
  showFavoritesOnly: boolean;
  searchQuery: string;
  sortOption: SortOption;
  resetFilters: () => void;
}

const ProductGrid = ({
  selectedCategory,
  priceRange,
  minRating,
  showFavoritesOnly,
  searchQuery,
  sortOption,
  resetFilters,
}: ProductGridProps) => {
  const { isFavorite } = useFavorites();
  const { language, t } = useLanguage();
  
  // Filter products based on all criteria
  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      // Category filter
      const passesCategory = selectedCategory && selectedCategory !== "All" 
        ? product.category === selectedCategory 
        : true;
      
      // Price filter
      const passesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Rating filter
      const passesRating = (product.rating || 0) >= minRating;
      
      // Favorites filter
      const passesFavorites = showFavoritesOnly ? isFavorite(product.id) : true;
      
      // Search filter - now using localized name
      const localizedName = product.name[language as keyof typeof product.name] || product.name.en;
      const passesSearch = searchQuery
        ? localizedName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
  
      return passesCategory && passesPrice && passesRating && passesFavorites && passesSearch;
    });
    
    // Sort products
    switch (sortOption) {
      case "price-low":
        return result.sort((a, b) => a.price - b.price);
      case "price-high":
        return result.sort((a, b) => b.price - a.price);
      case "rating":
        return result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "newest":
      default:
        // Using id as proxy for newest since higher id = newer
        return result.sort((a, b) => b.id - a.id);
    }
  }, [selectedCategory, priceRange, minRating, showFavoritesOnly, searchQuery, sortOption, language, isFavorite]);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12 bg-white/80 rounded-lg">
        <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Search className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium">
          {t('noProductsFound')}
        </h3>
        <p className="text-gray-500">
          {t('adjustFilters')}
        </p>
        <Button 
          variant="outline"
          className="mt-4"
          onClick={resetFilters}
        >
          {t('resetFilters')}
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="animate-fade-in">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
