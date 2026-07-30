import { pageMetadata } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Sun, Battery, Zap, Home, Building2, Tractor, Factory, Car, Plug, Droplets, BatteryCharging, Activity } from 'lucide-react';
import Depoimentos from '@/components/sections/Depoimentos';
import LeadForm from '@/components/sections/LeadForm';
import CtaFinal from '@/components/sections/CtaFinal';
import fortlevLogo from '@/assets/logo-fortlev.png';
import solResidencial from '@/assets/sol-residencial.jpg';
import solComercial from '@/assets/sol-comercial.jpg';
import solRural from '@/assets/sol-rural.jpg';
import solIndustrial from '@/assets/sol-industrial.jpg';

export const metadata = pageMetadata({
  title: 'Soluções em Energia Solar Fotovoltaica | Tecsol ES',
  description: 'On-Grid, Híbrido, Off-Grid, Residencial, Comercial, Rural. Soluções completas em energia solar no ES. Estoque próprio. Parceiro Fortlev Solar.',
  path: '/solucoes',
});

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Soluções em Energia Solar Fotovoltaica",
  serviceType: "Instalação de Sistemas Fotovoltaicos",
  provider: {
    "@type": "LocalBusiness",
    name: "Tecsol Engenharia",
    image: "https://tecsolengenharia.com.br/og-image.jpg",
    url: "https://tecsolengenharia.com.br",
  },
  areaServed: ["Linhares", "Colatina", "São Mateus", "Aracruz", "Espírito Santo"],
  image: "https://tecsolengenharia.com.br/og-image.jpg",
  url: "https://tecsolengenharia.com.br/solucoes",
};

const sistemas = [
  { Icon: Sun, h: 'On-Grid — Conectado à Rede',
    d: 'O mais popular do Brasil. Conectado à rede elétrica, gera energia, abate na conta e acumula créditos.',
    b: ['Menor investimento inicial','Créditos de energia','Retorno em 3-5 anos'],
    tag: 'Ideal para residências e comércios', cta: 'Orçamento On-Grid' },
  { Icon: Battery, h: 'Híbrido — O Melhor dos Dois Mundos', popular: true,
    d: 'Gera, usa e armazena nas baterias. Em queda de energia, as baterias entram em ação.',
    b: ['Funciona em queda de energia','Máxima independência','Baterias de lítio'],
    tag: 'Ideal para empresas e residências premium', cta: 'Orçamento Híbrido' },
  { Icon: Zap, h: 'Off-Grid — Autonomia Total',
    d: '100% independente da rede elétrica. Gera e armazena toda a energia necessária.',
    b: ['Zero conta de luz','Para áreas sem rede','Liberdade total'],
    tag: 'Ideal para fazendas e áreas remotas', cta: 'Orçamento Off-Grid' },
];

const segmentos = [
  { Icon: Home, img: solResidencial, h: 'Energia Solar Residencial — Economia na sua casa', tipo: 'Residencial',
    d: 'Reduza sua conta de luz em até 95% e valorize seu imóvel com energia limpa e financiamento facilitado.',
    b: ['Projeto sob medida', 'Instalação rápida e segura', 'Financiamento em até 120x', 'Garantia Fortlev de 30 anos'] },
  { Icon: Building2, img: solComercial, h: 'Energia Solar Comercial — Reduza custos do seu negócio', tipo: 'Comercial',
    d: 'Mais lucro no fim do mês. Sistemas dimensionados para comércios e empresas, com ROI rápido.',
    b: ['ROI em até 3 anos', 'Estoque próprio', 'Manutenção e monitoramento', 'Imagem sustentável'] },
  { Icon: Tractor, img: solRural, h: 'Energia Solar Rural — Potência para o campo', tipo: 'Rural',
    d: 'Do On-Grid ao Off-Grid. Energia para irrigação, granjas, fazendas e propriedades rurais.',
    b: ['On, Off ou Híbrido', 'Bombeamento solar', 'Crédito rural facilitado', 'Independência total'] },
  { Icon: Factory, img: solIndustrial, h: 'Energia Solar Industrial — Grande escala, grande economia', tipo: 'Industrial',
    d: 'Soluções de alta potência com a maior garantia do mercado. Estoque próprio para projetos grandes.',
    b: ['Alta potência (kWp/MWp)', 'Engenharia dedicada', 'OMM completo', 'Maior garantia do ES'] },
];

const extras = [
  { Icon: Car, h: 'Carport Solar', d: 'Cobertura inteligente para estacionamentos que gera energia limpa enquanto protege seus veículos.' },
  { Icon: Plug, h: 'Carregadores Veiculares (EVSE)', d: 'Recarregue seu carro elétrico com energia 100% solar. Tecnologia para o futuro da mobilidade.' },
  { Icon: Droplets, h: 'Bombeamento Solar', d: 'Sistemas de bombeamento de água para irrigação e abastecimento, sem conta de luz.' },
  { Icon: BatteryCharging, h: 'Armazenamento de Energia', d: 'Baterias de lítio de última geração para garantir energia 24/7 com máxima eficiência.' },
];

const omm = [
  'Monitoramento Ativo','Gestão da Fatura','Gestão de Garantias','Análise de Retorno',
  'Seguros Solares','Lavagem do Sistema','Manutenção Preventiva','Manutenção Corretiva'
];

