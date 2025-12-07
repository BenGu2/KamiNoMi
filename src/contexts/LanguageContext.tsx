import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand
    'brand.name': 'Kaminomi',
    'brand.nameJp': '紙の美',
    
    // Navigation
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.about': 'About',
    'nav.craft': 'Craft & Materials',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.cart': 'Cart',
    
    // Hero
    'hero.title': 'Authentic Japanese Craftsmanship',
    'hero.subtitle': 'Hand-framed in Israel',
    'hero.cta': 'Shop the Collection',
    
    // Products
    'products.title': 'Our Collection',
    'products.freeShipping': 'Free shipping in Israel',
    'products.addToCart': 'Add to Cart',
    'products.readyToHang': 'Ready to hang',
    'products.uniquePiece': 'Each piece is unique',
    
    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.continueShopping': 'Continue Shopping',
    'cart.remove': 'Remove',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.shippingFree': 'Free (Israel only)',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    
    // About
    'about.title': 'Our Story',
    'about.intro': 'Kaminomi is built from a love for Japanese culture, its refined sense of aesthetics and its beauty.',
    'about.inspiration': 'I was inspired by the timeless quality of traditional craftsmanship, where every detail is shaped with intention and respect for the material. The moment I came across it, I knew I wanted others to experience it too.',
    'about.quote': '"Nature is the first craftsman; the artisan only guides its form."',
    'about.selection': 'Our curated washi (和紙) selection reflects this spirit—each piece unique, natural, and made through generations-old methods.',
    'about.closing': 'To own one is to bring home a small part of Japan: its art, its culture, and the craftsmanship that defines it.',
    
    // Craft
    'craft.title': 'The Art of Washi',
    'craft.titleJp': '和紙の芸術',
    'craft.what': 'What is Washi? (和紙)',
    'craft.whatText': 'Washi (和紙, literally "Japanese paper") is traditional Japanese paper made from natural fibers. The word combines "wa" (和, Japanese) and "shi" (紙, paper). This ancient craft dates back over 1,300 years and is recognized by UNESCO as Intangible Cultural Heritage.',
    'craft.materials': 'Natural Materials',
    'craft.materialsText': 'Washi is crafted from the inner bark fibers of three plants: Kozo (楮, mulberry), Mitsumata (三椏), and Gampi (雁皮). Each plant gives the paper distinct characteristics—kozo provides strength, mitsumata creates softness, and gampi adds a natural sheen.',
    'craft.process': 'Traditional Process (手漉き)',
    'craft.processText': 'The art of hand-papermaking, called "tesuki" (手漉き), involves soaking the fibers, beating them into pulp, and forming sheets on bamboo screens. Master artisans, known as "washi shokunin" (和紙職人), dedicate their lives to perfecting this craft.',
    'craft.why': 'Natural Variations (自然の美)',
    'craft.whyText': 'The beauty of washi lies in its "wabi-sabi" (侘寂) aesthetic—finding beauty in imperfection. Each sheet tells a story through organic patterns, fiber distributions, and subtle color variations that make every piece truly unique.',
    'craft.frame': 'The Frame (額縁)',
    'craft.frameTitle': 'Handcrafted Wooden Frames',
    'craft.frameText': 'Each frame, called "gakubuchi" (額縁), is handcrafted from real wood in our Israeli workshop. We use only the finest materials to preserve and showcase the washi.',
    'craft.frameDetails': 'Our framing process uses exclusively acid-free materials—including the mounting board and adhesives—to ensure the paper remains pristine for generations. The washi is mounted using a special hinge technique that creates an elegant "floating" effect, as if the paper hovers weightlessly within the frame. This ukashi (浮かし) mounting style adds depth and allows the natural deckled edges of the washi to be fully appreciated.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.whatsapp': 'WhatsApp',
    'contact.instagram': 'Instagram',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.shipping': 'Shipping & Delivery',
    'faq.shippingAnswer': 'We offer free shipping anywhere in Israel. Your piece will be carefully packaged and typically arrives within 3-5 business days.',
    'faq.framing': 'About the Framing',
    'faq.framingAnswer': 'Each frame is handmade in our Israeli workshop using real wood and acid-free materials. The pieces come ready to hang with all necessary hardware included.',
    'faq.unique': 'Are the pieces unique?',
    'faq.uniqueAnswer': 'Yes! Due to the handmade nature of washi paper, each piece has unique patterns and natural variations. You receive a truly one-of-a-kind artwork.',
    'faq.care': 'Care Instructions',
    'faq.careAnswer': 'Keep your piece away from direct sunlight and moisture. Wipe the frame gently with a dry cloth. The washi paper is preserved behind glass.',
    'faq.returns': 'Returns & Refunds',
    'faq.returnsAnswer': 'We accept returns within 14 days of delivery. Items must be in original condition. Contact us to initiate a return.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.returns': 'Return Policy',
    
    // Common
    'common.currency': '₪',
  },
  he: {
    // Brand
    'brand.name': 'קמינומי',
    'brand.nameJp': '紙の美',
    
    // Navigation
    'nav.home': 'דף הבית',
    'nav.shop': 'חנות',
    'nav.about': 'אודות',
    'nav.craft': 'אומנות וחומרים',
    'nav.contact': 'יצירת קשר',
    'nav.faq': 'שאלות נפוצות',
    'nav.cart': 'עגלה',
    
    // Hero
    'hero.title': 'אומנות יפנית אותנטית',
    'hero.subtitle': 'ממוסגרת בעבודת יד בישראל',
    'hero.cta': 'לקולקציה',
    
    // Products
    'products.title': 'הקולקציה שלנו',
    'products.freeShipping': 'משלוח חינם בישראל',
    'products.addToCart': 'הוסף לעגלה',
    'products.readyToHang': 'מוכן לתלייה',
    'products.uniquePiece': 'כל יצירה ייחודית',
    
    // Cart
    'cart.title': 'עגלת קניות',
    'cart.empty': 'העגלה ריקה',
    'cart.continueShopping': 'המשך בקנייה',
    'cart.remove': 'הסר',
    'cart.subtotal': 'סכום ביניים',
    'cart.shipping': 'משלוח',
    'cart.shippingFree': 'חינם (בישראל בלבד)',
    'cart.total': 'סה"כ',
    'cart.checkout': 'מעבר לתשלום',
    
    // About
    'about.title': 'הסיפור שלנו',
    'about.intro': 'קמינומי נולד מאהבה לתרבות היפנית, לתחושת האסתטיקה המעודנת שלה וליופייה.',
    'about.inspiration': 'השראתי נבעה מהאיכות הנצחית של אומנות מסורתית, בה כל פרט מעוצב בכוונה ובכבוד לחומר. ברגע שנתקלתי בה, ידעתי שאני רוצה שגם אחרים יחוו זאת.',
    'about.quote': '"הטבע הוא האומן הראשון; האומן רק מנחה את צורתו."',
    'about.selection': 'מבחר הוואשי (和紙) שלנו משקף רוח זו - כל יצירה ייחודית, טבעית, ועשויה בשיטות בנות דורות.',
    'about.closing': 'להחזיק יצירה כזו זה להביא הביתה חלק קטן מיפן: האמנות שלה, התרבות שלה, והאומנות שמגדירה אותה.',
    
    // Craft
    'craft.title': 'אומנות הוואשי',
    'craft.titleJp': '和紙の芸術',
    'craft.what': 'מהו וואשי? (和紙)',
    'craft.whatText': 'וואשי (和紙, מילולית "נייר יפני") הוא נייר יפני מסורתי העשוי מסיבים טבעיים. המילה משלבת "וא" (和, יפני) ו"שי" (紙, נייר). אומנות עתיקה זו בת למעלה מ-1,300 שנה והוכרה על ידי אונסק"ו כמורשת תרבותית בלתי מוחשית.',
    'craft.materials': 'חומרים טבעיים',
    'craft.materialsText': 'וואשי נוצר מסיבי הקליפה הפנימית של שלושה צמחים: קוזו (楮, תות), מיצומאטה (三椏), וגמפי (雁皮). כל צמח מעניק לנייר תכונות ייחודיות - קוזו מספק חוזק, מיצומאטה יוצר רכות, וגמפי מוסיף ברק טבעי.',
    'craft.process': 'תהליך מסורתי (手漉き)',
    'craft.processText': 'אמנות עשיית הנייר ביד, הנקראת "טסוקי" (手漉き), כוללת השרייה של הסיבים, חבטה שלהם לעיסה, ויצירת גיליונות על מסכי במבוק. אמנים מומחים, המכונים "וואשי שוקונין" (和紙職人), מקדישים את חייהם לשכלול אומנות זו.',
    'craft.why': 'וריאציות טבעיות (自然の美)',
    'craft.whyText': 'היופי של וואשי טמון באסתטיקת ה"וואבי-סאבי" (侘寂) שלו - מציאת יופי בחוסר שלמות. כל גיליון מספר סיפור דרך דפוסים אורגניים, התפלגות סיבים ווריאציות צבע עדינות שהופכות כל יצירה לייחודית באמת.',
    'craft.frame': 'המסגרת (額縁)',
    'craft.frameTitle': 'מסגרות עץ בעבודת יד',
    'craft.frameText': 'כל מסגרת, הנקראת "גקובוצ\'י" (額縁), מיוצרת בעבודת יד מעץ אמיתי בסדנה הישראלית שלנו. אנו משתמשים רק בחומרים האיכותיים ביותר כדי לשמר ולהציג את הוואשי.',
    'craft.frameDetails': 'תהליך המסגור שלנו משתמש באופן בלעדי בחומרים נטולי חומצה - כולל לוח ההרכבה והדבקים - כדי להבטיח שהנייר יישאר מושלם לדורות. הוואשי מורכב בטכניקת ציר מיוחדת שיוצרת אפקט "ריחוף" אלגנטי, כאילו הנייר מרחף בקלילות בתוך המסגרת. סגנון הרכבה זה של אוקאשי (浮かし) מוסיף עומק ומאפשר להעריך במלואם את הקצוות הטבעיים המפורמים של הוואשי.',
    
    // Contact
    'contact.title': 'צור קשר',
    'contact.name': 'שם',
    'contact.email': 'אימייל',
    'contact.message': 'הודעה',
    'contact.send': 'שלח הודעה',
    'contact.whatsapp': 'וואטסאפ',
    'contact.instagram': 'אינסטגרם',
    
    // FAQ
    'faq.title': 'שאלות נפוצות',
    'faq.shipping': 'משלוח ואספקה',
    'faq.shippingAnswer': 'אנו מציעים משלוח חינם בכל רחבי ישראל. היצירה שלך תיארז בקפידה ובדרך כלל מגיעה תוך 3-5 ימי עסקים.',
    'faq.framing': 'אודות המסגור',
    'faq.framingAnswer': 'כל מסגרת עשויה בעבודת יד בסטודיו הישראלי שלנו מעץ אמיתי וחומרים נטולי חומצה. היצירות מגיעות מוכנות לתלייה עם כל החומרה הדרושה.',
    'faq.unique': 'האם היצירות ייחודיות?',
    'faq.uniqueAnswer': 'כן! בשל האופי בעבודת היד של נייר וואשי, לכל יצירה יש דפוסים ייחודיים ווריאציות טבעיות. אתה מקבל יצירת אמנות ייחודית באמת.',
    'faq.care': 'הוראות טיפול',
    'faq.careAnswer': 'שמור את היצירה שלך הרחק מאור שמש ישיר ולחות. נגב את המסגרת בעדינות עם מטלית יבשה. נייר הוואשי שמור מאחורי זכוכית.',
    'faq.returns': 'החזרות והחזרים',
    'faq.returnsAnswer': 'אנו מקבלים החזרות תוך 14 יום מהמסירה. הפריטים חייבים להיות במצב מקורי. צור קשר כדי להתחיל החזרה.',
    
    // Footer
    'footer.rights': 'כל הזכויות שמורות',
    'footer.privacy': 'מדיניות פרטיות',
    'footer.terms': 'תנאי שימוש',
    'footer.returns': 'מדיניות החזרות',
    
    // Common
    'common.currency': '₪',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'he' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
