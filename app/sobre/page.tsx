import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';
import Depoimentos from '@/components/sections/Depoimentos';
import LeadForm from '@/components/sections/LeadForm';
import CtaFinal from '@/components/sections/CtaFinal';
import { waLink } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Por que a Tecsol? | 11 Anos de Energia Solar no ES',
  description: 'A única empresa completa em energia solar no ES. Estoque próprio, equipe completa, melhor pós-venda. 11 anos, +4.000 projetos.',
  path: '/sobre',
});

const diferenciais = [
  { n: '01', h: 'Soluções completas que nenhuma outra oferece',
    d: 'Do projeto ao pós-venda. Do residencial ao industrial. Um ecossistema completo de energia solar — algo que nenhuma outra empresa do ES entrega.' },
  { n: '02', h: 'Estoque próprio — entrega imediata',
    d: 'A Tecsol possui estoque próprio de equipamentos fotovoltaicos, garantindo entrega imediata, melhor preço e segurança no seu projeto. Você não depende de prazos de fornecedores — nós temos o que você precisa.' },
  { n: '03', h: 'Time completo — nada terceirizado',
    d: 'Engenheiros, projetistas, instaladores e equipe de pós-venda — tudo dentro de casa. Mais qualidade, mais agilidade e mais responsabilidade em cada etapa.' },
  { n: '04', h: 'A única com monitoramento próprio das usinas',
    d: 'Desenvolvemos um sistema interno de monitoramento que acompanha a performance da sua usina 24h por dia. Identificamos qualquer queda antes mesmo de você perceber.' },
  { n: '05', h: 'Parceiro Fortlev Solar — garantia de até 30 anos',
    d: 'Como integrador oficial Fortlev, oferecemos a maior garantia do mercado. Tranquilidade real, do primeiro ao último kilowatt gerado.' },
  { n: '06', h: 'Métodos de pagamento facilitados — únicos no mercado',
    d: 'Financiamento BV em até 120x com 3 meses para começar a pagar, consórcio Conasol, cartão, à vista com desconto especial e combinações híbridas. Você escolhe.' },
];

const pagamentos = [
  { h: 'Financiamento BV', d: '3 meses para começar a pagar.', dest: 'Até 120x', cta: 'Simular financiamento', msg: 'Olá! Tenho interesse no financiamento BV da Tecsol.' },
  { h: 'Consórcio Conasol', d: 'Cotas de R$20.000, contemplação em 2 meses por lance.', dest: 'Até 36x sem juros', cta: 'Conhecer consórcio', msg: 'Olá! Tenho interesse no consórcio Conasol.' },
  { h: 'Cartão de Crédito', d: 'À vista ou parcelado da forma que for mais conveniente.', cta: 'Solicitar', msg: 'Olá! Quero pagar com cartão de crédito.' },
  { h: 'Pagamento Híbrido', d: 'Combine formas de pagamento para montar a solução ideal.', cta: 'Montar meu plano', msg: 'Olá! Quero montar um pagamento híbrido.' },
  { h: 'À Vista', d: 'Melhor condição e maior desconto nos equipamentos.', dest: 'Maior desconto', cta: 'Solicitar desconto', msg: 'Olá! Quero pagar à vista com desconto.' },
];

