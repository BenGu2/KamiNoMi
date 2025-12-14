import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-washi.webp';
import { useEffect } from 'react';

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="-mt-[73px]">
      {/* Hero Section - Exact Screen Height */}
      <section className="relative h-[100dvh] overflow-hidden fade-in">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Japanese Washi Art"
            className="w-full h-full object-cover object-bottom"
            
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background/10 to-transparent" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-end pb-24 pt-20">
          <div className="fade-in max-w-2xl">
            <p className="text-3xl md:text-4xl font-serif text-accent mb-2">
              {t('brand.nameJp')}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif luxury-heading mb-4">
              {t('brand.name')}
            </h1>
            <p className="text-2xl md:text-3xl font-serif luxury-heading mb-2">
              {t('hero.title')}
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t('hero.subtitle')}
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-serif luxury-heading mb-4">
            {t('products.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
