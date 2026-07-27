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

// API do CRM Tecsol (repo egn-tecsol). O lead do site vira negócio no funil
// "Comercial - Pré-vendas" da Solarz — ver api/app/routes/leads_site.py.
const API_BASE = import.meta.env.VITE_TECSOL_API_URL ?? 'http://127.0.0.1:5000/api/v1';

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

function readClid(chave: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(chave);
    if (!raw) return null;
    const { v, t } = JSON.parse(raw);
    return v && Date.now() - t <= CLID_TTL_MS ? v : null;
  } catch { return null; }
}

/** Lê gclid/fbclid da URL e guarda. Chamar no boot e é idempotente. */
export function captureClickIds() {
  if (typeof window === 'undefined') return;
  const p = new URLSearchParams(window.location.search);
  saveClid('tecsol_gclid', p.get('gclid'));
  saveClid('tecsol_fbclid', p.get('fbclid'));
}

export function getClickIds() {
  return { gclid: readClid('tecsol_gclid'), fbclid: readClid('tecsol_fbclid') };
}

// Captura já na importação (o form importa este módulo), garantindo o gclid da
// landing mesmo que o usuário navegue antes de enviar.
captureClickIds();

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

export async function sendLead(payload: Record<string, any>) {
  const data = { ...payload, timestamp: new Date().toISOString() };
  console.log('[Lead]', data);
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
  try {
    // O lead vai pra API do egn-tecsol, que cria o negócio na Solarz. Antes ia
    // pro Supabase — o dado ficava lá parado e nunca chegava no CRM.
    const res = await fetch(`${API_BASE}/publico/leads-site`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: payload.nome || payload.name || '',
        telefone: payload.telefone || payload.phone || '',
        email: payload.email || null,
        cidade: payload.cidade || payload.city || null,
        tipo_solucao: payload.tipo_solucao || payload.solucao || payload.tipo || payload.property_type || null,
        valor_conta: payload.valor_conta || null,
        mensagem: payload.mensagem || payload.message || null,
        origem: payload.origem || payload.source || null,
        pagina: payload.pagina || payload.page || null,
        // ids de clique de anúncio, pra virar conversão offline quando fechar
        gclid: getClickIds().gclid,
        fbclid: getClickIds().fbclid,
      }),
    });
    if (!res.ok) throw new Error(`API respondeu ${res.status}`);
  } catch (e) { console.error('[Lead] falha ao enviar', e); }
}

export function maskPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if (d.length <= 11) return `(${d.slice(0,2)}) ${d.slice(2,3)} ${d.slice(3,7)}-${d.slice(7)}`;
  return v;
}
