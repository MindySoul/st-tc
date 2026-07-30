import type { MetadataRoute } from 'next';
import { POSTS } from '@/lib/blog-posts';

const BASE = 'https://tecsolengenharia.com.br';

// Gerado a partir das rotas + da lista de posts. O sitemap.xml anterior era
// mantido a mao e envelhecia sozinho a cada post novo.
const ROTAS = [
  '/',
  '/solucoes',
  '/sobre',
  '/cases',
  '/blog',
  '/contato',
  '/duvidas-frequentes',
  '/politica-de-privacidade',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROTAS.map(r => ({ url: `${BASE}${r}` })),
    ...POSTS.map(p => ({ url: `${BASE}/blog/${p.slug}` })),
  ];
}
