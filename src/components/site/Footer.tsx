import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import { SITE, waLink } from '@/lib/site';
import logo from '@/assets/logo-tecsol.png';
import fortlevLogo from '@/assets/logo-fortlev.png';

const Footer = () => (
  <footer className="bg-background border-t border-border mt-0">
    <div className="container py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <Image src={logo} alt="Tecsol Engenharia" className="h-12 w-auto mb-4" />
        <h4 className="text-foreground font-bold text-[15px] leading-snug mb-3">
          A empresa referência em soluções energéticas no ES
        </h4>
        <p className="text-muted-foreground text-sm mb-4">CNPJ: {SITE.cnpj}</p>
        <div className="flex gap-3">
          <a href={SITE.instagramUrl} aria-label="Instagram" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-dark transition"><Instagram size={18}/></a>
          <a href={SITE.facebookUrl} aria-label="Facebook" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-dark transition"><Facebook size={18}/></a>
          <a href={waLink('Olá, vim pelo site da Tecsol.')} aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-dark transition"><MessageCircle size={18}/></a>
        </div>
      </div>

      <div>
        <h4 className="text-foreground font-bold text-[15px] uppercase mb-4">Navegação</h4>
        <ul className="space-y-2 text-sm text-foreground">
          {[
            ['/', 'Início'],['/solucoes','Soluções'],['/sobre','Por que a Tecsol?'],
            ['/cases','Cases'],['/blog','Blog'],['/contato','Contato'],['/duvidas-frequentes','Dúvidas Frequentes']
          ].map(([to,label]) => (
            <li key={to}><Link href={to} className="hover:text-primary transition">{label}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-foreground font-bold text-[15px] uppercase mb-4">Soluções</h4>
        <ul className="space-y-2 text-sm text-foreground">
          {['Energia Solar Residencial','Comercial','Rural','Industrial','On-Grid','Híbrido','Off-Grid','Carport Solar','Carregadores Veiculares','Bombeamento Solar','Armazenamento','OMM'].map(s => (
            <li key={s}><Link href="/solucoes" className="hover:text-primary transition">{s}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-foreground font-bold text-[15px] uppercase mb-4">Contato</h4>
        <ul className="space-y-3 text-sm text-foreground">
          <li className="flex gap-2"><MapPin size={16} className="text-primary mt-0.5 shrink-0"/><span>{SITE.address}</span></li>
          <li className="flex gap-2"><Phone size={16} className="text-primary mt-0.5 shrink-0"/><span>{SITE.phone}</span></li>
          <li className="flex gap-2"><Instagram size={16} className="text-primary mt-0.5 shrink-0"/><span>{SITE.instagram}</span></li>
          <li className="flex gap-2"><Clock size={16} className="text-primary mt-0.5 shrink-0"/><span>Seg-Sex 8h-18h | Sáb 8h-12h</span></li>
        </ul>
        <div className="mt-5 p-3 bg-secondary rounded-md border border-border">
          <p className="text-foreground text-xs font-semibold">Parceiro e Integrador Oficial</p>
          <Image src={fortlevLogo} alt="Fortlev Solar" className="h-8 w-auto mt-1 object-contain" />
        </div>
      </div>
    </div>

    <div className="container pb-8">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <strong>Atendemos:</strong> Linhares, Colatina, São Mateus, Aracruz, Ibiraçu, João Neiva,
        Governador Lindenberg, Rio Bananal, Sooretama, Pinheiros, Boa Esperança,
        Jaguaré, Pedro Canário, Montanha, Mucurici e toda a região Norte e Noroeste do Espírito Santo.
      </p>
    </div>

    <div className="bg-primary text-primary-foreground">
      <div className="container py-4 flex flex-col sm:flex-row gap-2 justify-between items-center text-xs">
        <span>© 2026 Tecsol Engenharia — CNPJ: {SITE.cnpj}</span>
        <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-90">
          Política de Privacidade
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
