'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Zap, DollarSign } from 'lucide-react';

const items = [
  { icon: CheckCircle2, value: 1500, prefix: '+', label: 'sistemas' },
  { icon: Zap, value: 40000, prefix: '+', label: 'painéis' },
  { icon: DollarSign, value: 60, prefix: 'R$', suffix: ' milhões', label: 'economizados' },
];

const Counter = ({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / 2000);
          setN(Math.round(to * (0.2 + 0.8*p) * (p === 1 ? 1 : 1)));
          if (p < 1) requestAnimationFrame(tick); else setN(to);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  const fmt = n >= 1000 ? n.toLocaleString('pt-BR') : n.toString();
  return <span ref={ref}>{prefix}{fmt}{suffix}</span>;
};

const Resultados = () => (
  <section className="bg-primary text-primary-foreground py-16 lg:py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl lg:text-4xl">Resultados que comprovam nossa excelência</h2>
        <div className="h-1 w-16 bg-primary-foreground mx-auto mt-4 rounded-full" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <div key={i} className="reveal-scale">
              <Icon size={42} className="mx-auto mb-4" strokeWidth={1.6} />
              <p className="text-4xl lg:text-5xl font-extrabold mb-2">
                <Counter to={it.value} prefix={it.prefix} suffix={it.suffix} />
              </p>
              <p className="text-sm lg:text-base opacity-95">{it.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
export default Resultados;
