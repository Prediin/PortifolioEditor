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

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [copied, setCopied] = useState(false)

  const emailHref = useMemo(() => {
    const subject = `Orçamento de edição — ${form.name || 'novo projeto'}`
    const body = [
      `Olá, Pedro! Meu nome é ${form.name || '________'}.`,
      '',
      `Tipo de projeto: ${form.projectType}`,
      `Meu contato: ${form.contact || 'não informado'}`,
      `Orçamento/faixa: ${form.budget || 'a combinar'}`,
      `Prazo: ${form.deadline || 'a combinar'}`,
      '',
      'Sobre o projeto:',
      form.message || 'Quero conversar sobre uma edição de vídeo.',
    ].join('\n')

    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [form])

  const whatsappHref = useMemo(() => {
    const text = `Olá, Pedro! Tenho interesse em edição de vídeo. Meu nome é ${form.name || '___'} e o projeto é: ${form.projectType}. ${form.message}`
    return `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(text)}`
  }, [form])

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
            Conte um pouco sobre o vídeo, plataforma, prazo e o tipo de edição que você imagina. O botão abaixo abre seu aplicativo de e-mail com a mensagem já organizada.
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
            <a className="button button--accent" href={emailHref}>Montar e-mail ↗</a>
            <a className="button button--line-light" href={whatsappHref} target="_blank" rel="noreferrer">Enviar no WhatsApp</a>
          </div>
          <small className="form-note">Sem servidor e sem coleta de dados: o formulário apenas monta a mensagem no seu dispositivo.</small>
        </form>
      </div>
    </section>
  )
}
