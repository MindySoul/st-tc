'use client';

import Link from 'next/link';
import { useWhatsAppLead } from '@/components/site/WhatsAppLead';

type Props = { titulo: string; texto?: string; primaryTo?: string; primaryLabel?: string };
const CtaFinal = ({ titulo, texto, primaryTo = '/contato#orcamento', primaryLabel = 'Solicitar orçamento' }: Props) => {
  const pedirContato = useWhatsAppLead();
  return (
  <section className="bg-primary text-primary-foreground py-16 lg:py-20">
    <div className="container text-center reveal">
      <h2 className="font-bold text-3xl lg:text-4xl mb-4 max-w-3xl mx-auto leading-tight">{titulo}</h2>
      {texto && <p className="opacity-95 max-w-2xl mx-auto mb-8">{texto}</p>}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href={primaryTo} className="bg-background text-primary font-bold px-7 py-3.5 rounded-md uppercase text-sm tracking-wide btn-press hover:bg-primary-soft">
          {primaryLabel}
        </Link>
        <button type="button"
          onClick={() => pedirContato({ acao: 'vim pelo site e quero falar com um especialista', origem: 'site_cta_final' })}
          className="border-2 border-background text-background font-bold px-7 py-3 rounded-md uppercase text-sm tracking-wide btn-press hover:bg-background hover:text-primary transition">
          Falar no WhatsApp
        </button>
      </div>
      <p className="text-xs mt-6 opacity-90">Orçamento 100% gratuito  •  Sem compromisso  •  Retorno em até 5 minutos</p>
      </div>
    </section>
  );
};
export default CtaFinal;
