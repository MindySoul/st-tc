import type { StaticImageData } from 'next/image';
import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';
import blog4 from '@/assets/blog-4.jpg';
import blog5 from '@/assets/blog-5.jpg';
import blog6 from '@/assets/blog-6.jpg';

export type Post = {
  slug: string;
  cat: string;
  img: StaticImageData;
  titulo: string;
  resumo: string;
  data: string;
};

export const POSTS: Post[] = [
  { slug: 'energia-solar-vale-a-pena', cat: 'Economia', img: blog1, titulo: 'Energia solar vale a pena? Veja o ROI real em 2026', resumo: 'Análise completa do retorno do investimento em energia solar para residências e empresas no ES.', data: '12 abr 2026' },
  { slug: 'on-grid-vs-hibrido-vs-off-grid', cat: 'Tecnologia', img: blog2, titulo: 'On-Grid, Híbrido ou Off-Grid: qual escolher?', resumo: 'Entenda as diferenças entre os três sistemas e descubra qual atende sua necessidade.', data: '02 abr 2026' },
  { slug: 'energia-solar-rural-no-es', cat: 'Rural', img: blog3, titulo: 'Energia solar rural no ES: por onde começar', resumo: 'Guia prático para produtores rurais que querem reduzir custos com energia.', data: '20 mar 2026' },
  { slug: 'industria-energia-solar-payback', cat: 'Comercial', img: blog4, titulo: 'Indústria e energia solar: payback em até 3 anos', resumo: 'Como sistemas industriais reduzem custos operacionais e aumentam competitividade.', data: '08 mar 2026' },
  { slug: 'mitos-sobre-energia-solar', cat: 'Dúvidas', img: blog5, titulo: '7 mitos sobre energia solar que você precisa parar de acreditar', resumo: 'Desmistificamos as principais crenças equivocadas sobre energia fotovoltaica.', data: '24 fev 2026' },
  { slug: 'manutencao-de-placas-solares', cat: 'Tecnologia', img: blog6, titulo: 'Manutenção de placas solares: o que você precisa saber', resumo: 'Frequência, custos e cuidados básicos para manter sua usina sempre eficiente.', data: '10 fev 2026' },
];

export const CATEGORIAS = ['Todos', 'Residencial', 'Comercial', 'Rural', 'Tecnologia', 'Economia', 'Dúvidas'];
