'use client';

import { useState } from 'react';
import { CITIES, SOLUCOES, getClickIds, maskPhone, pushLeadEvent, waLink } from '@/lib/site';
import { submitLead } from '@/lib/actions';
import { CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';

const fmt = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const Calculadora = () => {
  const [step, setStep] = useState<1|2>(1);
  const [loading, setLoading] = useState(false);
  const [leadErro, setLeadErro] = useState(false);
  const [form, setForm] = useState({
    nome: '', telefone: '', cidade: '', tipo_solucao: '', valor_conta: 500,
  });
  const [result, setResult] = useState({ economia: 0, parcela: 0, payback: 0, total: 0 });

  const calc = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const conta = form.valor_conta;
    const economia = conta * 0.90;
    const investimento = (conta * 0.05) * 3800;
    const parcela = (investimento / 60) * 1.018;
    const payback = investimento / (economia * 12);
    const total = economia * 12 * 25;
    setResult({ economia, parcela, payback, total });
    const dados = {
      ...form,
      valor_conta: String(form.valor_conta),
      origem: 'calculadora_inicio',
      pagina: '/',
      ...getClickIds(),
    };
    pushLeadEvent(dados);
    const { ok } = await submitLead(dados);
    setLoading(false);
    setLeadErro(!ok);
    // A simulação é o que o usuário veio buscar, então o resultado aparece de
    // qualquer jeito; se o lead não chegou na API, o aviso abaixo oferece o
    // WhatsApp pra não perder o contato.
    setStep(2);
  };

  return (
    <section id="calculadora" className="bg-primary-soft py-16 lg:py-24">
      <div className="container grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 reveal">
          <span className="inline-block bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            Simulação Gratuita
          </span>
          <h2 className="text-primary font-bold text-3xl lg:text-4xl leading-tight mb-4">
            Descubra quanto você economiza com energia solar
          </h2>
          <p className="text-muted-foreground mb-8">
            Preencha ao lado e veja em segundos a estimativa de economia e as opções de pagamento disponíveis para você.
          </p>
          <ul className="space-y-4">
            {[
              { Icon: ShieldCheck, t: 'Análise 100% gratuita e sem compromisso' },
              { Icon: Clock, t: 'Nossa equipe retorna em até 5 minutos' },
              { Icon: Sparkles, t: 'Equipamentos Fortlev Solar com garantia de 30 anos' },
            ].map(({ Icon, t }, i) => (
              <li key={i} className="flex items-start gap-3">
                <Icon className="text-primary shrink-0 mt-0.5" size={22} />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 reveal">
          <div className="bg-background border-2 border-primary rounded-2xl p-6 lg:p-8 shadow-orange">
            {step === 1 ? (
              <form onSubmit={calc} className="space-y-4">
                <h3 className="text-primary font-bold text-2xl mb-2">Simule sua economia agora</h3>
                <input required placeholder="Nome completo *" value={form.nome}
                  onChange={e => setForm({...form, nome: e.target.value})}
                  className="w-full px-4 py-3 border border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
                <input required placeholder="WhatsApp *" value={form.telefone} inputMode="tel"
                  onChange={e => setForm({...form, telefone: maskPhone(e.target.value)})}
                  className="w-full px-4 py-3 border border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <select required value={form.cidade} onChange={e => setForm({...form, cidade: e.target.value})}
                    className="w-full px-4 py-3 border border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm bg-background">
                    <option value="">Cidade *</option>
                    {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <select required value={form.tipo_solucao} onChange={e => setForm({...form, tipo_solucao: e.target.value})}
                    className="w-full px-4 py-3 border border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm bg-background">
                    <option value="">Tipo de solução *</option>
                    {SOLUCOES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="pt-2">
                  <label className="text-sm text-muted-foreground">Valor da conta de luz</label>
                  <div className="text-primary font-extrabold text-3xl mt-1 mb-2">{fmt(form.valor_conta)}</div>
                  <input type="range" min={150} max={5000} step={50} value={form.valor_conta}
                    onChange={e => setForm({...form, valor_conta: Number(e.target.value)})}
                    className="w-full accent-primary" />
                  <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                    <span>R$150</span><span>R$1.000</span><span>R$2.000</span><span>R$3.000</span><span>R$5.000</span>
                  </div>
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-bold uppercase tracking-wide text-sm btn-press hover:bg-primary-dark disabled:opacity-70 flex items-center justify-center gap-2">
                  {loading ? <span className="inline-block h-5 w-5 border-[3px] border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin"/> : 'Calcular minha economia →'}
                </button>
              </form>
            ) : (
              <div className="animate-fade-in space-y-5">
                <h3 className="text-primary font-bold text-2xl">Ótima escolha, {form.nome.split(' ')[0]}! Veja sua estimativa:</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary text-primary-foreground rounded-xl p-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider opacity-90">Economia estimada</p>
                    <p className="text-4xl font-extrabold mt-2">{fmt(result.economia)}<span className="text-base font-medium">/mês</span></p>
                    <p className="mt-4 text-[11px] uppercase tracking-wider opacity-90">Parcela a partir de</p>
                    <p className="text-3xl font-extrabold">{fmt(result.parcela)}<span className="text-base font-medium">/60x</span></p>
                    <ul className="mt-4 text-sm space-y-1 opacity-95">
                      <li>• Saldo positivo desde o 1º mês</li>
                      <li>• Payback: ~{result.payback.toFixed(1)} anos</li>
                      <li>• Economia em 25 anos: <strong>{fmt(result.total)}</strong></li>
                    </ul>
                  </div>

                  <div className="bg-background border-2 border-primary rounded-xl p-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary">Formas de pagamento</p>
                    <ul className="mt-3 space-y-2 text-sm text-foreground">
                      {[
                        'Financiamento BV: até 120x, 3 meses sem pagar',
                        'Consórcio Conasol: até 36x sem juros',
                        'Cartão de crédito',
                        'À vista com desconto especial',
                        'Híbrido (combinações)',
                      ].map(p => (
                        <li key={p} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5"/>{p}</li>
                      ))}
                    </ul>
                    <a href="/sobre#pagamentos" className="inline-block mt-4 border border-primary text-primary font-semibold px-4 py-2 rounded-md text-xs uppercase btn-press hover:bg-primary-soft">
                      Ver todas as opções →
                    </a>
                  </div>
                </div>

                <div className="bg-secondary rounded-xl p-5 flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20}/>
                  <div className="flex-1">
                    <p className="text-foreground text-sm">
                      {leadErro
                        ? 'Não conseguimos registrar seu contato agora. Fale com a gente no WhatsApp pra não perder a simulação.'
                        : 'Nossa equipe especialista entrará em contato em até 5 minutos no WhatsApp informado.'}
                    </p>
                    <a href={waLink(`Olá, sou ${form.nome}, fiz a simulação no site da Tecsol.`)} target="_blank" rel="noopener noreferrer"
                      className="inline-block mt-3 bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-md text-xs uppercase btn-press hover:bg-primary-dark">
                      Falar agora no WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Calculadora;
