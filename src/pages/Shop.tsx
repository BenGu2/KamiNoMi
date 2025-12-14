import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useEffect } from 'react';

const Shop = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 fade-in">
        <h1 className="text-4xl md:text-5xl font-serif luxury-heading mb-4">
          {t('products.title')}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
