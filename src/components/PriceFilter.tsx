
import React from 'react';
import { Slider } from "@/components/ui/slider";

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  currentMin: number;
  currentMax: number;
  onChange: (values: [number, number]) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  currentMin,
  currentMax,
  onChange
}) => {
  const handleValueChange = (values: number[]) => {
    onChange([values[0], values[1]]);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  return (
    <div className="space-y-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filtrer par prix</h3>
        <div className="text-sm flex gap-3">
          <span className="px-2 py-1 bg-blue-100 rounded">{formatPrice(currentMin)}</span>
          <span>à</span>
          <span className="px-2 py-1 bg-blue-100 rounded">{formatPrice(currentMax)}</span>
        </div>
      </div>
      <Slider 
        defaultValue={[currentMin, currentMax]} 
        max={maxPrice} 
        min={minPrice} 
        step={1}
        onValueChange={handleValueChange}
        className="mt-6"
      />
    </div>
  );
};

export default PriceFilter;
