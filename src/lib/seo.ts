import type { Metadata } from 'next';

const BASE = 'https://tecsolengenharia.com.br';

/** Metadata por rota, no mesmo formato que o antigo <Seo> gerava via Helmet:
 *  title/description + canonical + OG + Twitter. O resto (verification, imagem
 *  OG padrao, keywords) vem do layout raiz e e herdado automaticamente. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${BASE}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: 'Tecsol Engenharia' },
    twitter: { title, description },
  };
}

/** JSON-LD inline num Server Component (substitui o <script> dentro do Helmet). */
export function jsonLdProps(data: object) {
  return { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(data) } };
}
