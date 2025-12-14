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
    'nav.craft': 'What is Washi?',
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
    'products.clickToEnlarge': 'Click to enlarge',
    
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
    'craft.title': 'What Is Washi?',
    'craft.subtitle': 'Traditional Japanese paper, handmade from natural plant fibers using centuries-old techniques.',
    'craft.intro1': 'Light yet remarkably strong, each sheet has a unique texture shaped by nature and the hands that made it.',
    'craft.intro2': 'Unlike Western paper, which is typically produced from wood pulp, washi is made from long fibers such as kozo (mulberry), mitsumata, or gampi. These fibers give washi its distinctive strength, softness, and subtle translucency, making it both functional and beautiful.',
    'craft.history': 'For centuries, washi has been used in Japan for writing, art, bookbinding, and interior design—valued not only for its durability, but for its quiet, organic character.',
    'craft.processTitle': 'How Traditional Washi Is Made',
    'craft.processIntro': 'Traditional washi is made by hand using techniques that have been passed down for generations. The process is slow, deliberate, and deeply connected to nature and the seasons.',
    'craft.step1Title': '1. Harvesting the Fibers',
    'craft.step1': 'The process begins with harvesting plant fibers, most commonly kozo (paper mulberry). The branches are cut, steamed, and stripped to reveal the inner bark, which contains the fibers used to make the paper.',
    'craft.step2Title': '2. Cleaning and Preparing',
    'craft.step2': 'The fibers are carefully cleaned by hand to remove impurities, then boiled with natural alkali (traditionally ash) to soften them. After boiling, they are rinsed in clear water—often mountain or river water—to preserve their purity and strength.',
    'craft.step3Title': '3. Beating the Fibers',
    'craft.step3': 'Once softened, the fibers are beaten by hand. This separates them without breaking their length, which is essential to washi\'s strength and texture.',
    'craft.step4Title': '4. Forming the Paper',
    'craft.step4': 'The fibers are mixed with water and neri, a natural formation aid extracted from plant roots. Using a bamboo screen (called a su), the papermaker gently scoops and rocks the mixture, layering fibers evenly to form a sheet. This rhythmic motion is a defining part of traditional washi-making.',
    'craft.step5Title': '5. Pressing and Drying',
    'craft.step5': 'The freshly formed sheets are stacked and pressed to remove excess water, then carefully dried—often brushed onto wooden boards and left to dry in the air and sunlight.',
    'craft.closingTitle': 'Crafted by Hand, Shaped by Nature',
    'craft.closing1': 'Traditional washi is not mass-produced. It reflects the climate, the water, the fibers, and the skill of the maker. Subtle variations in thickness, texture, and tone are not imperfections—they are signs of authenticity.',
    'craft.closing2': 'This is paper made with patience, respect for materials, and centuries of knowledge.',
    
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
    'brand.name': 'קאמינומי',
    'brand.nameJp': '紙の美',
    
    // Navigation
    'nav.home': 'דף הבית',
    'nav.shop': 'גלריה',
    'nav.about': 'אודות',
    'nav.craft': 'מהו וואשי?',
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
    'products.clickToEnlarge': 'לחץ להגדלה',
    
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
    'about.intro': 'קאמינומי נולד מאהבה לתרבות היפנית, לתחושת האסתטיקה המעודנת שלה וליופייה.',
    'about.inspiration': 'השראתי נבעה מהאיכות הנצחית של אומנות מסורתית, בה כל פרט מעוצב בכוונה ובכבוד לחומר. ברגע שנתקלתי בה, ידעתי שאני רוצה שגם אחרים יחוו זאת.',
    'about.quote': '"הטבע הוא האומן הראשון; האומן רק מנחה את צורתו."',
    'about.selection': 'מבחר הוואשי (和紙) שלנו משקף רוח זו - כל יצירה ייחודית, טבעית, ועשויה בשיטות בנות דורות.',
    'about.closing': 'להחזיק יצירה כזו זה להביא הביתה חלק קטן מיפן: האמנות שלה, התרבות שלה, והאומנות שמגדירה אותה.',
    
    // Craft
    'craft.title': 'מהו וואשי?',
    'craft.subtitle': 'נייר יפני מסורתי, בעבודת יד מסיבים טבעיים תוך שימוש בטכניקות בנות מאות שנים.',
    'craft.intro1': 'קל עם זאת חזק להפליא, לכל גיליון קוואם ייחודי שעוצב על ידי הטבע ובידיים שעשו אותו.',
    'craft.intro2': 'בשונה מנייר מערבי, המיוצר בדרך כלל מעיסת עץ, וואשי מיוצר מסיבים ארוכים כגון קוזו (תות), מיצומאטה או גמפי. סיבים אלה מעניקים לוואשי את החוזק הייחודי שלו, הרכות והשקיפות עדינה, מה שהופכו אותו לפונקציונלי וגם יפה.',
    'craft.history': 'במשך מאות שנים, וואשי שימש ביפן לכתיבה, אמנות, כריכת ספרים ועיצוב פנים - המוערך לא רק בעקביותו, אלא גם בתו העדין הטבעי שלו.',
    'craft.processTitle': 'כיצד מיוצר וואשי מסורתי',
    'craft.processIntro': 'וואשי מסורתי מיוצר ביד תוך שימוש בטכניקות שהועברו משדור לדור. התהליך איטי, מכוון, וקשור עמוקות לטבע ולעונות.',
    'craft.step1Title': '1. קציר הסיבים',
    'craft.step1': 'התהליך מתחיל בקציר סיבי צמחים, לרוב קוזו (תות נייר). הענפים נחתכים, מומשים וקלופים כדי לחשוף את הקליפה הפנימית, המכילה את הסיבים המשמשים ליצור הנייר.',
    'craft.step2Title': '2. ניקוי והכנה',
    'craft.step2': 'הסיבים נוקו בקפידה ביד כדי להסיר זיהומים, ואז מבושלים עם אלקלי טבעי (באופן מסורתי אפר) כדי להרכין אותם. לאחר הרתיחה, הם שטופים במים צלולים - לעתים קרובות מימי הרים או נהרות - כדי לשמר את טהרם וחוזקם.',
    'craft.step3Title': '3. חבטת הסיבים',
    'craft.step3': 'לאחר הרכנה, הסיבים מובטים ביד. זה מפריד אותם מבלי לשבור את אורכם, וזה חיוני לחוזק ולטקסטורה של וואשי.',
    'craft.step4Title': '4. יצירת הנייר',
    'craft.step4': 'הסיבים מערבבים עם מים וְנֵרִי, חומר יצירה טבעי המופק משורשי צמחים. באמצעות מסך במבוק (הנקרא סוּ), יוצר הנייר בעדינות קוסם וזע את התערובת, ותוך סידור שכבות סיבים באופן אחיד ליצירת גיליון. תנועה קצבית זו היא חלק מגדיר של ייצור וואשי מסורתי.',
    'craft.step5Title': '5. לחיצה וייבוש',
    'craft.step5': 'הגיליונות החדשים מורמים וזקופים כדי להסיר מים עודפים, ואז מיובשים בקפידה - לעתים קרובות מברושים על לוחות עץ ולשהייה ליבוש באוויר ובאור שמש.',
    'craft.closingTitle': 'בעבודת יד, מעוצב על ידי הטבע',
    'craft.closing1': 'וואשי מסורתי אינו מיוצר בהמון. הוא משקף את האקלים, את המים, את הסיבים, ואת המיומנות של היוצר. וריאציות עדינות בעובי, טקסטורה וגוון אינן פגמים - הן סימנים של אותנטיות.',
    'craft.closing2': 'זהו נייר עשוי בסבלנות, כבוד לחומרים, ומאות שנים של ידע.',
    
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
  const [language, setLanguage] = useState<Language>('he');

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
