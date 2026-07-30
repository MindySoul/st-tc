import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Política de Privacidade | Tecsol Engenharia',
  description: 'Política de privacidade e proteção de dados da Tecsol Engenharia conforme LGPD.',
  path: '/politica-de-privacidade',
});

const Pagina = () => (
  <>
    
    <article className="bg-background py-16 lg:py-20">
      <div className="container max-w-3xl space-y-5 text-foreground">
        <h1 className="text-primary font-extrabold text-3xl lg:text-4xl mb-4">Política de Privacidade — Tecsol Engenharia</h1>
        <p className="text-muted-foreground text-sm">CNPJ: {SITE.cnpj}  •  Atualizada em 2026</p>

        <h2 className="text-primary font-bold text-xl mt-6">1. Quem somos</h2>
        <p>A Tecsol Engenharia é uma empresa de soluções energéticas localizada em Linhares - ES, comprometida com a proteção dos dados pessoais de seus clientes e visitantes do site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>

        <h2 className="text-primary font-bold text-xl mt-6">2. Quais dados coletamos</h2>
        <p>Coletamos dados fornecidos voluntariamente em formulários (nome, telefone, e-mail, cidade, valor da conta de luz, mensagens) e dados de navegação (cookies, IP, páginas visitadas) para melhorar a experiência.</p>

        <h2 className="text-primary font-bold text-xl mt-6">3. Como usamos seus dados</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Responder solicitações de orçamento e contato comercial</li>
          <li>Personalizar nossa comunicação e envio de propostas</li>
          <li>Análise estatística de uso do site para melhorias</li>
          <li>Cumprimento de obrigações legais e contratuais</li>
        </ul>

        <h2 className="text-primary font-bold text-xl mt-6">4. Compartilhamento</h2>
        <p>Não vendemos seus dados. Compartilhamos apenas com parceiros estritamente necessários (financeiras autorizadas, equipe técnica de instalação) e somente quando essencial para a prestação do serviço solicitado.</p>

        <h2 className="text-primary font-bold text-xl mt-6">5. Seus direitos (LGPD)</h2>
        <p>Você pode solicitar a qualquer momento: acesso, correção, exclusão, anonimização, portabilidade ou revogação do consentimento. Basta enviar um e-mail para nosso canal de contato.</p>

        <h2 className="text-primary font-bold text-xl mt-6">6. Cookies</h2>
        <p>Usamos cookies essenciais e de análise. Você pode aceitar todos ou apenas os essenciais por meio do banner de cookies exibido na primeira visita.</p>

        <h2 className="text-primary font-bold text-xl mt-6">7. Contato</h2>
        <p>Dúvidas sobre esta política? Fale conosco no WhatsApp {SITE.phone} ou pelo Instagram {SITE.instagram}.</p>
      </div>
    </article>
  </>
);
export default Pagina;
