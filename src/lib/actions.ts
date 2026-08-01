'use server';

/** Envio do lead pra API do CRM Tecsol (repo egn-tecsol), que cria o negócio
 *  no funil "Comercial - Pré-vendas" da Solarz — ver api/app/routes/leads_site.py.
 *
 *  Roda no servidor: a URL da API interna não vai mais pro bundle do browser
 *  (por isso `TECSOL_API_URL` sem o prefixo público). E, diferente da versão
 *  anterior, o resultado é devolvido pro formulário — antes a falha era só
 *  logada no console e o usuário via "enviado" de qualquer jeito. */

const API_BASE = process.env.TECSOL_API_URL ?? 'http://127.0.0.1:5000/api/v1';

export type LeadPayload = {
  nome?: string;
  telefone?: string;
  email?: string | null;
  cidade?: string | null;
  tipo_solucao?: string | null;
  valor_conta?: string | null;
  mensagem?: string | null;
  origem?: string | null;
  pagina?: string | null;
  gclid?: string | null;
  fbclid?: string | null;
  fbclidEm?: string | null;
};

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean }> {
  try {
    const res = await fetch(`${API_BASE}/publico/leads-site`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: payload.nome || '',
        telefone: payload.telefone || '',
        email: payload.email || null,
        cidade: payload.cidade || null,
        tipo_solucao: payload.tipo_solucao || null,
        valor_conta: payload.valor_conta || null,
        mensagem: payload.mensagem || null,
        origem: payload.origem || null,
        pagina: payload.pagina || null,
        // ids de clique de anúncio, pra virar conversão offline quando fechar
        gclid: payload.gclid || null,
        fbclid: payload.fbclid || null,
        // instante da captura do clique: o Meta monta o `fbc` com ele
        fbclid_em: payload.fbclidEm || null,
        // qual site postou — os tres caem na mesma rota da API
        site: 'tecsolengenharia.com.br',
      }),
    });
    if (!res.ok) {
      console.error('[Lead] API respondeu', res.status);
      return { ok: false };
    }
    return { ok: true };
  } catch (e) {
    console.error('[Lead] falha ao enviar', e);
    return { ok: false };
  }
}
