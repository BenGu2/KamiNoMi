import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl mb-4">Product not found</h1>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const name = language === 'he' ? product.nameHe : product.name;
  const description = language === 'he' ? product.descriptionHe : product.description;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(language === 'he' ? 'נוסף לעגלה' : 'Added to cart');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        {t('cart.continueShopping')}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fade-in">
        {/* Image */}
        <div className="aspect-square bg-muted overflow-hidden">
          <img
            src={product.image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif luxury-heading mb-4">
              {name}
            </h1>
            <p className="text-3xl font-medium mb-2">
              {product.price} {t('common.currency')}
            </p>
            <p className="text-sm text-accent">{t('products.freeShipping')}</p>
          </div>

          <div className="border-t border-b border-border py-6 space-y-4">
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {t('products.readyToHang')}
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {t('products.uniquePiece')}
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {t('products.freeShipping')}
              </p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleAddToCart}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {t('products.addToCart')}
          </Button>

          <div className="bg-muted p-6 rounded space-y-2">
            <h3 className="font-serif text-xl mb-4">{t('craft.title')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('craft.whyText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
