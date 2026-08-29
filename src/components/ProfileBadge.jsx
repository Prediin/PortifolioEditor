import { useState } from 'react'

export default function ProfileBadge({ project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const image = project.profileImage
    ? `${import.meta.env.BASE_URL}${project.profileImage}`
    : null

  const content = (
    <>
      {image && !imageFailed ? (
        <img src={image} alt="" onError={() => setImageFailed(true)} />
      ) : (
        <span>{project.profileInitials || 'PL'}</span>
      )}
      <strong>{project.client}</strong>
    </>
  )

  if (project.clientUrl) {
    return (
      <a className="profile-badge" href={project.clientUrl} target="_blank" rel="noreferrer" aria-label={`Abrir perfil ${project.client}`}>
        {content}
      </a>
    )
  }

  return <span className="profile-badge" aria-label={`Perfil ${project.client}`}>{content}</span>
}
