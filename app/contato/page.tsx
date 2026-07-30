import { pageMetadata } from '@/lib/seo';
import Conteudo from './conteudo';

export const metadata = pageMetadata({
  title: 'Orçamento Energia Solar Gratuito | Tecsol Linhares',
  description: 'Orçamento gratuito de energia solar em Linhares ES. Atendimento em até 5 minutos. Parceiro Fortlev Solar. Simule agora.',
  path: '/contato',
});

export default function Pagina() {
  return <Conteudo />;
}
