export default function Logo({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#top" aria-label="Pedro Luis — início">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark__p">P</span>
        <span className="brand-mark__cut brand-mark__cut--red" />
        <span className="brand-mark__cut brand-mark__cut--gold" />
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