const Pagina = () => (
  <>
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
    
    {/* Hero */}
    <section className="bg-background py-16 lg:py-24">
      <div className="container max-w-4xl text-center reveal">
        <span className="inline-block bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">Do Projeto ao Pós-Venda</span>
        <h1 className="text-primary font-extrabold text-4xl lg:text-5xl leading-tight mb-5">
          Estamos prontos para levar os benefícios das nossas soluções até você
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          A Tecsol é a única empresa no ES com soluções completas — do residencial ao industrial,
          com estoque próprio e os melhores equipamentos.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/#calculadora" className="bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-md uppercase text-sm btn-press hover:bg-primary-dark">Simular economia</Link>
          <Link href="/contato" className="border-2 border-primary text-primary font-bold px-7 py-3 rounded-md uppercase text-sm btn-press hover:bg-primary hover:text-primary-foreground transition">Falar com especialista</Link>
        </div>
      </div>
    </section>

    {/* Tipos de sistema */}
    <section className="bg-secondary py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <h2 className="text-primary font-bold text-3xl lg:text-4xl">Qual sistema é ideal para você?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sistemas.map((s, i) => {
            const Icon = s.Icon;
            return (
              <article key={i} className="bg-background border border-border rounded-xl p-7 relative card-hover overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
                {s.popular && <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Mais Popular</span>}
                <Icon className="text-primary mb-3" size={36} strokeWidth={1.6}/>
                <h3 className="text-primary font-bold text-xl mb-3">{s.h}</h3>
                <p className="text-foreground text-sm mb-4">{s.d}</p>
                <ul className="space-y-2 mb-4">
                  {s.b.map(b => <li key={b} className="flex items-start gap-2 text-sm text-foreground"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5"/>{b}</li>)}
                </ul>
                <span className="inline-block bg-primary-soft text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">{s.tag}</span>
                <Link href="/contato" className="block text-center bg-primary text-primary-foreground font-bold py-3 rounded-md uppercase text-xs btn-press hover:bg-primary-dark">{s.cta}</Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* Segmentos */}
    <section className="bg-background py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-14 reveal">
          <h2 className="text-primary font-bold text-3xl lg:text-4xl">Soluções para cada necessidade</h2>
        </div>
        <div className="space-y-12">
          {segmentos.map((s, i) => {
            const Icon = s.Icon;
            return (
              <article key={s.tipo} className={`grid lg:grid-cols-2 gap-10 items-center reveal ${i%2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="bg-primary-soft rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                  {s.img ? (
                    <Image src={s.img} alt={s.h} loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    <Icon className="text-primary" size={120} strokeWidth={1.2}/>
                  )}
                </div>
                <div>
                  <h3 className="text-primary font-bold text-2xl lg:text-3xl mb-3">{s.h}</h3>
                  <p className="text-foreground mb-5">{s.d}</p>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                    {s.b.map(b => <li key={b} className="flex items-start gap-2 text-sm text-foreground"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5"/>{b}</li>)}
                  </ul>
                  <Link href="/contato" className="inline-block bg-primary text-primary-foreground font-bold px-6 py-3 rounded-md uppercase text-xs btn-press hover:bg-primary-dark">
                    Solicitar orçamento {s.tipo}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {extras.map(e => {
            const Icon = e.Icon;
            return (
              <article key={e.h} className="bg-background border border-border rounded-xl p-6 card-hover">
                <Icon className="text-primary mb-3" size={32}/>
                <h3 className="text-primary font-bold text-xl mb-2">{e.h}</h3>
                <p className="text-foreground text-sm mb-4">{e.d}</p>
                <Link href="/contato" className="inline-block border border-primary text-primary font-semibold px-5 py-2 rounded-md text-xs uppercase btn-press hover:bg-primary-soft">
                  Quero saber mais
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* OMM */}
    <section className="bg-primary text-primary-foreground py-16 lg:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-bold text-3xl lg:text-4xl mb-4">OMM — Operação, Manutenção e Monitoramento</h2>
          <p className="italic opacity-95 mb-3">
            "Você coloca um sistema que deve durar 30 anos na sua casa.
            Já imaginou ter uma empresa ao seu lado durante todo esse tempo? A Tecsol vai estar."
          </p>
          <p className="opacity-90">A única empresa no ES que cuida da operação, manutenção e monitoramento da sua usina — do início ao fim.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {omm.map(o => (
            <div key={o} className="bg-background text-foreground rounded-xl p-5 text-center card-hover border border-transparent">
              <Activity className="text-primary mx-auto mb-2" size={28}/>
              <p className="text-primary font-bold text-sm">{o}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/contato" className="inline-block bg-background text-primary font-bold px-7 py-3.5 rounded-md uppercase text-sm btn-press hover:bg-primary-soft">
            Conhecer os planos OMM
          </Link>
        </div>
      </div>
    </section>

    {/* Fortlev destaque */}
    <section className="bg-secondary py-16 lg:py-20">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center bg-background rounded-2xl p-10 border-2 border-primary reveal">
          <Image src={fortlevLogo} alt="Fortlev Solar" className="h-20 w-auto mx-auto mb-4 object-contain" />
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full">
            Parceiro e Integrador Oficial
          </span>
        </div>
        <div className="reveal">
          <h3 className="text-primary font-bold text-2xl lg:text-3xl mb-4">Equipamentos com garantia de até 30 anos</h3>
          <p className="text-foreground">
            Como parceira oficial Fortlev Solar, a Tecsol garante acesso direto aos melhores módulos
            fotovoltaicos do mercado, com a <strong className="text-primary">maior garantia do setor</strong>{' '}
            e suporte técnico contínuo durante toda a vida útil do sistema.
          </p>
        </div>
      </div>
    </section>

    <Depoimentos />

    <CtaFinal titulo="Qual solução é certa para você?" texto="Análise gratuita personalizada — retorno em até 5 minutos." primaryLabel="Quero minha análise gratuita" />
  </>
);
export default Pagina;
