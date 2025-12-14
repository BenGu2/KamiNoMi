import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

const Craft = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif luxury-heading mb-12 text-center fade-in">
          {t('craft.title')}
        </h1>

        <div className="space-y-12">
          {/* Introduction - Subtitle + First Paragraphs */}
          <div className="fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('craft.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('craft.intro1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('craft.intro2')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('craft.history')}
            </p>
          </div>

          {/* How Traditional Washi Is Made */}
          <div className="fade-in">
            <h2 className="text-3xl font-serif luxury-heading mb-8">
              {t('craft.processTitle')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('craft.processIntro')}
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-serif mb-3">{t('craft.step1Title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('craft.step1')}
                </p>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-serif mb-3">{t('craft.step2Title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('craft.step2')}
                </p>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-serif mb-3">{t('craft.step3Title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('craft.step3')}
                </p>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-serif mb-3">{t('craft.step4Title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('craft.step4')}
                </p>
              </div>

              {/* Step 5 */}
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-serif mb-3">{t('craft.step5Title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('craft.step5')}
                </p>
              </div>
            </div>
          </div>

          {/* Crafted by Hand, Shaped by Nature */}
          <div className="bg-muted p-8 rounded fade-in">
            <h2 className="text-3xl font-serif luxury-heading mb-6">
              {t('craft.closingTitle')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('craft.closing1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('craft.closing2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft;
