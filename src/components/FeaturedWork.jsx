import ProjectCard from './ProjectCard.jsx'

export default function FeaturedWork({ projects, onPlay }) {
  const featured = projects.filter((project) => project.featured)

  return (
    <section className="section section--dark" id="trabalhos">
      <div className="shell">
        <div className="section-heading section-heading--light">
          <p className="eyebrow"><span>02</span> seleção principal</p>
          <h2>Histórias diferentes.<br />A mesma intenção.</h2>
          <p>Uma seleção de gameplay, narrativa e conteúdo comercial. Escolha um projeto e veja a edição em ação.</p>
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
