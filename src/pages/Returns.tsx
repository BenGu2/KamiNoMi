import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

const Returns = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-serif luxury-heading mb-8">{t('footer.returns')}</h1>
        <p className="text-muted-foreground">
          This is a placeholder for your return policy. Please add your actual return policy content here.
        </p>
      </div>
    </div>
  );
};

export default Returns;
