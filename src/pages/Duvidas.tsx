import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Seo from '@/components/sections/Seo';
import Calculadora from '@/components/sections/Calculadora';
import { Helmet } from 'react-helmet-async';
import { waLink } from '@/lib/site';

const mitos = [
  { tipo: 'MITO', t: 'Energia solar não funciona em dia nublado', d: 'Funciona sim — apenas com produção reduzida. O cálculo considera a média anual de irradiação.' },
  { tipo: 'VERDADE', t: 'O sistema dura mais de 25 anos', d: 'Painéis Fortlev têm garantia de até 30 anos. A vida útil real ultrapassa esse prazo com manutenção adequada.' },
  { tipo: 'MITO', t: 'Energia solar é só para quem tem muito dinheiro', d: 'Com financiamento em até 120x e 3 meses de carência, qualquer pessoa pode começar a economizar imediatamente.' },
  { tipo: 'VERDADE', t: 'O sistema valoriza o imóvel', d: 'Imóveis com energia solar são vendidos mais rápido e por valores até 8% maiores que a média do mercado.' },
  { tipo: 'MITO', t: 'A manutenção é cara e constante', d: 'Manutenção anual simples (lavagem e inspeção). Com OMM da Tecsol, custos previsíveis e zero dor de cabeça.' },
  { tipo: 'VERDADE', t: 'Você gera créditos de energia', d: 'O excedente vira crédito que pode ser usado em até 60 meses, em qualquer unidade no mesmo CPF/CNPJ.' },
];

const faqs = [
  { p: 'O que é energia solar fotovoltaica?', r: 'É a conversão direta da luz do sol em eletricidade através de painéis solares. Limpa, renovável e cada vez mais acessível.' },
  { p: 'Quanto tempo demora a instalação?', r: 'Em média 2 a 5 dias úteis para residências, dependendo da complexidade. Comerciais e industriais variam conforme o porte.' },
  { p: 'Posso instalar em qualquer telhado?', r: 'A maioria dos telhados é compatível. Nossa equipe faz uma análise técnica gratuita para confirmar a melhor configuração.' },
  { p: 'O sistema funciona quando falta luz?', r: 'O sistema On-Grid desliga por segurança. O Híbrido com baterias continua funcionando normalmente. O Off-Grid é independente.' },
  { p: 'Quanto vou economizar de verdade?', r: 'Em média 90 a 95% da conta de luz. Use nossa calculadora para ver sua estimativa personalizada.' },
  { p: 'Quem cuida da homologação na concessionária?', r: 'A Tecsol faz tudo: projeto, ART, protocolo na concessionária, troca de medidor e ativação do sistema.' },
  { p: 'Existe risco de incêndio?', r: 'Quando instalado por equipe qualificada e com equipamentos certificados, o risco é praticamente nulo. Seguimos todas as normas técnicas.' },
  { p: 'O sistema gera energia à noite?', r: 'Não — mas você usa os créditos acumulados durante o dia ou as baterias (em sistemas Híbrido/Off-Grid).' },
  { p: 'Vocês oferecem garantia?', r: 'Painéis Fortlev: até 30 anos. Inversor: até 12 anos. Estrutura: 10 anos. Mão de obra: 1 ano.' },
  { p: 'Atendem fora de Linhares?', r: 'Sim. Atendemos toda a região Norte e Noroeste do ES. Veja a lista completa no rodapé.' },
  { p: 'Posso pagar com cartão de crédito?', r: 'Sim. Aceitamos cartão à vista ou parcelado, além de financiamento BV, consórcio Conasol e pagamento híbrido.' },
  { p: 'Como funciona o consórcio?', r: 'Cotas Conasol de R$20.000, em até 36x sem juros, com contemplação em 2 meses por lance.' },
  { p: 'O que é o serviço OMM?', r: 'Operação, Manutenção e Monitoramento — somos a única empresa do ES com monitoramento próprio das usinas, 24h por dia.' },
  { p: 'Posso aumentar o sistema depois?', r: 'Sim. Os sistemas são modulares e expansíveis conforme sua necessidade futura.' },
  { p: 'Como começar agora?', r: 'Entre em contato pelo WhatsApp (27) 99971-7766. Análise e orçamento são 100% gratuitos.' },
];

const Duvidas = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Seo
        title="Dúvidas Frequentes sobre Energia Solar | Tecsol ES"
        description="Mitos, verdades e respostas para todas suas dúvidas sobre energia solar fotovoltaica no ES. Tira dúvidas com a Tecsol Engenharia."
        path="/duvidas-frequentes"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: faqs.map(f => ({
            '@type': 'Question', name: f.p,
            acceptedAnswer: { '@type': 'Answer', text: f.r },
          })),
        })}</script>
      </Helmet>

      <section className="bg-background py-16 lg:py-20">
        <div className="container max-w-3xl text-center reveal">
          <h1 className="text-primary font-extrabold text-4xl lg:text-5xl leading-tight mb-4">Mitos, Verdades e Dúvidas sobre Energia Solar</h1>
          <p className="text-muted-foreground text-lg">Tudo que você precisa saber antes de investir em energia solar.</p>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="container">
          <h2 className="text-primary font-bold text-3xl lg:text-4xl text-center mb-10 reveal">Verdade ou Fake?</h2>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {mitos.map((m, i) => (
              <article key={i} className="bg-background border border-border rounded-xl p-6 card-hover reveal">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${
                  m.tipo === 'VERDADE' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>{m.tipo}</span>
                <h3 className="font-bold text-foreground mb-2">{m.t}</h3>
                <p className="text-muted-foreground text-sm">{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-primary font-bold text-3xl lg:text-4xl text-center mb-10 reveal">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {faqs.map((f, k) => (
              <div key={k} className="bg-background border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpen(open === k ? null : k)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-primary-soft transition">
                  <span className="font-semibold text-foreground">{f.p}</span>
                  {open === k ? <Minus size={18} className="text-primary shrink-0"/> : <Plus size={18} className="text-primary shrink-0"/>}
                </button>
                {open === k && (
                  <div className="px-5 pb-5 text-foreground text-sm animate-fade-in">
                    <p>{f.r}</p>
                    <a href={waLink(`Olá, tenho uma dúvida sobre: ${f.p}`)} target="_blank" rel="noopener noreferrer"
                      className="inline-block mt-3 text-primary font-bold hover:underline text-sm">
                      Tirar essa dúvida no WhatsApp →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Calculadora />
    </>
  );
};
export default Duvidas;
