'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-tecsol.png';

const links = [
  { to: '/', label: 'Início' },
  { to: '/solucoes', label: 'Soluções' },
  { to: '/sobre', label: 'Por que a Tecsol?' },
  { to: '/cases', label: 'Cases' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Equivale ao `end` do NavLink do react-router: "/" so fica ativo exato,
  // as outras rotas tambem em subpaginas (ex: /blog/algum-post).
  const ativo = (to: string) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  return (
    <header className={`sticky top-0 z-40 bg-background transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container grid grid-cols-[auto_1fr_auto] items-center h-16 lg:h-20 gap-4">
        <Link href="/" aria-label="Tecsol Engenharia - Início" className="flex items-center">
          <Image src={logo} alt="Tecsol Engenharia logo" className="h-9 lg:h-11 w-auto" priority />
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-7">
          {links.map(l => (
            <Link key={l.to} href={l.to}
              className={`text-[14px] font-medium transition-colors ${ativo(l.to) ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex justify-end">
          <Link href="/contato"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-[13px] uppercase tracking-wide btn-press hover:bg-primary-dark">
            Solicitar Orçamento
          </Link>
        </div>

        <button className="lg:hidden text-foreground justify-self-end col-start-3" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border animate-fade-in bg-background">
          <div className="container py-4 flex flex-col gap-1">
            {links.map(l => (
              <Link key={l.to} href={l.to}
                className={`py-3 px-2 text-[15px] font-medium border-b border-border ${ativo(l.to) ? 'text-primary' : 'text-foreground'}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/contato" className="mt-3 bg-primary text-primary-foreground text-center py-3 rounded-md font-semibold uppercase text-[13px]">
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
