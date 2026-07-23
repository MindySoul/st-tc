import { Link, useParams } from 'react-router-dom';
import { POSTS } from './Blog';
import Seo from '@/components/sections/Seo';
import Calculadora from '@/components/sections/Calculadora';
import { Calendar, Tag, Clock, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { slug } = useParams();
  const post = POSTS.find(p => p.slug === slug) || POSTS[0];
  const related = POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${post.titulo} | Blog Tecsol`}
        description={post.resumo}
        path={`/blog/${post.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.titulo,
          image: [post.img],
          datePublished: '2026-04-01',
          author: { '@type': 'Organization', name: 'Tecsol Engenharia' },
        }}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://tecsolengenharia.com.br/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tecsolengenharia.com.br/blog' },
            { '@type': 'ListItem', position: 3, name: post.titulo },
          ],
        })}</script>
      </Helmet>

      <article className="bg-background py-12 lg:py-16">
        <div className="container max-w-3xl">
          <nav className="text-xs text-muted-foreground mb-6 flex items-center gap-1 flex-wrap">
            <Link to="/" className="hover:text-primary">Início</Link>
            <ChevronRight size={12}/>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight size={12}/>
            <span className="text-primary font-semibold line-clamp-1">{post.titulo}</span>
          </nav>

          <span className="inline-flex items-center gap-1 bg-primary-soft text-primary text-[10px] font-bold uppercase px-2.5 py-1 rounded-full mb-4">
            <Tag size={10}/>{post.cat}
          </span>
          <h1 className="text-primary font-extrabold text-3xl lg:text-5xl leading-tight mb-5">{post.titulo}</h1>
          <div className="flex items-center gap-5 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><Calendar size={14} className="text-primary"/>{post.data}</span>
            <span className="flex items-center gap-1"><Clock size={14} className="text-primary"/>5 min de leitura</span>
          </div>
          <img src={post.img} alt={post.titulo} className="w-full aspect-[16/9] object-cover rounded-xl mb-8"/>

          <div className="prose prose-lg max-w-none text-foreground space-y-5">
            <p className="text-lg">{post.resumo}</p>
            <p>
              A energia solar fotovoltaica deixou de ser tendência e se consolidou como
              <strong className="text-primary"> a melhor decisão financeira </strong>
              para famílias e empresas no Espírito Santo. Com a tarifa de energia em alta,
              o retorno do investimento ficou ainda mais atrativo.
            </p>

            <h2 className="text-primary font-bold text-2xl lg:text-3xl mt-8">Por que agora é o melhor momento</h2>
            <p>
              Em 2026, os equipamentos atingiram seu melhor custo-benefício histórico. Com
              <strong className="text-primary"> financiamento em até 120x</strong> e equipamentos
              Fortlev Solar com <strong className="text-primary">garantia de 30 anos</strong>,
              o sistema se paga sozinho desde o primeiro mês.
            </p>

            <div className="bg-primary text-primary-foreground rounded-xl p-7 my-8 text-center not-prose">
              <h3 className="font-bold text-xl mb-3">Quer saber quanto VOCÊ economizaria?</h3>
              <Link to="/#calculadora" className="inline-block bg-background text-primary font-bold px-6 py-3 rounded-md uppercase text-sm btn-press hover:bg-primary-soft">
                Simular minha economia →
              </Link>
            </div>

            <h2 className="text-primary font-bold text-2xl lg:text-3xl">Como começar com a Tecsol</h2>
            <p>
              Nossa equipe faz uma análise gratuita do seu consumo, dimensiona o sistema ideal e
              apresenta as melhores opções de pagamento. Tudo em até 5 minutos pelo WhatsApp.
            </p>
            <h3 className="text-primary font-bold text-xl">O que você recebe</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Projeto técnico completo personalizado</li>
              <li>Equipamentos Fortlev Solar (até 30 anos de garantia)</li>
              <li>Instalação por equipe própria, sem terceirização</li>
              <li>Monitoramento e pós-venda exclusivos OMM</li>
            </ul>
          </div>
        </div>
      </article>

      <Calculadora />

      <section className="bg-secondary py-16 lg:py-20">
        <div className="container">
          <h2 className="text-primary font-bold text-2xl lg:text-3xl mb-8 text-center">Artigos relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(p => (
              <Link to={`/blog/${p.slug}`} key={p.slug} className="bg-background border border-border rounded-xl overflow-hidden card-hover">
                <img src={p.img} alt={p.titulo} loading="lazy" className="w-full aspect-[16/10] object-cover"/>
                <div className="p-5">
                  <span className="text-primary text-[10px] font-bold uppercase">{p.cat}</span>
                  <h3 className="text-foreground font-bold mt-2 line-clamp-2">{p.titulo}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogPost;
