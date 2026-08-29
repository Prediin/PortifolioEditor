import ProjectCard from './ProjectCard.jsx'

export default function FeaturedWork({ projects, onPlay }) {
  const featured = projects.filter((project) => project.featured)

  return (
    <section className="section section--dark" id="trabalhos">
      <div className="shell">
        <div className="section-heading section-heading--light">
          <p className="eyebrow"><span>02</span> seleção principal</p>
          <h2>Trabalhos que mostram<br />como eu penso edição.</h2>
          <p>Long-form, conteúdo comercial e vídeo vertical — formatos diferentes, a mesma preocupação com ritmo, clareza e intenção.</p>
        </div>

        <div className="featured-grid">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} onPlay={onPlay} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
