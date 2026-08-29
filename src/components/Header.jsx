import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const links = [
  ['#trabalhos', 'Trabalhos'],
  ['#sobre', 'Sobre'],
  ['#skills', 'Ferramentas'],
  ['#contato', 'Contato'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />

        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={`header-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="header-cta" href="#contato" onClick={() => setOpen(false)}>
            Vamos editar?
          </a>
        </nav>
      </div>
    </header>
  )
}
