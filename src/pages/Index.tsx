
import { useRef } from "react";
import Footer from "@/components/Footer";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import useFilters from "@/hooks/useFilters";
import Header from "@/components/index/Header";
import HeroSection from "@/components/index/HeroSection";
import ProductsSection from "@/components/index/ProductsSection";
import MobileFilterDialog from "@/components/index/MobileFilterDialog";

const Index = () => {
  const productsSectionRef = useRef<HTMLDivElement>(null);
  const {
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
  } = useFilters();

  const scrollToProducts = () => {
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showFavoritesOnly={showFavoritesOnly}
        setShowFavoritesOnly={setShowFavoritesOnly}
        setSortOption={setSortOption}
        activeFilterCount={activeFilterCount}
        setIsFilterDialogOpen={setIsFilterDialogOpen}
        categories={categories}
      />

      {/* Hero Section */}
      <HeroSection scrollToProducts={scrollToProducts} />

      {/* Featured Products Carousel */}
      <FeaturedCarousel />

      {/* Products Grid */}
      <div ref={productsSectionRef}>
        <ProductsSection 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minRating={minRating}
          setMinRating={setMinRating}
          showFavoritesOnly={showFavoritesOnly}
          setShowFavoritesOnly={setShowFavoritesOnly}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
          activeFilterCount={activeFilterCount}
          resetFilters={resetFilters}
        />
      </div>
      
      {/* Filter Dialog for Mobile */}
      <MobileFilterDialog 
        isOpen={isFilterDialogOpen}
        setIsOpen={setIsFilterDialogOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        minRating={minRating}
        setMinRating={setMinRating}
        showFavoritesOnly={showFavoritesOnly}
        setShowFavoritesOnly={setShowFavoritesOnly}
        resetFilters={resetFilters}
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
