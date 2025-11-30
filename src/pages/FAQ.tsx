import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.shipping'),
      answer: t('faq.shippingAnswer'),
    },
    {
      question: t('faq.framing'),
      answer: t('faq.framingAnswer'),
    },
    {
      question: t('faq.unique'),
      answer: t('faq.uniqueAnswer'),
    },
    {
      question: t('faq.care'),
      answer: t('faq.careAnswer'),
    },
    {
      question: t('faq.returns'),
      answer: t('faq.returnsAnswer'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto fade-in">
        <h1 className="text-4xl md:text-5xl font-serif luxury-heading mb-12 text-center">
          {t('faq.title')}
        </h1>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded px-6">
              <AccordionTrigger className="text-left font-serif text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
