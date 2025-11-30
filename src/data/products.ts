import { Product } from '@/contexts/CartContext';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';
import product7 from '@/assets/product-7.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Natural Kozo Texture',
    nameHe: 'טקסטורת קוזו טבעית',
    price: 1200,
    image: product1,
    description: 'Handmade washi from pure kozo fibers, showcasing natural texture and organic patterns. Framed in light oak, 40x50cm. Ready to hang.',
    descriptionHe: 'וואשי בעבודת יד מסיבי קוזו טהורים, המציג טקסטורה טבעית ודפוסים אורגניים. ממוסגר באלון בהיר, 40x50 ס"מ. מוכן לתלייה.',
  },
  {
    id: '2',
    name: 'Gold Fleck Edition',
    nameHe: 'מהדורת פתיתי זהב',
    price: 1450,
    image: product2,
    description: 'Premium washi with delicate gold leaf inclusions, creating subtle shimmer. Walnut frame, 45x55cm. A statement piece.',
    descriptionHe: 'וואשי פרימיום עם שילובי עלי זהב עדינים, היוצר ברק עדין. מסגרת אגוז, 45x55 ס"מ. יצירת הצהרה.',
  },
  {
    id: '3',
    name: 'Botanical Impressions',
    nameHe: 'רישומים בוטניים',
    price: 1300,
    image: product3,
    description: 'Washi paper with pressed botanical elements, each sheet unique. Ash wood frame, 40x50cm. Natural elegance.',
    descriptionHe: 'נייר וואשי עם אלמנטים בוטניים לחוצים, כל גיליון ייחודי. מסגרת עץ אפר, 40x50 ס"מ. אלגנטיות טבעית.',
  },
  {
    id: '4',
    name: 'Minimalist Pure',
    nameHe: 'מינימליסטי טהור',
    price: 1150,
    image: product4,
    description: 'Clean, refined washi celebrating the beauty of simplicity. Natural fiber patterns shine through. Oak frame, 40x50cm.',
    descriptionHe: 'וואשי נקי ומעודן החוגג את היופי של הפשטות. דפוסי סיבים טבעיים בולטים. מסגרת אלון, 40x50 ס"מ.',
  },
  {
    id: '5',
    name: 'Artisan Heritage',
    nameHe: 'מורשת אומן',
    price: 1350,
    image: product5,
    description: 'Traditional washi made using centuries-old techniques, visible kozo fibers. Walnut frame, 45x55cm.',
    descriptionHe: 'וואשי מסורתי העשוי בטכניקות בנות מאות שנים, סיבי קוזו נראים לעין. מסגרת אגוז, 45x55 ס"מ.',
  },
  {
    id: '6',
    name: 'Warm Ivory',
    nameHe: 'שנהב חם',
    price: 1200,
    image: product6,
    description: 'Soft, warm-toned washi with natural variations. Perfect for modern interiors. Light ash frame, 40x50cm.',
    descriptionHe: 'וואשי רך בגוונים חמים עם וריאציות טבעיות. מושלם לעיצובים מודרניים. מסגרת אפר בהיר, 40x50 ס"מ.',
  },
  {
    id: '7',
    name: 'Organic Luxury',
    nameHe: 'לוקסוס אורגני',
    price: 1500,
    image: product7,
    description: 'Our most refined piece, showcasing the pinnacle of washi craftsmanship. Premium walnut frame, 50x60cm.',
    descriptionHe: 'היצירה המעודנת ביותר שלנו, המציגה את שיא אומנות הוואשי. מסגרת אגוז פרימיום, 50x60 ס"מ.',
  },
];
