import { projects } from '../data/portfolio.js'

const featured = projects.find((project) => project.id === 'silksong-ato-1')
const formats = ['VÍDEOS LONGOS', 'SHORTS', 'MOTION DESIGN', 'GAMEPLAY', 'COMERCIAL', 'CINEMÁTICO']

export default function Hero({ onPlay }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="eyebrow"><span>01 /</span> Pedro Luis · Editor de vídeo</p>
          <h1>Cada corte.<br />Uma <span className="hero-highlight">intenção.</span></h1>
          <p className="hero-lead">Transformo material bruto em histórias com ritmo e personalidade. Do primeiro gancho ao último frame.</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#trabalhos">Explorar trabalhos <span aria-hidden="true">↗</span></a>
            <a className="button button--ghost" href="#contato">Vamos conversar</a>
          </div>
          <p className="hero-signature">EDIÇÃO DE VÍDEO <span>/</span> MOTION <span>/</span> NARRATIVA</p>
        </div>
        <div className="hero-art">
          <div className="reel-heading"><span>EM DESTAQUE</span><span>01 — GAMEPLAY / REVIEW</span></div>
          <button className="hero-reel" type="button" onClick={() => onPlay(featured)} aria-label={`Reproduzir ${featured.title}`}>
            <img src={`${import.meta.env.BASE_URL}${featured.thumbnail}`} alt="" fetchPriority="high" width="1280" height="720" />
            <span className="hero-reel__shade" aria-hidden="true" />
            <span className="hero-reel__label">HOLLOW KNIGHT<span>SILKSONG</span></span>
            <span className="hero-reel__play"><span aria-hidden="true">▶</span> Assistir projeto</span>
            <span className="hero-reel__corner" aria-hidden="true">↗</span>
          </button>
          <div className="reel-caption"><span>Edição para <strong>{featured.client}</strong></span><span>Premiere Pro · 16:9</span></div>
          <div className="reel-timeline" aria-hidden="true"><span /><span /><span /><span /><i /></div>
          <p className="hero-note">Ritmo para divertir. Espaço para a história.</p>
        </div>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee__track">
          {[0, 1].map((copy) => <div className="hero-marquee__group" key={copy}>{formats.map((format) => <span key={format}>{format}<i>✳</i></span>)}</div>)}
        </div>
      </div>
    </section>
  )
}
