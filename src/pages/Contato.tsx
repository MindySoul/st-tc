import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, MessageCircle, Clock, Star, Plus, Minus } from 'lucide-react';
import Seo from '@/components/sections/Seo';
import LeadForm from '@/components/sections/LeadForm';
import Depoimentos from '@/components/sections/Depoimentos';
import { SITE, waLink } from '@/lib/site';
import contato1Asset from '@/assets/contato-1.jpg';
import contato2Asset from '@/assets/contato-2.jpg';
import contato3Asset from '@/assets/contato-3.jpg';
import fortlevLogo from '@/assets/logo-fortlev.png';
const heroRes = contato1Asset;
const heroCom = contato2Asset;
const heroRur = contato3Asset;

const slides = [
  { img: heroRes, tag: 'Residencial', frase: 'Conta caiu de R$1.100 para R$80', nome: 'Marcos Andrade', cidade: 'Linhares - ES', desc: 'Sistema 6,6 kWp instalado em janeiro/2025. Economia de R$980/mês.' },
  { img: heroCom, tag: 'Comercial', frase: 'Reduzimos 92% do custo de energia', nome: 'Chico Freitas', cidade: 'Aracruz - ES', desc: 'Sistema 22 kWp com ROI em 2 anos e 8 meses.' },
  { img: heroRur, tag: 'Rural', frase: 'Independência total no campo', nome: 'Gabriel Drago', cidade: 'Sooretama - ES', desc: 'Sistema Off-Grid 35 kWp para irrigação e produção.' },
];

const faqs = [
  { p: 'Em quanto tempo o sistema se paga?', r: 'Geralmente entre 3 e 5 anos. Depende da conta, sistema e forma de pagamento. Em alguns casos comerciais, o payback é inferior a 3 anos.' },
  { p: 'Energia solar funciona em dia nublado?', r: 'Sim! O sistema continua gerando energia, embora com produção reduzida. A média anual é o que importa para o cálculo.' },
  { p: 'A garantia é de quanto tempo?', r: 'Como parceiros oficiais Fortlev Solar, oferecemos até 30 anos de garantia nos painéis e até 12 anos no inversor.' },
  { p: 'Vocês fazem manutenção depois?', r: 'Sim. Temos o serviço OMM (Operação, Manutenção e Monitoramento) — únicos no ES com monitoramento próprio das usinas.' },
  { p: 'Posso financiar 100% do sistema?', r: 'Sim. Trabalhamos com BV (até 120x e 3 meses de carência), Conasol (consórcio até 36x sem juros), cartão e híbridos.' },
];

