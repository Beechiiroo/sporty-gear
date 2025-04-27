
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

export type SortOption = 'newest' | 'price-low' | 'price-high' | 'rating';

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
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Trier par" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Les plus récents</SelectItem>
          <SelectItem value="price-low">Prix: croissant</SelectItem>
          <SelectItem value="price-high">Prix: décroissant</SelectItem>
          <SelectItem value="rating">Meilleures notes</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortOptions;
