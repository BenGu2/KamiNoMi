import { Link } from 'react-router-dom';
import { Product } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(language === 'he' ? 'נוסף לעגלה' : 'Added to cart');
  };

  const name = language === 'he' ? product.nameHe : product.name;

  return (
    <div className="group fade-in">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted mb-4 relative">
          <img
            src={product.image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg group-hover:text-accent transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">
            {product.price} {t('common.currency')}
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={handleAddToCart}
            className="hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {t('products.addToCart')}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">{t('products.freeShipping')}</p>
      </div>
    </div>
  );
};

export default ProductCard;
