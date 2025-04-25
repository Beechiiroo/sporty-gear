
import React from 'react';
import { Star } from 'lucide-react';
import { Slider } from "@/components/ui/slider";

interface RatingFilterProps {
  minRating: number;
  onChange: (value: number) => void;
}

const RatingFilter: React.FC<RatingFilterProps> = ({ minRating, onChange }) => {
  return (
    <div className="space-y-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filtrer par note</h3>
        <div className="flex items-center">
          <span className="mr-2">{minRating.toFixed(1)}</span>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(minRating) ? 'fill-current' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      <Slider 
        defaultValue={[minRating]} 
        min={0}
        max={5}
        step={0.5}
        onValueChange={(values) => onChange(values[0])}
        className="mt-6"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Toutes les notes</span>
        <span>5 étoiles</span>
      </div>
    </div>
  );
};

export default RatingFilter;
