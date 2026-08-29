import { profile } from '../data/portfolio.js'

const logoSrc = `${import.meta.env.BASE_URL}brand-logo.png`

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> edição / ritmo / narrativa</p>
          <h1>
            Eu edito para o vídeo
            <span className="hero-highlight"> não perder o pulso.</span>
          </h1>
          <p className="hero-lead">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#trabalhos">Ver trabalhos</a>
            <a className="button button--ghost" href="#contato">Falar comigo</a>
          </div>
        </div>

        <div className="hero-art" aria-label="Composição gráfica inspirada em uma timeline de edição">
          <div className="hero-logo-card">
            <div className="hero-logo-card__media">
              <img src={logoSrc} alt="Logo de Pedro Luis" />
            </div>
            <div className="hero-logo-card__copy">
              <small>IDENTIDADE VISUAL</small>
              <strong>DAX / PEDRO LUIS</strong>
            </div>
          </div>

          <div className="hero-frame">
            <div className="hero-frame__top">
              <span>SEQ_01</span>
              <span>00:01:37:12</span>
            </div>
            <div className="hero-frame__screen">
              <div className="screen-word screen-word--one">CUT</div>
              <div className="screen-word screen-word--two">STORY</div>
              <div className="screen-cross" />
            </div>
            <div className="timeline" aria-hidden="true">
              <div className="timeline__ticks" />
              <div className="timeline__track timeline__track--video">
                <span className="clip clip--blue" />
                <span className="clip clip--gold" />
                <span className="clip clip--red" />
              </div>
              <div className="timeline__track timeline__track--audio">
                <span className="wave" />
              </div>
              <div className="playhead" />
            </div>
          </div>
          <p className="hero-note">Pedro Luis · Editor de vídeo</p>
        </div>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <div>
          <span>LONG-FORM</span><i>◆</i><span>SHORT-FORM</span><i>◆</i><span>MOTION</span><i>◆</i>
          <span>GAMEPLAY</span><i>◆</i><span>COMERCIAL</span><i>◆</i><span>STORYTELLING</span><i>◆</i>
          <span>LONG-FORM</span><i>◆</i><span>SHORT-FORM</span><i>◆</i><span>MOTION</span><i>◆</i>
        </div>
      </div>
    </section>
  )
}
