import { Link } from 'react-router-dom';
import { Product } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { language } = useLanguage();

  const name = language === 'he' ? product.nameHe : product.name;

  return (
    <div className="group fade-in">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted mb-4 relative">
          <img
            src={product.images.thumbnail}
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
      </div>
    </div>
  );
};

export default ProductCard;
