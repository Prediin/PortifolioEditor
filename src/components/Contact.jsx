import { useMemo, useState } from 'react'
import { profile } from '../data/portfolio.js'

const initialForm = {
  name: '',
  contact: '',
  projectType: 'Vídeo para YouTube',
  budget: '',
  deadline: '',
  message: '',
}

function buildProjectMessage(form) {
  return [
    `Olá, Pedro! Meu nome é ${form.name || '________'}.`,
    '',
    'Tenho interesse em contratar seu serviço de edição de vídeo.',
    '',
    `Nome: ${form.name || 'não informado'}`,
    `Contato: ${form.contact || 'não informado'}`,
    `Tipo de projeto: ${form.projectType || 'não informado'}`,
    `Orçamento/faixa: ${form.budget || 'a combinar'}`,
    `Prazo: ${form.deadline || 'a combinar'}`,
    '',
    'Sobre o projeto:',
    form.message || 'Quero conversar sobre uma edição de vídeo.',
  ].join('\n')
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [copied, setCopied] = useState(false)

  const messageBody = useMemo(() => buildProjectMessage(form), [form])

  const emailSubject = useMemo(
    () => `Orçamento de edição — ${form.name || 'novo projeto'}`,
    [form.name],
  )

  // Gmail Web funciona no navegador do PC mesmo quando o Windows não possui
  // um aplicativo de e-mail configurado para links mailto:.
  const gmailHref = useMemo(() => {
    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      tf: 'cm',
      to: profile.email,
      su: emailSubject,
      body: messageBody,
    })

    return `https://mail.google.com/mail/?${params.toString()}`
  }, [emailSubject, messageBody])

  // Mantém um fallback para quem prefere Outlook, Thunderbird ou outro
  // aplicativo configurado como cliente de e-mail padrão do sistema.
  const mailtoHref = useMemo(() => {
    return `mailto:${profile.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(messageBody)}`
  }, [emailSubject, messageBody])

  const whatsappHref = useMemo(() => {
    return `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(messageBody)}`
  }, [messageBody])

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="contact-section" id="contato">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow eyebrow--light"><span>08</span> contato</p>
          <h2>Tem material bruto?<br />Vamos dar direção a ele.</h2>
          <p>
            Conte um pouco sobre o vídeo, plataforma, prazo e o tipo de edição que você imagina. O botão de Gmail abre uma nova mensagem no navegador com as informações do formulário já organizadas.
          </p>

          <div className="contact-direct">
            <a href={whatsappHref} target="_blank" rel="noreferrer"><span>WhatsApp</span>{profile.whatsappDisplay}</a>
            <a href={profile.instagramUrl} target="_blank" rel="noreferrer"><span>Instagram</span>{profile.instagram}</a>
            <button type="button" onClick={copyEmail}><span>E-mail</span>{copied ? 'Copiado!' : profile.email}</button>
          </div>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <div className="form-grid">
            <label>
              <span>Seu nome</span>
              <input name="name" value={form.name} onChange={updateField} placeholder="Como posso te chamar?" />
            </label>
            <label>
              <span>Seu contato</span>
              <input name="contact" value={form.contact} onChange={updateField} placeholder="WhatsApp, @ ou e-mail" />
            </label>
          </div>

          <div className="form-grid">
            <label>
              <span>Tipo de projeto</span>
              <select name="projectType" value={form.projectType} onChange={updateField}>
                <option>Vídeo para YouTube</option>
                <option>Reels / TikTok / Shorts</option>
                <option>Vídeo comercial</option>
                <option>Motion / edit</option>
                <option>Outro formato</option>
              </select>
            </label>
            <label>
              <span>Orçamento</span>
              <input name="budget" value={form.budget} onChange={updateField} placeholder="Ex.: R$ 300–500" />
            </label>
          </div>

          <label>
            <span>Prazo</span>
            <input name="deadline" value={form.deadline} onChange={updateField} placeholder="Ex.: preciso para o dia 20" />
          </label>

          <label>
            <span>Sobre o projeto</span>
            <textarea name="message" value={form.message} onChange={updateField} rows="5" placeholder="Duração do bruto, referência, estilo, plataforma, frequência..." />
          </label>

          <div className="contact-form__footer">
            <a className="button button--accent" href={gmailHref} target="_blank" rel="noreferrer">Enviar por Gmail ↗</a>
            <a className="button button--line-light" href={whatsappHref} target="_blank" rel="noreferrer">Enviar no WhatsApp</a>
            <a className="button button--line-light" href={mailtoHref}>App de e-mail</a>
          </div>
          <small className="form-note">Sem servidor e sem coleta de dados: os botões apenas montam a mensagem no seu dispositivo. Para o Gmail Web, é necessário estar conectado a uma conta Google no navegador.</small>
        </form>
      </div>
    </section>
  )
}
