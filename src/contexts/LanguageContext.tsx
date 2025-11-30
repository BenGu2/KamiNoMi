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
    'about.text': 'We travel to Japan to source the finest handmade washi paper, created by artisans using centuries-old techniques. Each piece is then carefully framed by hand in our Israeli workshop, ready to bring timeless beauty to your home.',
    
    // Craft
    'craft.title': 'The Art of Washi',
    'craft.what': 'What is Washi?',
    'craft.whatText': 'Washi is traditional Japanese paper made from natural fibers of the kozo, mitsumata, or gampi plants. Its production is recognized by UNESCO as Intangible Cultural Heritage.',
    'craft.how': 'Traditional Craftsmanship',
    'craft.howText': 'Each sheet is handmade using techniques passed down through generations. The natural fibers create unique patterns and textures, making every piece one of a kind.',
    'craft.why': 'Natural Variations',
    'craft.whyText': 'The beauty of washi lies in its imperfections. Each sheet tells a story through its organic patterns, fiber distributions, and subtle color variations.',
    
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
    'faq.framingAnswer': 'Each frame is handmade in our Israeli workshop using quality materials. The pieces come ready to hang with all necessary hardware included.',
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
    'about.text': 'אנו נוסעים ליפן כדי למצוא את נייר הוואשי העדין ביותר, שנוצר בידי אומנים בטכניקות בנות מאות שנים. כל יצירה מוסגרת בקפידה בעבודת יד בסטודיו שלנו בישראל, מוכנה להביא יופי נצחי לביתך.',
    
    // Craft
    'craft.title': 'אומנות הוואשי',
    'craft.what': 'מהו וואשי?',
    'craft.whatText': 'וואשי הוא נייר יפני מסורתי העשוי מסיבים טבעיים של צמחי קוזו, מיצומאטה או גמפי. הייצור שלו הוכר על ידי אונסק"ו כמורשת תרבותית בלתי מוחשית.',
    'craft.how': 'אומנות מסורתית',
    'craft.howText': 'כל גיליון נעשה בעבודת יד בטכניקות שעברו מדור לדור. הסיבים הטבעיים יוצרים דפוסים וטקסטורות ייחודיים, והופכים כל יצירה לייחודית.',
    'craft.why': 'וריאציות טבעיות',
    'craft.whyText': 'היופי של וואשי טמון בחוסר השלמות שלו. כל גיליון מספר סיפור דרך הדפוסים האורגניים, התפלגות הסיבים ווריאציות הצבע העדינות.',
    
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
    'faq.framingAnswer': 'כל מסגרת עשויה בעבודת יד בסטודיו הישראלי שלנו מחומרים איכוtiים. היצירות מגיעות מוכנות לתלייה עם כל החומרה הדרושה.',
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
