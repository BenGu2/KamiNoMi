import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

const About = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto fade-in">
        <h1 className="text-4xl md:text-5xl font-serif luxury-heading mb-8 text-center">
          {t('about.title')}
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.intro')}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.inspiration')}
          </p>

          <blockquote className="bg-muted p-8 rounded my-8 border-l-4 border-accent">
            <p className="text-xl font-serif italic text-foreground">
              {t('about.quote')}
            </p>
          </blockquote>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.selection')}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.closing')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
