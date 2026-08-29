import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import { filters } from '../data/portfolio.js'

export default function WorkArchive({ projects, onPlay }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const visible = useMemo(() => {
    if (activeFilter === 'all') return projects
    if (activeFilter === 'client' || activeFilter === 'personal') {
      return projects.filter((project) => project.kind === activeFilter)
    }
    return projects.filter((project) => project.format === activeFilter)
  }, [activeFilter, projects])

  return (
    <section className="section archive-section">
      <div className="shell">
        <div className="archive-header">
          <div>
            <p className="eyebrow"><span>03</span> arquivo</p>
            <h2>Mais projetos.</h2>
          </div>
          <div className="filter-tabs" role="group" aria-label="Filtrar projetos">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={activeFilter === filter.id ? 'is-active' : ''}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="archive-grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onPlay={onPlay} />
          ))}
        </div>
      </div>
    </section>
  )
}
