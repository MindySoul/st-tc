'use client';

import { useWhatsAppLead } from '@/components/site/WhatsAppLead';
import IconWhatsApp from '@/components/site/IconWhatsApp';

const WhatsAppFab = () => {
  const pedirContato = useWhatsAppLead();
  return (
    <button
      type="button"
      onClick={() => pedirContato({ acao: 'vim pelo site e quero um orçamento', origem: 'site_botao_flutuante' })}
      aria-label="Falar com especialista no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 w-[52px] h-[52px] lg:w-[60px] lg:h-[60px] rounded-full bg-whatsapp text-white flex items-center justify-center shadow-orange pulse-wa hover:bg-whatsapp-dark transition"
    >
      <IconWhatsApp size={28} />
      <span className="hidden lg:block absolute right-[72px] bg-foreground text-background text-xs px-3 py-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Falar com especialista agora
      </span>
    </button>
  );
};
export default WhatsAppFab;
