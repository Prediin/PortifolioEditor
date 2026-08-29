import { useState } from 'react'
import ProfileBadge from './ProfileBadge.jsx'

export default function ProjectCard({ project, onPlay, priority = false }) {
  const [thumbError, setThumbError] = useState(false)

  return (
    <article className={`project-card project-card--${project.format}`}>
      <button className="project-media" type="button" onClick={() => onPlay(project)} aria-label={`Reproduzir ${project.title}`}>
        {project.thumbnail && !thumbError ? (
          <img
            src={project.thumbnail}
            alt=""
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={(event) => {
              if (event.currentTarget.src.includes('maxresdefault')) {
                event.currentTarget.src = `https://i.ytimg.com/vi/${project.videoId}/hqdefault.jpg`
              } else {
                setThumbError(true)
              }
            }}
          />
        ) : (
          <div className={`project-placeholder project-placeholder--${project.provider}`}>
            <span>{project.provider === 'instagram' ? 'REEL' : project.provider === 'tiktok' ? 'EDIT' : 'VIDEO'}</span>
            <strong>{project.profileInitials || 'PL'}</strong>
          </div>
        )}
        <span className="play-button" aria-hidden="true"><i /></span>
        <span className="project-format">{project.format === 'short' ? '9:16' : '16:9'}</span>
      </button>

      <div className="project-body">
        <div className="project-meta-row">
          <ProfileBadge project={project} />
          <span className="software-label">{project.software}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags?.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-links">
          <button type="button" onClick={() => onPlay(project)}>Assistir aqui <span>↗</span></button>
          <a href={project.url} target="_blank" rel="noreferrer">Abrir original</a>
        </div>
      </div>
    </article>
  )
}