const Pagina = () => (
  <>
    

    <section className="bg-background py-16 lg:py-24">
      <div className="container max-w-4xl text-center reveal">
        <span className="inline-block bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
          Fundada em Linhares, ES — 2015
        </span>
        <h1 className="text-foreground font-extrabold text-4xl lg:text-5xl leading-tight mb-5">
          A empresa referência em soluções energéticas no ES
        </h1>
        <p className="text-muted-foreground text-lg">
          11 anos levando liberdade, economia e tecnologia para famílias e empresas capixabas — diferente de toda a concorrência.
        </p>
      </div>
    </section>

    <section className="bg-secondary py-16 lg:py-20">
      <div className="container max-w-3xl">
<h2 className="text-foreground font-bold text-3xl mb-6 reveal">O que é a Tecsol</h2>
        <div className="space-y-4 text-foreground reveal">
          <p>
            A Tecsol Engenharia e Soluções Energéticas LTDA — conhecida como Tecsol — é uma empresa capixaba especializada em soluções fotovoltaicas. Idealizada em 2015 e fundada em 2016 por William Couto Pereira, nasceu com uma missão clara e foi constituída sobre valores: transformar a vida de famílias e empresas através do sol, sempre com qualidade e comprometimento.
          </p>
          <p>
            Com sede em Linhares — a maior cidade do Espírito Santo — somos pioneiros na região norte do estado e nos tornamos um ecossistema completo em energia solar. Não vendemos apenas placas: entregamos uma solução do início ao fim, com a segurança de quem faz o certo há mais de uma década.
          </p>
          <p>
            No que acreditamos: CNPJs fortes são feitos de CPFs fortes. Por isso cuidamos das pessoas antes de cuidarmos dos números.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-background py-16 lg:py-20">
      <div className="container grid md:grid-cols-3 gap-6">
        <article className="bg-background border border-border rounded-xl p-7 relative overflow-hidden card-hover reveal">
          <div className="absolute top-0 inset-x-0 h-1 bg-primary"/>
          <Target className="text-primary mb-3" size={32}/>
          <h3 className="text-foreground font-bold text-xl mb-2">Missão</h3>
          <p className="text-foreground text-sm">
            Transformar a vida de famílias e empresas capixabas através de soluções inteligentes fotovoltaicas, com muita qualidade e confiança, proporcionando assim mais liberdade e economia.
          </p>
        </article>

        <article className="bg-background border border-border rounded-xl p-7 relative overflow-hidden card-hover reveal">
          <div className="absolute top-0 inset-x-0 h-1 bg-primary"/>
          <Eye className="text-primary mb-3" size={32}/>
          <h3 className="text-foreground font-bold text-xl mb-2">Visão</h3>
          <p className="text-foreground text-sm">
            Ser reconhecida como a empresa referência em energia solar pelos capixabas, seguindo nossos valores primordiais.
          </p>
        </article>

        <article className="bg-background border border-border rounded-xl p-7 relative overflow-hidden card-hover reveal">
          <div className="absolute top-0 inset-x-0 h-1 bg-primary"/>
          <Heart className="text-primary mb-3" size={32}/>
          <h3 className="text-foreground font-bold text-xl mb-2">Valores</h3>
          <ul className="space-y-2">
            {['Verdade', 'Comprometimento', 'Fé e Propósito', 'Sustentabilidade', 'Inovação', 'Acessibilidade'].map((valor) => (
              <li key={valor} className="flex items-center gap-2 text-foreground text-sm">
                <CheckCircle2 className="text-primary shrink-0" size={16} />
                {valor}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>

    <section className="bg-background border-y border-border py-16 lg:py-20">
      <div className="container max-w-4xl text-center">
        <h2 className="text-foreground font-extrabold text-3xl lg:text-4xl mb-5 leading-tight">
          A única empresa completa em soluções fotovoltaicas no ES
        </h2>
        <p className="text-muted-foreground text-lg">
          Do projeto ao pós-venda. Do residencial ao industrial.
          Com estoque próprio e a <strong className="text-primary">maior garantia do mercado — 30 anos</strong>.
        </p>
      </div>
    </section>

    <section className="bg-background py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <h2 className="text-foreground font-bold text-3xl lg:text-4xl">Por que a Tecsol?</h2>
        </div>
        <div className="space-y-10 max-w-5xl mx-auto">
          {diferenciais.map((d, i) => (
            <article key={d.n} className={`grid md:grid-cols-12 gap-6 items-start reveal`}>
              <div className="md:col-span-2 text-primary font-extrabold text-5xl lg:text-6xl">{d.n}</div>
              <div className="md:col-span-10">
                <h3 className="text-foreground font-bold text-xl lg:text-2xl mb-2">{d.h}</h3>
                <p className="text-foreground">{d.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="pagamentos" className="bg-secondary py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <h2 className="text-foreground font-bold text-3xl lg:text-4xl">Como você quer investir na sua liberdade?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {pagamentos.map((p, i) => (
            <article key={i} className="bg-background border border-border rounded-xl p-6 relative overflow-hidden card-hover reveal">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary"/>
              <h3 className="text-foreground font-bold text-lg mb-2">{p.h}</h3>
              {p.dest && <p className="text-primary font-extrabold text-xl mb-2">{p.dest}</p>}
              <p className="text-foreground text-sm mb-4">{p.d}</p>
              <a href={waLink(p.msg)} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-md text-xs uppercase btn-press hover:bg-primary-dark">
                {p.cta}
              </a>
            </article>
          ))}
        </div>
        <div className="text-center mt-10 reveal">
          <p className="text-muted-foreground mb-3">Não sabe qual escolher?</p>
          <a href={waLink('Olá! Gostaria de entender as opções de pagamento da Tecsol.')} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-md uppercase text-sm btn-press hover:bg-primary-dark">
            Falar com especialista no WhatsApp →
          </a>
        </div>
      </div>
    </section>

    <Depoimentos bg="bg-background" />

    <CtaFinal
      titulo="Venha fazer parte das +4.000 famílias que escolheram a Tecsol"
      texto="Análise gratuita, sem compromisso, com retorno em até 5 minutos."
      primaryLabel="Quero meu orçamento"
    />
  </>
);
export default Pagina;
