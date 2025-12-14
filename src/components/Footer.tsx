import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted mt-20 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif mb-4">{t('brand.name')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('hero.subtitle')}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t('nav.shop')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/shop" className="hover:text-foreground transition-colors">
                  {t('products.title')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/craft" className="hover:text-foreground transition-colors">
                  {t('nav.craft')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-foreground transition-colors">
                  {t('nav.faq')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 {t('brand.name')}. {t('footer.rights')}.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to="/returns" className="hover:text-foreground transition-colors">
              Return
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
