import { pageMetadata } from '@/lib/seo';
import { POSTS } from '@/lib/blog-posts';
import BlogList from './blog-list';

export const metadata = pageMetadata({
  title: 'Blog Tecsol | Energia Solar Fotovoltaica no ES',
  description: 'Aprenda tudo sobre energia solar fotovoltaica. Artigos, dicas e guias da Tecsol, referência em energia solar no ES.',
  path: '/blog',
});

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Blog Tecsol',
  url: 'https://tecsolengenharia.com.br/blog',
  image: 'https://tecsolengenharia.com.br/og-image.jpg',
  about: 'Artigos, guias e dicas sobre energia solar fotovoltaica.',
  isPartOf: { '@type': 'WebSite', name: 'Tecsol Engenharia', url: 'https://tecsolengenharia.com.br' },
  hasPart: POSTS.map(p => ({
    '@type': 'BlogPosting',
    headline: p.titulo,
    url: `https://tecsolengenharia.com.br/blog/${p.slug}`,
    image: 'https://tecsolengenharia.com.br/og-image.jpg',
  })),
};

export default function Pagina() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container max-w-3xl text-center reveal">
          <h1 className="font-extrabold text-4xl lg:text-5xl mb-4">Blog Tecsol</h1>
          <p className="opacity-95 text-lg">Artigos, guias e dicas sobre energia solar fotovoltaica da empresa referência no ES.</p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <BlogList />
      </section>
    </>
  );
}
