import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-serif luxury-heading mb-8">{t('footer.privacy')}</h1>
        <p className="text-muted-foreground">
          This is a placeholder for your privacy policy. Please add your actual privacy policy content here.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
