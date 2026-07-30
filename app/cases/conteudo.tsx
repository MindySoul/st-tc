'use client';

import type { StaticImageData } from 'next/image';

import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Zap, DollarSign, Calendar, X } from 'lucide-react';
import Depoimentos from '@/components/sections/Depoimentos';
import CtaFinal from '@/components/sections/CtaFinal';
import caseImg from '@/assets/case-residencial.jpg';
import heroRes from '@/assets/hero-residencial.jpg';
import heroCom from '@/assets/hero-comercial.jpg';
import heroRur from '@/assets/hero-rural.jpg';
import heroInd from '@/assets/hero-industrial.jpg';
import caseLinhares from '@/assets/case-linhares.jpg';
import casePadaria from '@/assets/case-padaria.jpg';
import caseAlvorada from '@/assets/case-alvorada.jpg';
import caseFazenda from '@/assets/case-fazenda.jpg';
import caseColatina from '@/assets/case-colatina.jpg';
import caseSaoMateus from '@/assets/case-saomateus.jpg';

type Case = {
  img: StaticImageData; tipo: string; sistema: string; titulo: string;
  cidade: string; kwp: string; economia: string; data: string; frase: string; payback: string;
};

const cases: Case[] = [
  { img: caseLinhares, tipo: 'Residencial', sistema: 'On-Grid', titulo: 'Residência em Linhares — 6,6 kWp', cidade: 'Linhares - ES', kwp: '6,6 kWp', economia: 'R$ 980/mês', data: 'Jan 2025', frase: 'Conta caiu de R$1.100 para R$80. Investimento perfeito.', payback: '3 anos e 2 meses' },
  { img: casePadaria, tipo: 'Comercial', sistema: 'On-Grid', titulo: 'Escritório Contábil — 22 kWp', cidade: 'Aracruz - ES', kwp: '22 kWp', economia: 'R$ 4.200/mês', data: 'Out 2024', frase: 'Agora o escritório economiza milhares de reais por mês com energia solar.', payback: '2 anos e 8 meses' },
  { img: caseAlvorada, tipo: 'Industrial', sistema: 'Híbrido', titulo: 'Indústria Metalúrgica — 180 kWp', cidade: 'Linhares - ES', kwp: '180 kWp', economia: 'R$ 28.500/mês', data: 'Ago 2024', frase: 'Uma economia expressiva que trouxe mais previsibilidade para os custos da operação.', payback: '3 anos' },
  { img: caseFazenda, tipo: 'Rural', sistema: 'Off-Grid', titulo: 'Fazenda Boa Vista — 35 kWp', cidade: 'Sooretama - ES', kwp: '35 kWp', economia: 'R$ 5.400/mês', data: 'Mar 2025', frase: 'Independência total. A irrigação roda sem peso na conta.', payback: '3 anos e 6 meses' },
  { img: caseColatina, tipo: 'Residencial', sistema: 'Híbrido', titulo: 'Casa Premium na Lagoa — 12 kWp', cidade: 'Linhares - ES', kwp: '12 kWp', economia: 'R$ 1.700/mês', data: 'Fev 2025', frase: 'Energia solar para unir economia, sustentabilidade e valorização do imóvel.', payback: '4 anos' },
  { img: caseSaoMateus, tipo: 'Comercial', sistema: 'On-Grid', titulo: 'Escritório em São Mateus — 18 kWp', cidade: 'São Mateus - ES', kwp: '18 kWp', economia: 'R$ 3.100/mês', data: 'Nov 2024', frase: 'Projeto profissional e instalação rápida.', payback: '3 anos' },
];

const filtros = ['Todos','Residencial','Comercial','Industrial','Rural'];

const Conteudo = () => {
  const [f, setF] = useState('Todos');
  const [open, setOpen] = useState<Case | null>(null);
  const list = f === 'Todos' ? cases : cases.filter(c => c.tipo === f);

  return (
    <>

      <section className="bg-background py-16 lg:py-20">
        <div className="container max-w-3xl text-center reveal">
          <span className="inline-block bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            Mais de 4.000 Projetos
          </span>
          <h1 className="text-primary font-extrabold text-4xl lg:text-5xl leading-tight mb-4">
            Cases Tecsol — Histórias reais de economia e liberdade
          </h1>
          <p className="text-muted-foreground text-lg">
            Residencial, Comercial, Industrial e Rural. Cada case é uma prova real de transformação.
          </p>
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filtros.map(p => (
              <button key={p} onClick={() => setF(p)}
                className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition ${
                  f === p ? 'bg-primary text-primary-foreground' : 'border border-primary text-primary hover:bg-primary-soft'
                }`}>
                {p}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c, i) => (
              <article key={i} className="bg-background border border-border rounded-xl overflow-hidden card-hover animate-fade-in">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={c.img} alt={`Projeto ${c.tipo} - ${c.titulo}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">{c.tipo}</span>
                  <span className="absolute top-3 right-3 border border-primary bg-background/90 text-primary text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">{c.sistema}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-foreground font-bold text-base mb-3">{c.titulo}</h3>
                  <ul className="space-y-1.5 text-sm text-foreground mb-4">
                    <li className="flex items-center gap-2"><MapPin size={14} className="text-primary"/>{c.cidade}</li>
                    <li className="flex items-center gap-2"><Zap size={14} className="text-primary"/>{c.kwp}</li>
                    <li className="flex items-center gap-2"><DollarSign size={14} className="text-primary"/>{c.economia}</li>
                    <li className="flex items-center gap-2"><Calendar size={14} className="text-primary"/>{c.data}</li>
                  </ul>
                  <p className="italic text-foreground text-sm mb-4 line-clamp-2">"{c.frase}"</p>
                  <button onClick={() => setOpen(c)} className="w-full border border-primary text-primary font-semibold px-5 py-2 rounded-md text-xs uppercase btn-press hover:bg-primary-soft">
                    Ver detalhes →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 bg-foreground/60 flex items-center justify-center p-4 animate-fade-in" onClick={() => setOpen(null)}>
          <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <Image src={open.img} alt={open.titulo} className="w-full aspect-video object-cover rounded-t-2xl"/>
              <button onClick={() => setOpen(null)} aria-label="Fechar" className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background text-primary flex items-center justify-center shadow"><X size={18}/></button>
            </div>
            <div className="p-6">
              <h3 className="text-primary font-bold text-2xl mb-3">{open.titulo}</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-foreground mb-4">
                <p><strong className="text-primary">Cidade:</strong> {open.cidade}</p>
                <p><strong className="text-primary">Sistema:</strong> {open.sistema}</p>
                <p><strong className="text-primary">Potência:</strong> {open.kwp}</p>
                <p><strong className="text-primary">Economia:</strong> {open.economia}</p>
                <p><strong className="text-primary">Payback:</strong> {open.payback}</p>
                <p><strong className="text-primary">Instalado:</strong> {open.data}</p>
              </div>
              <p className="italic text-foreground bg-secondary p-4 rounded-lg mb-5">"{open.frase}"</p>
              <a href="/contato" className="block text-center bg-primary text-primary-foreground font-bold py-3 rounded-md uppercase text-sm btn-press hover:bg-primary-dark">
                Quero um projeto assim →
              </a>
            </div>
          </div>
        </div>
      )}

      <Depoimentos bg="bg-secondary" />
      <CtaFinal titulo="Quer ser o próximo case de sucesso da Tecsol?" texto="Orçamento gratuito, retorno em até 5 minutos." primaryLabel="Quero ser o próximo case" />
    </>
  );
};
export default Conteudo;
