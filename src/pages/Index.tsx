import Seo from '@/components/sections/Seo';
import HeroSlider from '@/components/sections/HeroSlider';
import Calculadora from '@/components/sections/Calculadora';
import Resultados from '@/components/sections/Resultados';
import Depoimentos from '@/components/sections/Depoimentos';
import Parceiros from '@/components/sections/Parceiros';
import LeadForm from '@/components/sections/LeadForm';
import CtaFinal from '@/components/sections/CtaFinal';

const Index = () => (
  <>
    <Seo
      title="Energia Solar em Linhares ES | Tecsol Engenharia"
      description="Referência em soluções energéticas no ES desde 2015. +4.000 famílias, +R$60M economizados. Parceiro Fortlev Solar. Simule sua economia agora."
      path="/"
    />
    <h1 className="sr-only">Energia Solar Fotovoltaica em Linhares e Região</h1>
    <HeroSlider />
    <Calculadora />
    <Resultados />
    <Depoimentos />
    <Parceiros />

    <section className="bg-background py-16 lg:py-24">
      <div className="container max-w-2xl">
        <div className="text-center mb-8 reveal">
          <h2 className="text-primary font-bold text-3xl lg:text-4xl mb-3">Nossa equipe entra em contato em até 5 minutos</h2>
          <p className="text-muted-foreground">Prefere falar direto com um especialista? Preencha abaixo.</p>
        </div>
        <LeadForm origem="formulario_inicio" pagina="/" />
      </div>
    </section>

    <CtaFinal
      titulo="Pronto para eliminar sua conta de luz de vez?"
      texto="Mais de 1.500 famílias e empresas no ES já estão vivendo o extraordinário. Você pode ser o próximo."
      primaryTo="/#calculadora"
      primaryLabel="Simular minha economia"
    />
  </>
);
export default Index;
