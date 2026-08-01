export const SITE = {
  name: 'Tecsol Engenharia',
  cnpj: '24.503.711/0001-47',
  phone: '(27) 99971-7766',
  whatsapp: '5527999717766',
  address: 'Av. Cerejeira, N° 280, Complexo Prima Cittá Business, Torre 01, Sala 618 - Movelar, Linhares - ES, 29906-014',
  instagram: '@tecsolengenharia',
  instagramUrl: 'https://instagram.com/tecsolengenharia',
  facebookUrl: 'https://facebook.com/tecsolengenharia',
  email: 'contato@tecsolengenharia.com.br',
};

// --- Rastreio de anúncio (Google/Meta) --------------------------------------
// Quem chega por anúncio cai aqui com ?gclid=... (Google) ou ?fbclid=... (Meta).
// Guardamos no localStorage porque o visitante costuma navegar/voltar antes de
// preencher o form; quando o lead vira venda no CRM, esse id volta pro Google/
// Meta como conversão offline (ver api/app/google_ads.py). Janela de 90 dias,
// que é o prazo de atribuição do Google.
const CLID_TTL_MS = 90 * 24 * 60 * 60 * 1000;

function saveClid(chave: string, valor: string | null) {
  if (typeof window === 'undefined' || !valor) return;
  try { localStorage.setItem(chave, JSON.stringify({ v: valor, t: Date.now() })); } catch { /* noop */ }
}

/** Devolve o id e QUANDO ele foi capturado — o Meta monta o `fbc` com esse
 *  instante (fb.1.<ms>.<fbclid>), entao descartar o `t` piora a correspondencia. */
function readClid(chave: string): { v: string; t: number } | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(chave);
    if (!raw) return null;
    const { v, t } = JSON.parse(raw);
    return v && Date.now() - t <= CLID_TTL_MS ? { v, t } : null;
  } catch { return null; }
}

/** Lê gclid/fbclid da URL e guarda. Idempotente.
 *  Chamado uma vez, no SiteEffects montado pelo layout. */
export function captureClickIds() {
  if (typeof window === 'undefined') return;
  const p = new URLSearchParams(window.location.search);
  saveClid('tecsol_gclid', p.get('gclid'));
  saveClid('tecsol_fbclid', p.get('fbclid'));
}

export function getClickIds() {
  const g = readClid('tecsol_gclid');
  const f = readClid('tecsol_fbclid');
  return {
    gclid: g?.v ?? null,
    fbclid: f?.v ?? null,
    fbclidEm: f ? new Date(f.t).toISOString() : null,
  };
}

export const CITIES = [
  'Linhares','Colatina','São Mateus','Aracruz','Ibiraçu','João Neiva',
  'Governador Lindenberg','Rio Bananal','Sooretama','Pinheiros','Boa Esperança',
  'Jaguaré','Pedro Canário','Montanha','Mucurici','Outra cidade do ES'
];

export const SOLUCOES = ['Residencial','Comercial','Rural','Industrial'];

export const VALORES_CONTA = [
  'Até R$300','R$300 - R$500','R$500 - R$800','R$800 - R$1.500','Acima de R$1.500'
];

export function waLink(msg: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/** Dispara o evento de lead no GTM. Só no browser — o dataLayer é do cliente.
 *  O envio pra API é separado, na Server Action `submitLead` (lib/actions.ts). */
export function pushLeadEvent(payload: Record<string, any>) {
  try {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'lead_submit',
      lead_origem: payload.origem || null,
      lead_pagina: payload.pagina || null,
      lead_cidade: payload.cidade || null,
      lead_tipo: payload.tipo_solucao || null,
    });
  } catch (e) { /* noop */ }
}

export function maskPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if (d.length <= 11) return `(${d.slice(0,2)}) ${d.slice(2,3)} ${d.slice(3,7)}-${d.slice(7)}`;
  return v;
}
