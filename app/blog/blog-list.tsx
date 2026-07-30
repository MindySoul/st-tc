'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag } from 'lucide-react';
import { CATEGORIAS, POSTS } from '@/lib/blog-posts';

/** Grade de posts com o filtro por categoria (a unica parte interativa da
 *  pagina — o resto e estatico e fica no page.tsx, que e Server Component). */
export default function BlogList() {
  const [f, setF] = useState('Todos');
  const list = f === 'Todos' ? POSTS : POSTS.filter(p => p.cat === f);

  return (
    <div className="container">
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {CATEGORIAS.map(c => (
          <button key={c} onClick={() => setF(c)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition ${
              f === c ? 'bg-primary text-primary-foreground' : 'border border-primary text-primary hover:bg-primary-soft'
            }`}>{c}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(p => (
          <Link href={`/blog/${p.slug}`} key={p.slug}
            className="bg-background border border-border rounded-xl overflow-hidden card-hover animate-fade-in block">
            <div className="aspect-[16/10] overflow-hidden">
              <Image src={p.img} alt={p.titulo} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
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
  );
}
