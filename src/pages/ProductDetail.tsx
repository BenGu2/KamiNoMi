import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const productImages = [product.images.thumbnail, product.images.detail];
  const name = language === 'he' ? product.nameHe : product.name;
  const description = language === 'he' ? product.descriptionHe : product.description;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(language === 'he' ? 'נוסף לעגלה' : 'Added to cart');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Return
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fade-in">
        {/* Images Gallery */}
        <div className="space-y-4">
          {/* Main image - large square */}
          <div className="aspect-square bg-muted overflow-hidden rounded">
            <img
              src={productImages[currentImageIndex]}
              alt={name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Secondary image thumbnail - small square */}
          <div className="flex gap-4">
            {productImages.map((img, idx) => {
              const isActive = currentImageIndex === idx;
              return (
                <div
                  key={idx}
                  className={`w-24 h-24 bg-muted overflow-hidden rounded border-2 cursor-pointer transition-all ${
                    isActive ? 'border-accent' : 'border-transparent hover:border-muted-foreground'
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <img
                    src={img}
                    alt={`${name} - ${idx + 1}`}
                    className="w-full h-full object-contain hover:opacity-80 transition-opacity"
                  />
                </div>
              );
            })}
          </div>
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
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleAddToCart}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {t('products.addToCart')}
          </Button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
