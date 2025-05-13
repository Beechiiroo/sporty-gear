
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Globe } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const { toast } = useToast();

  const changeLanguage = (newLang: string) => {
    setLanguage(newLang);
    
    toast({
      title: t('languageChanged'),
      description: `${newLang === 'fr' ? 'Français' : newLang === 'ar' ? 'العربية' : 'English'} ${t('selected')}`,
      duration: 3000,
    });

    // Log the language change to help with debugging
    console.log(`Language changed to: ${newLang}`);
    
    // Force refresh the UI to ensure all translations are applied
    window.dispatchEvent(new Event('language-changed'));
  };

  const getLanguageLabel = () => {
    switch(language) {
      case 'fr': return 'FR';
      case 'ar': return 'عر';
      default: return 'EN';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="px-2 hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 flex items-center gap-1"
        >
          <Globe className="h-4 w-4" />
          {getLanguageLabel()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('fr')}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ar')}>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
