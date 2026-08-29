function formatViews(value) {
  if (!Number.isFinite(value)) return null

  const absoluteValue = Math.abs(value)
  const formatNumber = (number) => new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  }).format(number)

  if (absoluteValue >= 1_000_000_000) {
    return `${formatNumber(value / 1_000_000_000)} bi`
  }

  if (absoluteValue >= 1_000_000) {
    return `${formatNumber(value / 1_000_000)} mi`
  }

  if (absoluteValue >= 1_000) {
    return `${formatNumber(value / 1_000)} mil`
  }

  return formatNumber(value)
}

export default function ShortCollection({ title, eyebrow, description, items, onPlay, showViews = false, tone = 'dark' }) {
  const knownViewItems = showViews
    ? items.filter((item) => Number.isFinite(item.viewCount)).sort((a, b) => b.viewCount - a.viewCount)
    : []

  const topIds = new Set(knownViewItems.slice(0, 3).map((item) => item.id))
  const orderedItems = showViews && knownViewItems.length
    ? [...items].sort((a, b) => (b.viewCount ?? -1) - (a.viewCount ?? -1))
    : items

  return (
    <section className={`short-collection short-collection--${tone} section`}>
      <div className="shell">
        <div className="short-collection__head">
          <div>
            <p className="eyebrow"><span>{eyebrow}</span> vertical / social</p>
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
        </div>

        <div className="short-rail" aria-label={title}>
          {orderedItems.map((item, index) => {
            const isTop = showViews && topIds.has(item.id)
            const views = formatViews(item.viewCount)

            return (
              <article className={`short-card ${isTop ? 'short-card--top' : ''}`} key={item.id}>
                <button className="short-card__preview" type="button" onClick={() => onPlay({ ...item, format: 'short' })}>
                  <span className="short-card__number">{String(index + 1).padStart(2, '0')}</span>
                  {isTop && <span className="short-card__top-badge">TOP</span>}
                  <span className="short-card__play">▶</span>
                  <div className="short-card__bars" aria-hidden="true"><i /><i /><i /><i /></div>
                </button>
                <div className="short-card__body">
                  <small>{item.client} · {item.software}</small>
                  <h3>{item.title}</h3>
                  {showViews && (
                    <p className="view-count">
                      {views ? `${views} visualizações` : 'Visualizações: atualizar manualmente'}
                    </p>
                  )}
                  <div className="short-card__actions">
                    <button type="button" onClick={() => onPlay({ ...item, format: 'short' })}>Assistir</button>
                    <a href={item.url} target="_blank" rel="noreferrer">Original ↗</a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {showViews && (
          <p className="collection-note">
            
          </p>
        )}
      </div>
    </section>
  )
}
