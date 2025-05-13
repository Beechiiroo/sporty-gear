
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ${isRtl ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('returnHome')}
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            {t('ourStoryTitle')}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {t('ourStoryContent')}
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold">{t('ourMission')}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('ourMission')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold">{t('ourVision')}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('ourVision')}
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-8 text-center">{t('ourTeam')}</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="h-64 bg-gray-200 dark:bg-gray-700">
                    <img 
                      src={`https://randomuser.me/api/portraits/${member % 2 === 0 ? 'women' : 'men'}/${member + 10}.jpg`}
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{
                      language === 'fr' ? `Membre d'équipe ${member}` : 
                      language === 'ar' ? `عضو الفريق ${member}` : 
                      `Team Member ${member}`
                    }</h3>
                    <p className="text-gray-500 dark:text-gray-400">{
                      language === 'fr' ? 'Poste professionnel' : 
                      language === 'ar' ? 'المنصب الوظيفي' : 
                      'Professional Position'
                    }</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurStory;
