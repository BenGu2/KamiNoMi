import { useLanguage } from '@/contexts/LanguageContext';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-serif luxury-heading mb-8">{t('footer.terms')}</h1>
        <p className="text-muted-foreground">
          This is a placeholder for your terms of service. Please add your actual terms content here.
        </p>
      </div>
    </div>
  );
};

export default Terms;
