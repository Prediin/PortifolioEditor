import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import { filters } from '../data/portfolio.js'

const filterMatchers = {
  all: () => true,
  client: (project) => project.kind === 'client',
  personal: (project) => project.kind === 'personal',
  long: (project) => project.format === 'long',
  short: (project) => project.format === 'short',
}

export default function WorkArchive({ projects, onPlay }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleProjects = useMemo(() => {
    const matcher = filterMatchers[activeFilter] ?? filterMatchers.all
    return projects.filter(matcher)
  }, [activeFilter, projects])

  function changeFilter(filterId) {
    if (!filterMatchers[filterId]) return
    setActiveFilter(filterId)
  }

  return (
    <section className="section archive-section">
      <div className="shell">
        <div className="archive-header">
          <div>
            <p className="eyebrow"><span>03</span> arquivo</p>
            <h2>Mais projetos.</h2>
            <p className="archive-results" aria-live="polite">
              {visibleProjects.length} {visibleProjects.length === 1 ? 'projeto exibido' : 'projetos exibidos'}
            </p>
          </div>

          <div className="filter-tabs" role="group" aria-label="Filtrar projetos">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id

              return (
                <button
                  key={filter.id}
                  type="button"
                  className={isActive ? 'is-active' : ''}
                  aria-pressed={isActive}
                  onClick={() => changeFilter(filter.id)}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="archive-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onPlay={onPlay} />
          ))}
        </div>
      </div>
    </section>
  )
}
