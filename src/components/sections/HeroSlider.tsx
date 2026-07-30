'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroResAsset from '@/assets/hero-residencial-new.jpg';
import heroComAsset from '@/assets/hero-comercial-new.jpg';
import heroRurAsset from '@/assets/hero-rural-new.jpg';
import heroIndAsset from '@/assets/hero-industrial-new.jpg';

const heroRes = heroResAsset;
const heroCom = heroComAsset;
const heroRur = heroRurAsset;
const heroInd = heroIndAsset;

const slides = [
  { img: heroRes, badge: 'PIONEIRA NO NORTE DO ES DESDE 2015',
    h1: 'Descubra quanto você pode economizar com energia solar',
    sub: 'Mais de 4.000 famílias no ES já eliminaram a conta de luz. Simule agora gratuitamente.',
    cta1: { label: 'Simular minha economia →', href: '#calculadora' },
    cta2: { label: 'Ver nossas soluções', to: '/solucoes' } },
  { img: heroCom, badge: 'ENERGIA SOLAR COMERCIAL',
    h1: 'Corte os custos da sua empresa com energia solar',
    sub: 'ROI em até 3 anos. Estoque próprio. Instalação rápida.',
    cta1: { label: 'Quero orçamento comercial →', to: '/contato' } },
  { img: heroRur, badge: 'ENERGIA SOLAR RURAL',
    h1: 'Energia solar para o campo — do On-Grid ao Off-Grid',
    sub: 'Fazendas, granjas e propriedades rurais. Independência total.',
    cta1: { label: 'Quero orçamento rural →', to: '/contato' } },
  { img: heroInd, badge: 'ENERGIA SOLAR INDUSTRIAL',
    h1: 'Soluções de grande escala para indústrias no ES',
    sub: 'Alta potência, estoque próprio, maior garantia do mercado.',
    cta1: { label: 'Quero orçamento industrial →', to: '/contato' } },
];

const HeroSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[560px] overflow-hidden bg-background">
      {slides.map((s, k) => (
        <div key={k}
          className={`absolute inset-0 transition-opacity duration-1000 ${k === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Image src={s.img} alt={`Energia solar ${s.badge.toLowerCase()}`} fill sizes="100vw"
            className="object-cover" priority={k === 0} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="container relative h-full flex items-center">
            <div className="max-w-2xl py-10">
              <span className="inline-block bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
                {s.badge}
              </span>
              <h1 className="text-primary font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5">
                {s.h1}
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg mb-8 max-w-xl">{s.sub}</p>
              <div className="flex flex-wrap gap-3">
                {('href' in s.cta1) ? (
                  <a href={s.cta1.href} className="bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-md uppercase text-sm tracking-wide btn-press hover:bg-primary-dark">
                    {s.cta1.label}
                  </a>
                ) : (
                  <Link href={(s.cta1 as any).to} className="bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-md uppercase text-sm tracking-wide btn-press hover:bg-primary-dark">
                    {s.cta1.label}
                  </Link>
                )}
                {s.cta2 && (
                  <Link href={s.cta2.to} className="border-2 border-primary text-primary font-bold px-7 py-3 rounded-md uppercase text-sm tracking-wide btn-press hover:bg-primary hover:text-primary-foreground transition">
                    {s.cta2.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-10">
        {slides.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Ir para slide ${k+1}`}
            className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-primary' : 'w-2 bg-primary/40'}`} />
        ))}
      </div>
    </section>
  );
};
export default HeroSlider;
