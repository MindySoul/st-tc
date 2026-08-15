'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import { CheckCircle2, Loader2, MessageCircle, X } from 'lucide-react';
import { CITIES, getClickIds, maskPhone, mensagemLead, pushLeadEvent, waLink } from '@/lib/site';
import { submitLead } from '@/lib/actions';

/** Todo botão de WhatsApp do site passa por aqui.
 *
 *  Antes cada CTA era um `<a href="wa.me/...">`: o visitante saía da página e o
 *  contato não existia em lugar nenhum — sem lead na Solarz, sem gclid/fbclid,
 *  sem conversão pro Google e pro Meta. Quem não respondia a primeira mensagem
 *  simplesmente sumia.
 *
 *  Agora o clique abre um formulário de três campos, grava o lead com os ids de
 *  anúncio, e só então abre a conversa já escrita. Se o WhatsApp não abrir, o
 *  contato está salvo do mesmo jeito e a Tecsol liga. */

type Abrir = (contexto: { acao: string; origem: string }) => void;

const Ctx = createContext<Abrir | null>(null);

export function useWhatsAppLead() {
  const abrir = useContext(Ctx);
  if (!abrir) throw new Error('useWhatsAppLead precisa do <WhatsAppLeadProvider>');
  return abrir;
}

type Contexto = { acao: string; origem: string };

export function WhatsAppLeadProvider({ children }: { children: React.ReactNode }) {
  const [contexto, setContexto] = useState<Contexto | null>(null);
  const abrir = useCallback<Abrir>((c) => setContexto(c), []);

  return (
    <Ctx.Provider value={abrir}>
      {children}
      {contexto && <Modal contexto={contexto} onFechar={() => setContexto(null)} />}
    </Ctx.Provider>
  );
}

function Modal({ contexto, onFechar }: { contexto: Contexto; onFechar: () => void }) {
  const [form, setForm] = useState({ nome: '', telefone: '', cidade: '' });
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setErro(false);

    const pagina = typeof window !== 'undefined' ? window.location.pathname : '';
    const dados = { ...form, origem: contexto.origem, pagina, ...getClickIds() };
    pushLeadEvent(dados);
    const { ok } = await submitLead(dados);

    if (!ok) {
      setEnviando(false);
      setErro(true);
      return;
    }

    window.location.href = waLink(mensagemLead({ ...form, acao: contexto.acao }));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-wa-lead"
      onClick={onFechar}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/60 p-4 sm:items-center"
    >
      <form
        onSubmit={onSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl bg-background p-6 shadow-orange sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="titulo-wa-lead" className="text-xl font-bold text-foreground">
              Falar com um especialista
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Deixe seu contato e continue a conversa no WhatsApp.
            </p>
          </div>
          <button type="button" onClick={onFechar} aria-label="Fechar" className="text-muted-foreground">
            <X size={20} />
          </button>
        </div>

        <div className="mt-5 space-y-3">
          <input
            required
            autoFocus
            placeholder="Nome completo *"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="w-full rounded-md border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <input
            required
            inputMode="tel"
            placeholder="WhatsApp *"
            value={form.telefone}
            onChange={(e) => setForm({ ...form, telefone: maskPhone(e.target.value) })}
            className="w-full rounded-md border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <select
            required
            value={form.cidade}
            onChange={(e) => setForm({ ...form, cidade: e.target.value })}
            className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="">Cidade *</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {erro && (
          <p role="alert" className="mt-3 text-sm font-medium text-primary">
            Não conseguimos registrar seu contato agora.{' '}
            <a href={waLink(mensagemLead({ ...form, acao: contexto.acao }))} className="underline">
              Falar no WhatsApp mesmo assim
            </a>
          </p>
        )}

        <button
          type="submit"
          disabled={enviando}
          className="btn-press mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark disabled:opacity-70"
        >
          {enviando ? <Loader2 size={18} className="animate-spin" /> : <MessageCircle size={18} />}
          {enviando ? 'Enviando…' : 'Continuar no WhatsApp'}
        </button>

        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <CheckCircle2 size={14} />
          Orçamento gratuito, sem compromisso
        </p>
      </form>
    </div>
  );
}
