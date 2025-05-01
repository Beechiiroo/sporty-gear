
import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { SortOption } from "@/components/SortOptions";

const useFilters = () => {
  // Filters state
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState(0);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  
  const categories = useMemo(() => 
    ["All", ...new Set(products.map(p => p.category))], 
    []
  );
  
  // Calculate min and max prices
  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price));

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setPriceRange([minPrice, maxPrice]);
    setMinRating(0);
    setShowFavoritesOnly(false);
    setSearchQuery("");
    setSortOption("newest");
  };
  
  // Active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory && selectedCategory !== "All") count++;
    if (priceRange[0] > minPrice || priceRange[1] < maxPrice) count++;
    if (minRating > 0) count++;
    if (showFavoritesOnly) count++;
    if (searchQuery) count++;
    return count;
  }, [selectedCategory, priceRange, minRating, showFavoritesOnly, searchQuery, minPrice, maxPrice]);

  return {
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
    isFilterDialogOpen,
    setIsFilterDialogOpen,
    categories,
    minPrice,
    maxPrice,
    resetFilters,
    activeFilterCount
  };
};

export default useFilters;
