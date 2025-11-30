import { useLanguage } from '@/contexts/LanguageContext';

const Craft = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif luxury-heading mb-12 text-center fade-in">
          {t('craft.title')}
        </h1>

        <div className="space-y-12">
          <div className="fade-in">
            <h2 className="text-3xl font-serif luxury-heading mb-4">
              {t('craft.what')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('craft.whatText')}
            </p>
          </div>

          <div className="bg-muted p-8 rounded fade-in">
            <h2 className="text-3xl font-serif luxury-heading mb-4">
              {t('craft.how')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('craft.howText')}
            </p>
          </div>

          <div className="fade-in">
            <h2 className="text-3xl font-serif luxury-heading mb-4">
              {t('craft.why')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('craft.whyText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft;
