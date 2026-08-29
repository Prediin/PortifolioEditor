import { useEffect, useRef, useState } from 'react'

function ExternalFallback({ project }) {
  return (
    <div className="modal-fallback">
      <p>Se o player da plataforma não carregar no seu navegador, abra o vídeo original.</p>
      <a className="button button--primary" href={project.url} target="_blank" rel="noreferrer">
        Abrir na plataforma
      </a>
    </div>
  )
}

export default function VideoModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const [useLocal, setUseLocal] = useState(project?.provider === 'tiktok-short-link')
  const [localFailed, setLocalFailed] = useState(false)

  useEffect(() => {
    if (!project) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    dialogRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose])

  useEffect(() => {
    setUseLocal(project?.provider === 'tiktok-short-link')
    setLocalFailed(false)
  }, [project])

  if (!project) return null

  const localSrc = project.localFile
    ? `${import.meta.env.BASE_URL}${project.localFile}`
    : null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <section
        className={`video-modal video-modal--${project.format || 'short'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <div className="modal-topbar">
          <div>
            <span>NOW PLAYING</span>
            <strong id="modal-title">{project.title}</strong>
          </div>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Fechar player">×</button>
        </div>

        <div className="modal-player-wrap">
          {!useLocal && project.embedUrl ? (
            <iframe
              className="modal-iframe"
              src={project.embedUrl}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : localSrc && !localFailed ? (
            <video
              className="modal-local-video"
              src={localSrc}
              controls
              playsInline
              onError={() => setLocalFailed(true)}
            />
          ) : (
            <ExternalFallback project={project} />
          )}
        </div>

        <div className="modal-bottom">
          <p>{project.description}</p>
          <div className="modal-actions">
            {project.localFile && project.provider !== 'youtube' && (
              <button type="button" onClick={() => setUseLocal((value) => !value)}>
                {useLocal ? 'Tentar embed' : 'Usar arquivo local'}
              </button>
            )}
            <a href={project.url} target="_blank" rel="noreferrer">Ver original ↗</a>
          </div>
        </div>
      </section>
    </div>
  )
}
