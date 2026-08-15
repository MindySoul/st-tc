'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

type D = { nome: string; cidade: string; tag: string; frase: string };
const DEFAULT: D[] = [
  { nome: 'Marcos Andrade', cidade: 'Linhares - ES', tag: 'Residencial', frase: 'Minha conta foi de R$1.100 para R$80. Melhor decisão da minha vida.' },
  { nome: 'Juliana Costa', cidade: 'Colatina - ES', tag: 'Residencial', frase: 'Atendimento incrível desde o primeiro dia. Equipe nota 10!' },
  { nome: 'Chico Freitas', cidade: 'Aracruz - ES', tag: 'Comercial', frase: 'Reduzimos 92% do custo de energia. ROI em menos de 3 anos.' },
  { nome: 'Gabriel Drago', cidade: 'Sooretama - ES', tag: 'Rural', frase: 'A irrigação agora roda sem peso na conta. Independência total.' },
  { nome: 'Roberto Mendes', cidade: 'São Mateus - ES', tag: 'Residencial', frase: 'Instalação rápida, equipe educada e o sistema funcionando perfeitamente.' },
  { nome: 'Indústria Alvorada', cidade: 'Linhares - ES', tag: 'Comercial', frase: 'Economia de R$28 mil/mês. Tecsol é parceira para toda a vida.' },
  { nome: 'Lúcia Ferreira', cidade: 'Ibiraçu - ES', tag: 'Residencial', frase: 'Melhor pós-venda que já tive. Recomendo de olhos fechados.' },
  { nome: 'Sítio Esperança', cidade: 'Rio Bananal - ES', tag: 'Rural', frase: 'O Off-Grid mudou nossa vida. Hoje produzimos nossa própria energia.' },
];

const Depoimentos = ({ bg = 'bg-background' }: { bg?: string }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % DEFAULT.length), 4000);
    return () => clearInterval(t);
  }, []);
  const visible = [0,1,2,3].map(o => DEFAULT[(idx + o) % DEFAULT.length]);

  return (
    <section className={`${bg} py-16 lg:py-24`}>
      <div className="container">
        <div className="text-center mb-12 reveal">
          <h2 className="text-primary font-bold text-3xl lg:text-4xl mb-3">Quem já confiou na Tecsol</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de famílias e empresas que transformaram suas vidas com energia solar.
          </p>
          <div className="h-1 w-16 bg-primary mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {visible.map((d, i) => (
            <article key={`${d.nome}-${i}`} className="bg-background border border-border card-hover rounded-xl p-6 shadow-card">
              <div className="w-14 h-14 rounded-full bg-primary-soft border-2 border-primary flex items-center justify-center text-primary font-bold text-lg mb-3">
                {d.nome.split(' ').map(n=>n[0]).slice(0,2).join('')}
              </div>
              <p className="font-bold text-foreground">{d.nome}</p>
              <p className="text-primary text-xs font-semibold mb-2">{d.cidade}</p>
              <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(n => <Star key={n} size={14} className="fill-primary text-primary"/>)}</div>
              <span className="inline-block border border-primary text-primary text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full mb-3">{d.tag}</span>
              <p className="italic text-foreground text-sm leading-relaxed">"{d.frase}"</p>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {DEFAULT.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i+1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? 'w-6 bg-primary' : 'w-2 bg-primary/30'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Depoimentos;
