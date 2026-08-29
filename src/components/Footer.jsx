import Logo from './Logo.jsx'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <Logo compact />
        <p>© {new Date().getFullYear()} {profile.name}. Portfólio de edição de vídeo.</p>
        <a href="#top">Voltar ao topo ↑</a>
      </div>
    </footer>
  )
}
