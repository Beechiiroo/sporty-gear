
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Cart from "@/components/Cart";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SportyGear
            </h1>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {["Basketball", "Soccer", "Tennis", "Volleyball", "Fitness", "Accessories"].map(
                      (category) => (
                        <li key={category} className="row-span-3">
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-left font-normal"
                          >
                            {category}
                          </Button>
                        </li>
                      )
                    )}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Cart />
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1800')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
              Elevate Your Game
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 animate-fade-in delay-100">
              Premium sports equipment for champions
            </p>
            <Button size="lg" className="animate-fade-in delay-200">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
