import { Product } from '@/contexts/CartContext';
import washiBlue11 from '@/assets/washi-blue-11.jpg';
import washiBlue31 from '@/assets/washi-blue-31.jpg';
import washiBluewhite11 from '@/assets/washi-bluewhite-11.jpg';
import washiBluewhite31 from '@/assets/washi-bluewhite-31.jpg';
import washiGreenwhite11 from '@/assets/washi-greenwhite-11.jpg';
import washiGreenwhite31 from '@/assets/washi-greenwhite-31.jpg';
import washiGrey11 from '@/assets/washi-grey-11.jpg';
import washiGrey31 from '@/assets/washi-grey-31.jpg';
import washiRust11 from '@/assets/washi-rust-11.jpg';
import washiRust31 from '@/assets/washi-rust-31.jpg';
import washiSquares11 from '@/assets/washi-squares-11.jpg';
import washiSquares31 from '@/assets/washi-squares-31.jpg';
import washiWhite11 from '@/assets/washi-white-11.jpg';
import washiWhite31 from '@/assets/washi-white-31.jpg';

interface ProductImage {
  thumbnail: string;
  detail: string;
}

export interface Product {
  id: string;
  name: string;
  nameHe: string;
  price: number;
  images: ProductImage;
  description: string;
  descriptionHe: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Blue',
    nameHe: 'כחול',
    price: 1500,
    images: {
      thumbnail: washiBlue11,
      detail: washiBlue31,
    },
    description: 'Handcrafted washi paper with beautiful blue tones. Each piece is unique and showcases traditional Japanese artistry.',
    descriptionHe: 'נייר וואשי בעבודת יד עם גוונים כחולים יפים. כל חתיכה ייחודית ומציגה אומנות יפנית מסורתית.',
  },
  {
    id: '2',
    name: 'Blue & White',
    nameHe: 'כחול ולבן',
    price: 1600,
    images: {
      thumbnail: washiBluewhite11,
      detail: washiBluewhite31,
    },
    description: 'Premium washi featuring striking blue and white patterns. A timeless combination of elegance and simplicity.',
    descriptionHe: 'וואשי פרימיום עם דפוסים כחולים ולבנים מרהיבים. שילוב נצחי של אלגנטיות ופשטות.',
  },
  {
    id: '3',
    name: 'Green & White',
    nameHe: 'ירוק ולבן',
    price: 1600,
    images: {
      thumbnail: washiGreenwhite11,
      detail: washiGreenwhite31,
    },
    description: 'Natural tones with green and white elements. Brings organic beauty and tranquility to any space.',
    descriptionHe: 'גוונים טבעיים עם אלמנטים ירוקים ולבנים. מביא יופי אורגני ושלווה לכל מרחב.',
  },
  {
    id: '4',
    name: 'Grey',
    nameHe: 'אפור',
    price: 1500,
    images: {
      thumbnail: washiGrey11,
      detail: washiGrey31,
    },
    description: 'Sophisticated grey washi with subtle texture. Perfect for contemporary interiors and minimalist aesthetics.',
    descriptionHe: 'וואשי אפור מתוחכם עם טקסטורה עדינה. מושלם לפנים עדכניים ואסתטיקה מינימליסטית.',
  },
  {
    id: '5',
    name: 'Rust',
    nameHe: 'חלודה',
    price: 1600,
    images: {
      thumbnail: washiRust11,
      detail: washiRust31,
    },
    description: 'Warm rust tones create a welcoming atmosphere. Rich, earthy colors celebrate natural beauty.',
    descriptionHe: 'גוונים חמים של ירדן יוצרים אטמוספירה מזמינה. צבעים עשירים וארציים חוגגים יופי טבעי.',
  },
  {
    id: '6',
    name: 'Squares',
    nameHe: 'ריבועים',
    price: 1600,
    images: {
      thumbnail: washiSquares11,
      detail: washiSquares31,
    },
    description: 'Artistic geometric pattern with carefully arranged squares. Modern design meets traditional craftsmanship.',
    descriptionHe: 'דפוס גיאומטרי אמנותי עם ריבועים מסודרים בעדינות. עיצוב מודרני פוגש אומנות מסורתית.',
  },
  {
    id: '7',
    name: 'White',
    nameHe: 'לבן',
    price: 1400,
    images: {
      thumbnail: washiWhite11,
      detail: washiWhite31,
    },
    description: 'Pure, elegant white washi showcasing the finest craftsmanship. A timeless piece of understated luxury.',
    descriptionHe: 'וואשי לבן טהור ואלגנטי המציג אומנות בעבודת יד ברמה הגבוהה ביותר. יצירה נצחית של לוקסוס עדין.',
  },
];
