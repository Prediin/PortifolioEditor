const logoSrc = `${import.meta.env.BASE_URL}brand-logo.png`

export default function Logo({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#top" aria-label="Pedro Luis — início">
      <span className="brand-mark" aria-hidden="true">
        <img className="brand-mark__image" src={logoSrc} alt="" />
      </span>
      {!compact && (
        <span className="brand-copy">
          <strong>PEDRO LUIS</strong>
          <small>VIDEO EDITOR</small>
        </span>
      )}
    </a>
  )
}
