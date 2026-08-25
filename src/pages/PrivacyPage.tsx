import { Container } from '../components/ui/Container'
import { PageHero } from '../components/ui/PageHero'
import { company } from '../data/company'
import { PageMeta } from '../lib/seo'

export function PrivacyPage() {
  return (
    <>
      <PageMeta title="Política de Privacidade" description="Informações provisórias sobre privacidade e tratamento de dados no site da Ágape Instalações." />
      <PageHero eyebrow="Privacidade" title="Política de Privacidade" description="Versão provisória para explicar como os dados do formulário são utilizados no site." breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Política de Privacidade' }]} />
      <section className="section legal-page"><Container><div className="provisional-note"><p><strong>Documento provisório:</strong> revisar com o cliente e com orientação jurídica antes da publicação definitiva.</p></div><div className="legal-content"><h2>1. Dados informados pelo usuário</h2><p>O formulário solicita nome, empresa ou condomínio, telefone, e-mail, serviço, cidade e mensagem para organizar uma solicitação de contato.</p><h2>2. Como o formulário funciona</h2><p>Os dados não são enviados nem armazenados por este site. Ao confirmar, o navegador gera uma mensagem e abre o WhatsApp para que o próprio usuário revise e faça o envio.</p><h2>3. Finalidade</h2><p>As informações são usadas exclusivamente para responder à solicitação comercial ou técnica iniciada pelo usuário.</p><h2>4. Serviços de terceiros</h2><p>Ao abrir o WhatsApp, passam a valer as políticas e condições do serviço de terceiros. O envio só acontece após a confirmação do usuário nesse aplicativo.</p><h2>5. Contato</h2><p>Para dúvidas sobre privacidade, utilize o e-mail provisório <a href={`mailto:${company.email}`}>{company.email}</a>.</p><p className="legal-update">Última atualização provisória: agosto de 2026.</p></div></Container></section>
    </>
  )
}
