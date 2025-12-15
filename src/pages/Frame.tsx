import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

const Frame = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif luxury-heading mb-12 text-center fade-in">
          {t('frame.title')}
        </h1>

        <div className="space-y-12">
          {/* Introduction */}
          <div className="fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('frame.intro1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('frame.intro2')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('frame.intro3')}
            </p>
          </div>

          {/* Philosophy */}
          <div className="fade-in">
            <h2 className="text-3xl font-serif mb-6">{t('frame.philosophyTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('frame.philosophy')}
            </p>
          </div>

          {/* Materials Section */}
          <div className="fade-in">
            <h2 className="text-3xl font-serif mb-6">{t('frame.materialsTitle')}</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-serif text-xl mb-2">{t('frame.woodTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('frame.wood')}
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-serif text-xl mb-2">{t('frame.hingesTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('frame.hinges')}
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-serif text-xl mb-2">{t('frame.boardTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('frame.board')}
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-serif text-xl mb-2">{t('frame.glueTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('frame.glue')}
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-serif text-xl mb-2">{t('frame.glassTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('frame.glass')}
                </p>
              </div>
            </div>
          </div>

          {/* Craft Statement */}
          <div className="fade-in">
            <h2 className="text-3xl font-serif mb-6">{t('frame.craftTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('frame.craft1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('frame.craft2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
