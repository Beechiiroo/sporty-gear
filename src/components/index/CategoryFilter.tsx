
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { useMemo } from "react";
import { products } from "@/data/products";

interface CategoryFilterProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  const categories = useMemo(() => 
    ["All", ...new Set(products.map(p => p.category))], 
    []
  );

  return (
    <div className="hidden md:flex flex-wrap gap-2">
      {categories.slice(0, 6).map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => setSelectedCategory(category)}
          className="animate-fade-in"
          size="sm"
        >
          {category}
        </Button>
      ))}
      {categories.length > 6 && (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-3 text-sm">Plus</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-1 p-2">
                  {categories.slice(6).map((category) => (
                    <li key={category}>
                      <Button
                        variant={selectedCategory === category ? "default" : "ghost"}
                        className="w-full justify-start text-left"
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
};

export default CategoryFilter;
