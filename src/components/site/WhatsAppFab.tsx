import { MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/site';

const WhatsAppFab = () => (
  <a
    href={waLink('Olá! Vim pelo site da Tecsol e gostaria de solicitar um orçamento.')}
    target="_blank" rel="noopener noreferrer"
    aria-label="Falar com especialista no WhatsApp"
    className="group fixed bottom-5 right-5 z-50 w-[52px] h-[52px] lg:w-[60px] lg:h-[60px] rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-orange pulse-wa hover:bg-primary-dark transition"
  >
    <MessageCircle size={28} />
    <span className="hidden lg:block absolute right-[72px] bg-foreground text-background text-xs px-3 py-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
      Falar com especialista agora
    </span>
  </a>
);
export default WhatsAppFab;
