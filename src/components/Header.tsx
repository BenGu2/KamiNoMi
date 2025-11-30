import { Link } from 'react-router-dom';
import { ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif luxury-heading">
            Washi
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm hover:text-accent transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/shop" className="text-sm hover:text-accent transition-colors">
              {t('nav.shop')}
            </Link>
            <Link to="/about" className="text-sm hover:text-accent transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/craft" className="text-sm hover:text-accent transition-colors">
              {t('nav.craft')}
            </Link>
            <Link to="/contact" className="text-sm hover:text-accent transition-colors">
              {t('nav.contact')}
            </Link>
            <Link to="/faq" className="text-sm hover:text-accent transition-colors">
              {t('nav.faq')}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English {language === 'en' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('he')}>
                  עברית {language === 'he' && '✓'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
