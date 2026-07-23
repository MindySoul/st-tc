import { Link } from 'react-router-dom';
import Seo from '@/components/sections/Seo';
import { Calendar, Tag } from 'lucide-react';
import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';
import blog4 from '@/assets/blog-4.jpg';
import blog5 from '@/assets/blog-5.jpg';
import blog6 from '@/assets/blog-6.jpg';
import { useState } from 'react';

export const POSTS = [
  { slug: 'energia-solar-vale-a-pena', cat: 'Economia', img: blog1.url, titulo: 'Energia solar vale a pena? Veja o ROI real em 2026', resumo: 'Análise completa do retorno do investimento em energia solar para residências e empresas no ES.', data: '12 abr 2026' },
  { slug: 'on-grid-vs-hibrido-vs-off-grid', cat: 'Tecnologia', img: blog2.url, titulo: 'On-Grid, Híbrido ou Off-Grid: qual escolher?', resumo: 'Entenda as diferenças entre os três sistemas e descubra qual atende sua necessidade.', data: '02 abr 2026' },
  { slug: 'energia-solar-rural-no-es', cat: 'Rural', img: blog3.url, titulo: 'Energia solar rural no ES: por onde começar', resumo: 'Guia prático para produtores rurais que querem reduzir custos com energia.', data: '20 mar 2026' },
  { slug: 'industria-energia-solar-payback', cat: 'Comercial', img: blog4.url, titulo: 'Indústria e energia solar: payback em até 3 anos', resumo: 'Como sistemas industriais reduzem custos operacionais e aumentam competitividade.', data: '08 mar 2026' },
  { slug: 'mitos-sobre-energia-solar', cat: 'Dúvidas', img: blog5.url, titulo: '7 mitos sobre energia solar que você precisa parar de acreditar', resumo: 'Desmistificamos as principais crenças equivocadas sobre energia fotovoltaica.', data: '24 fev 2026' },
  { slug: 'manutencao-de-placas-solares', cat: 'Tecnologia', img: blog6.url, titulo: 'Manutenção de placas solares: o que você precisa saber', resumo: 'Frequência, custos e cuidados básicos para manter sua usina sempre eficiente.', data: '10 fev 2026' },
];

const cats = ['Todos','Residencial','Comercial','Rural','Tecnologia','Economia','Dúvidas'];

const Blog = () => {
  const [f, setF] = useState('Todos');
  const list = f === 'Todos' ? POSTS : POSTS.filter(p => p.cat === f);
  return (
    <>
      <Seo
        title="Blog Tecsol | Energia Solar Fotovoltaica no ES"
        description="Aprenda tudo sobre energia solar fotovoltaica. Artigos, dicas e guias da Tecsol, referência em energia solar no ES."
        path="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Blog Tecsol",
          url: "https://tecsolengenharia.com.br/blog",
          image: "https://tecsolengenharia.com.br/og-image.jpg",
          about: "Artigos, guias e dicas sobre energia solar fotovoltaica.",
          isPartOf: { "@type": "WebSite", name: "Tecsol Engenharia", url: "https://tecsolengenharia.com.br" },
          hasPart: POSTS.map(p => ({
            "@type": "BlogPosting",
            headline: p.titulo,
            url: `https://tecsolengenharia.com.br/blog/${p.slug}`,
            image: "https://tecsolengenharia.com.br/og-image.jpg"
          }))
        }}
      />
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container max-w-3xl text-center reveal">
          <h1 className="font-extrabold text-4xl lg:text-5xl mb-4">Blog Tecsol</h1>
          <p className="opacity-95 text-lg">Artigos, guias e dicas sobre energia solar fotovoltaica da empresa referência no ES.</p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {cats.map(c => (
              <button key={c} onClick={() => setF(c)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition ${
                  f === c ? 'bg-primary text-primary-foreground' : 'border border-primary text-primary hover:bg-primary-soft'
                }`}>{c}</button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map(p => (
              <Link to={`/blog/${p.slug}`} key={p.slug}
                className="bg-background border border-border rounded-xl overflow-hidden card-hover animate-fade-in block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.titulo} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center gap-1 bg-primary-soft text-primary text-[10px] font-bold uppercase px-2.5 py-1 rounded-full mb-3">
                    <Tag size={10}/>{p.cat}
                  </span>
                  <h3 className="text-foreground font-bold text-base mb-2 leading-snug">{p.titulo}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{p.resumo}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-xs font-semibold flex items-center gap-1"><Calendar size={12}/>{p.data}</span>
                    <span className="text-primary text-xs font-bold">Ler artigo →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
