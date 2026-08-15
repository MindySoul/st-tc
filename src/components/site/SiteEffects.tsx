'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureClickIds } from '@/lib/site';
import { useReveal } from '@/hooks/useReveal';

/** Efeitos globais do site, montados uma vez no layout.
 *
 * O reveal precisa reprocessar a cada rota (o layout persiste entre navegacoes
 * no App Router, entao o efeito nao remonta sozinho) — dai o pathname como dep.
 * Ja a captura de gclid/fbclid roda so no primeiro mount: antes ela acontecia
 * duas vezes (no import de lib/site.ts e de novo no main.tsx). */
export default function SiteEffects() {
  const pathname = usePathname();
  useReveal(pathname);

  useEffect(() => { captureClickIds(); }, []);

  return null;
}
