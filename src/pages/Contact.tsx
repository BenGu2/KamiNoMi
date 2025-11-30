import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Instagram } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === 'he' ? 'ההודעה נשלחה בהצלחה' : 'Message sent successfully');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto fade-in">
        <h1 className="text-4xl md:text-5xl font-serif luxury-heading mb-8 text-center">
          {t('contact.title')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 border border-border rounded hover:bg-muted transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {t('contact.whatsapp')}
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 border border-border rounded hover:bg-muted transition-colors"
          >
            <Instagram className="w-5 h-5" />
            {t('contact.instagram')}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">{t('contact.name')}</Label>
            <Input id="name" required className="mt-2" />
          </div>

          <div>
            <Label htmlFor="email">{t('contact.email')}</Label>
            <Input id="email" type="email" required className="mt-2" />
          </div>

          <div>
            <Label htmlFor="message">{t('contact.message')}</Label>
            <Textarea id="message" required rows={6} className="mt-2" />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {t('contact.send')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
