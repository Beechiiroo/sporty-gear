
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  scrollToProducts: () => void;
}

const HeroSection = ({ scrollToProducts }: HeroSectionProps) => {
  const { language, t } = useLanguage();
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1800')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 animate-fade-in delay-100">
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="animate-fade-in delay-200 bg-blue-600 hover:bg-blue-700"
              onClick={scrollToProducts}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              {t('shopNow')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="animate-fade-in delay-300 bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/notre-histoire'}
            >
              {t('discoverOurStory')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