const Contato = () => {
  const [i, setI] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];

  return (
    <>
      <Seo
        title="Orçamento Energia Solar Gratuito | Tecsol Linhares"
        description="Orçamento gratuito de energia solar em Linhares ES. Atendimento em até 5 minutos. Parceiro Fortlev Solar. Simule agora."
        path="/contato"
      />
      <h1 className="sr-only">Fale com a Tecsol e reduza até 95% da sua conta de luz</h1>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-10 reveal">
            <h2 className="text-primary font-bold text-3xl lg:text-4xl">Faça como essas famílias e empresas</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-background rounded-2xl overflow-hidden shadow-card">
            <div className="relative w-full h-72 lg:h-full">
              <img src={s.img} alt={s.frase} className="absolute inset-0 w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/10 to-transparent lg:bg-gradient-to-l lg:from-background/95 lg:via-background/30 lg:to-transparent" />
            </div>
            <div className="p-8 lg:p-12">
              <span className="inline-block bg-primary text-primary-foreground text-[10px] font-bold uppercase px-3 py-1 rounded-full mb-4">{s.tag}</span>
              <h3 className="text-primary font-bold text-2xl lg:text-3xl mb-4 leading-tight">{s.frase}</h3>
              <p className="font-bold text-foreground">{s.nome}</p>
              <p className="text-primary text-sm font-semibold mb-3">{s.cidade}</p>
              <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(n => <Star key={n} size={14} className="fill-primary text-primary"/>)}</div>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k+1}`}
                className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-primary' : 'w-2 bg-primary/40'}`}/>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container max-w-2xl">
          <div className="text-center mb-8 reveal">
            <h2 className="text-primary font-bold text-3xl lg:text-4xl mb-3">Solicite seu orçamento gratuito</h2>
            <p className="text-muted-foreground">Nossa equipe entrará em contato em até 5 minutos.</p>
          </div>
          <LeadForm origem="formulario_contato" pagina="/contato" />
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="container grid lg:grid-cols-3 gap-8">
          <div className="bg-background rounded-xl p-6 reveal">
            <h3 className="text-primary font-bold text-xl mb-4 flex items-center gap-2"><MapPin size={20}/> Nossa localização</h3>
            <p className="text-foreground text-sm mb-4">{SITE.address}</p>
            <iframe
              title="Mapa Tecsol"
              src="https://www.google.com/maps?q=Av.+Cerejeira+280+Linhares+ES&output=embed"
              className="w-full aspect-video rounded-md border border-border"
              loading="lazy"
            />
          </div>
          <div className="bg-background rounded-xl p-6 reveal">
            <h3 className="text-primary font-bold text-xl mb-4 flex items-center gap-2"><MessageCircle size={20}/> Fale conosco</h3>
            <ul className="space-y-3 text-foreground text-sm mb-5">
              <li className="flex items-center gap-2"><Phone size={16} className="text-primary"/>{SITE.phone}</li>
              <li className="flex items-center gap-2"><Instagram size={16} className="text-primary"/>{SITE.instagram}</li>
              <li className="flex items-center gap-2"><Facebook size={16} className="text-primary"/>Tecsol Engenharia</li>
              <li className="flex items-center gap-2"><Clock size={16} className="text-primary"/>Seg-Sex 8h-18h | Sáb 8h-12h</li>
            </ul>
            <a href={waLink('Olá, vim pelo site da Tecsol.')} target="_blank" rel="noopener noreferrer"
              className="block text-center bg-primary text-primary-foreground font-bold py-3 rounded-md uppercase text-sm btn-press hover:bg-primary-dark">
              Falar no WhatsApp
            </a>
          </div>
          <div className="bg-background rounded-xl p-6 reveal text-center">
            <h3 className="text-primary font-bold text-xl mb-4">Parceiro Oficial</h3>
            <img src={fortlevLogo} alt="Fortlev Solar" className="h-14 w-auto mx-auto mb-3 object-contain" />
            <p className="text-foreground text-sm">Integrador autorizado, equipamentos com garantia de até 30 anos.</p>
          </div>
        </div>
      </section>

      <Depoimentos bg="bg-background"/>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-primary font-bold text-3xl lg:text-4xl text-center mb-10 reveal">Dúvidas frequentes</h2>
          <div className="space-y-3">
            {faqs.map((f, k) => (
              <div key={k} className="bg-background border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === k ? null : k)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-primary-soft transition">
                  <span className="font-semibold text-foreground">{f.p}</span>
                  {openFaq === k ? <Minus size={18} className="text-primary shrink-0"/> : <Plus size={18} className="text-primary shrink-0"/>}
                </button>
                {openFaq === k && <div className="px-5 pb-5 text-foreground text-sm animate-fade-in">{f.r}</div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/duvidas-frequentes" className="text-primary font-bold hover:underline">Ver todas as dúvidas →</Link>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container text-center">
          <h2 className="font-bold text-3xl lg:text-4xl mb-6">Nossa equipe está pronta para te atender agora</h2>
          <a href={waLink('Olá, quero falar com um especialista da Tecsol agora.')} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-background text-primary font-bold px-8 py-4 rounded-md uppercase text-sm tracking-wide btn-press hover:bg-primary-soft">
            Falar no WhatsApp →
          </a>
          <p className="text-xs mt-5 opacity-90">Atendimento em até 5 minutos  •  Orçamento gratuito</p>
        </div>
      </section>
    </>
  );
};
export default Contato;
