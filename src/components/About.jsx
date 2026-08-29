import { services } from '../data/portfolio.js'

export default function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="shell about-grid">
        <div className="about-sticky">
          <p className="eyebrow"><span>06</span> como eu edito</p>
          <h2>O corte só funciona quando sabe por que existe.</h2>
          <p>
            Eu gosto de edição que tem personalidade, mas não compete com o conteúdo. Antes de adicionar efeito, penso no objetivo da cena: explicar, divertir, criar tensão, dar respiro ou acelerar. É essa lógica que guia meu trabalho.
          </p>
          <div className="about-stamp" aria-hidden="true">
            <span>RITMO</span>
            <strong>↻</strong>
            <span>HISTÓRIA</span>
          </div>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article key={service.index} className="service-row">
              <span>{service.index}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
