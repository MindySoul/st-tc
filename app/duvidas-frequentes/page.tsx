import { pageMetadata } from '@/lib/seo';
import Conteudo from './conteudo';
import { faqs } from '@/lib/faqs';

export const metadata = pageMetadata({
  title: 'Dúvidas Frequentes sobre Energia Solar | Tecsol ES',
  description: 'Mitos, verdades e respostas para todas suas dúvidas sobre energia solar fotovoltaica no ES. Tira dúvidas com a Tecsol Engenharia.',
  path: '/duvidas-frequentes',
});

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.p,
    acceptedAnswer: { '@type': 'Answer', text: f.r },
  })),
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
