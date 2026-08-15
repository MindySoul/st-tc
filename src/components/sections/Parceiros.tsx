import Image from 'next/image';
import fortlevLogo from '@/assets/logo-fortlev.png';

const partners = ['SolarZ','Sicoob','Sicredi','Conasol','ABSOLAR','INMETRO','Canadian Solar','Growatt','Fronius'];

const Parceiros = () => (
  <section className="bg-secondary py-16 lg:py-24">
    <div className="container">
      <div className="text-center mb-10 reveal">
        <h2 className="text-primary font-bold text-3xl lg:text-4xl">Certificações e Parceiros Oficiais</h2>
      </div>

      <div className="bg-background border-2 border-primary rounded-xl p-8 max-w-3xl mx-auto mb-12 relative overflow-hidden reveal">
        <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
        <div className="text-center">
          <Image src={fortlevLogo} alt="Fortlev Solar" className="h-16 lg:h-20 w-auto mx-auto mb-4 object-contain" />
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4">
            Parceiro Oficial e Integrador Autorizado
          </span>
          <p className="text-foreground leading-relaxed">
            A Tecsol é parceira oficial e integradora autorizada da <strong className="text-primary">Fortlev Solar</strong>,
            garantindo acesso direto aos melhores equipamentos fotovoltaicos do mercado, com{' '}
            <strong className="text-primary">garantia de até 30 anos</strong>.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {partners.map((p, i) => (
          <div key={p} className="reveal text-muted-foreground hover:text-primary font-bold text-lg lg:text-xl transition-colors" style={{transitionDelay: `${i*60}ms`}}>
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Parceiros;
