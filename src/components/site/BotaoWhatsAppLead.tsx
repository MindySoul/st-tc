'use client';

import { useWhatsAppLead } from '@/components/site/WhatsAppLead';

/** Botão de WhatsApp para páginas que são Server Component (`/sobre`, por
 *  exemplo). Só ele precisa rodar no cliente — a página continua estática. */
export default function BotaoWhatsAppLead({
  acao,
  origem,
  className,
  children,
}: {
  acao: string;
  origem: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pedirContato = useWhatsAppLead();
  return (
    <button type="button" onClick={() => pedirContato({ acao, origem })} className={className}>
      {children}
    </button>
  );
}
