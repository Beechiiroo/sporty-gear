
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, Check, Percent } from "lucide-react";

export type SortOption = 'newest' | 'price-low' | 'price-high' | 'rating' | 'popularity' | 'discount';

interface SortOptionsProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="h-4 w-4 text-gray-500" />
      <Select
        value={value}
        onValueChange={(val) => onChange(val as SortOption)}
      >
        <SelectTrigger className="w-[220px] bg-white">
          <SelectValue placeholder="Trier par" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <div className="py-1 px-2 text-xs font-semibold text-gray-500 border-b">ORDRE</div>
          <SelectItem value="newest" className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="mr-1">Les plus récents</span>
            </div>
            {value === 'newest' && <Check className="h-4 w-4" />}
          </SelectItem>
          <SelectItem value="popularity" className="flex items-center justify-between">
            <span>Popularité</span>
            {value === 'popularity' && <Check className="h-4 w-4" />}
          </SelectItem>
          
          <div className="py-1 px-2 text-xs font-semibold text-gray-500 border-b mt-1">PRIX</div>
          <SelectItem value="price-low" className="flex items-center justify-between">
            <span>Prix: croissant</span>
            {value === 'price-low' && <Check className="h-4 w-4" />}
          </SelectItem>
          <SelectItem value="price-high" className="flex items-center justify-between">
            <span>Prix: décroissant</span>
            {value === 'price-high' && <Check className="h-4 w-4" />}
          </SelectItem>
          <SelectItem value="discount" className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Percent className="h-4 w-4 text-red-500" />
              <span>Remises</span>
            </div>
            {value === 'discount' && <Check className="h-4 w-4" />}
          </SelectItem>
          
          <div className="py-1 px-2 text-xs font-semibold text-gray-500 border-b mt-1">ÉVALUATION</div>
          <SelectItem value="rating" className="flex items-center justify-between">
            <span>Meilleures notes</span>
            {value === 'rating' && <Check className="h-4 w-4" />}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortOptions;
