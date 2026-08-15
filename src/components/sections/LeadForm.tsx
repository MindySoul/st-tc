'use client';

import { useState } from 'react';
import { CITIES, SOLUCOES, VALORES_CONTA, getClickIds, maskPhone, mensagemLead, pushLeadEvent, waLink } from '@/lib/site';
import { submitLead } from '@/lib/actions';
import { CheckCircle2 } from 'lucide-react';

type Props = { origem: string; pagina: string; compact?: boolean; tipoPadrao?: string };

const LeadForm = ({ origem, pagina, compact, tipoPadrao }: Props) => {
  const [form, setForm] = useState({
    nome: '', telefone: '', cidade: '', tipo_solucao: tipoPadrao || '', valor_conta: '', mensagem: '', email: ''
  });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro(false);
    const dados = { ...form, origem, pagina, ...getClickIds() };
    pushLeadEvent(dados);
    const { ok } = await submitLead(dados);
    setLoading(false);
    // Só mostra a tela de sucesso se o lead realmente chegou na API.
    if (ok) setDone(true);
    else setErro(true);
  };

  if (done) {
    return (
      <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center animate-fade-in">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-2xl font-bold mb-3">Parabéns pela iniciativa!</h3>
        <p className="mb-5 leading-relaxed">
          Nossa equipe especialista já recebeu seu contato e entrará em contato em até 5 minutos no WhatsApp.<br/>
          Seja bem-vindo à família Tecsol!
        </p>
        <a href={waLink(mensagemLead({ ...form, acao: 'acabei de preencher o formulário no site' }))}
          target="_blank" rel="noopener noreferrer"
          className="inline-block bg-background text-primary font-semibold px-6 py-3 rounded-md uppercase text-sm btn-press hover:bg-primary-soft">
          Falar agora no WhatsApp →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`bg-background ${compact ? '' : 'border-2 border-primary p-6 lg:p-8 rounded-xl shadow-orange'} space-y-4`}>
      <input required placeholder="Nome completo *" value={form.nome}
        onChange={e => setForm({...form, nome: e.target.value})}
        className="w-full px-4 py-3 border border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
      <input required placeholder="WhatsApp *" value={form.telefone} inputMode="tel"
        onChange={e => setForm({...form, telefone: maskPhone(e.target.value)})}
        className="w-full px-4 py-3 border border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
      <select required value={form.cidade} onChange={e => setForm({...form, cidade: e.target.value})}
        className="w-full px-4 py-3 border border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm bg-background">
        <option value="">Cidade *</option>
        {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select required value={form.tipo_solucao} onChange={e => setForm({...form, tipo_solucao: e.target.value})}
        className="w-full px-4 py-3 border border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm bg-background">
        <option value="">Tipo de solução *</option>
        {SOLUCOES.map(s => <option key={s} value={s}>{s}</option>)}
        <option value="Não sei ainda">Não sei ainda</option>
      </select>
      <select required value={form.valor_conta} onChange={e => setForm({...form, valor_conta: e.target.value})}
        className="w-full px-4 py-3 border border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm bg-background">
        <option value="">Valor médio da conta *</option>
        {VALORES_CONTA.map(v => <option key={v} value={v}>{v}</option>)}
      </select>
      {!compact && (
        <textarea placeholder="Mensagem (opcional) — descreva brevemente o que precisa..." value={form.mensagem}
          onChange={e => setForm({...form, mensagem: e.target.value})} rows={3}
          className="w-full px-4 py-3 border border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
      )}
      <button type="submit" disabled={loading}
        className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-bold uppercase tracking-wide text-sm btn-press hover:bg-primary-dark disabled:opacity-70 flex items-center justify-center gap-2">
        {loading ? (
          <span className="inline-block h-5 w-5 border-[3px] border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
        ) : (
          <>Quero que a equipe entre em contato →</>
        )}
      </button>
      {erro && (
        <p className="text-sm text-destructive" role="alert">
          Não conseguimos enviar seus dados agora. Tente de novo ou{' '}
          <a href={waLink('Olá, tentei enviar o formulário no site da Tecsol e deu erro.')}
            target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            fale direto no WhatsApp
          </a>.
        </p>
      )}
      <p className="flex items-start gap-2 text-xs text-muted-foreground">
        <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0"/>
        Nossa equipe especialista entrará em contato em até 5 minutos no WhatsApp informado.
      </p>
    </form>
  );
};
export default LeadForm;
