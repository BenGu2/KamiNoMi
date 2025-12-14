import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const Cart = () => {
  const { t, language } = useLanguage();
  const { items, removeFromCart, totalPrice } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-serif luxury-heading mb-6">{t('cart.empty')}</h1>
        <Link to="/shop">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            {t('cart.continueShopping')}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif luxury-heading mb-8 fade-in">{t('cart.title')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => {
            const name = language === 'he' ? item.nameHe : item.name;
            return (
              <div key={item.id} className="flex gap-4 bg-card p-4 rounded fade-in">
                <img
                  src={item.image}
                  alt={name}
                  className="w-24 h-24 object-cover bg-muted"
                />
                <div className="flex-1">
                  <h3 className="font-serif text-lg mb-2">{name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {item.quantity} × {item.price} {t('common.currency')}
                  </p>
                  <p className="font-medium">
                    {item.price * item.quantity} {t('common.currency')}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-muted p-6 rounded space-y-4 sticky top-24">
            <h2 className="text-xl font-serif">{t('cart.total')}</h2>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('cart.subtotal')}</span>
                <span>
                  {totalPrice} {t('common.currency')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('cart.shipping')}</span>
                <span className="text-accent">{t('cart.shippingFree')}</span>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-medium">
              <span>{t('cart.total')}</span>
              <span>
                {totalPrice} {t('common.currency')}
              </span>
            </div>
            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {t('cart.checkout')}
            </Button>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="w-full">
                {t('cart.continueShopping')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
