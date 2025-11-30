import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto fade-in">
        <h1 className="text-4xl md:text-5xl font-serif luxury-heading mb-8 text-center">
          {t('about.title')}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.text')}
          </p>

          <div className="bg-muted p-8 rounded my-8">
            <h2 className="text-2xl font-serif luxury-heading mb-4">
              {t('hero.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('craft.whatText')}
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('craft.howText')}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('craft.whyText')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
