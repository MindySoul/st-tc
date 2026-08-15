import { pageMetadata } from '@/lib/seo';
import Conteudo from './conteudo';

export const metadata = pageMetadata({
  title: 'Cases e Projetos de Energia Solar | Tecsol ES',
  description: 'Mais de 4.000 projetos de energia solar realizados no ES. Veja cases reais residenciais, comerciais, rurais e industriais da Tecsol.',
  path: '/cases',
});

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Cases Tecsol — Projetos de Energia Solar',
  url: 'https://tecsolengenharia.com.br/cases',
  image: 'https://tecsolengenharia.com.br/og-image.jpg',
  about: 'Projetos residenciais, comerciais, industriais e rurais de energia solar fotovoltaica no Espírito Santo.',
  isPartOf: { '@type': 'WebSite', name: 'Tecsol Engenharia', url: 'https://tecsolengenharia.com.br' },
};

export default function Pagina() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Conteudo />
    </>
  );
}
