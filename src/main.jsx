import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Erro ao renderizar o portfólio:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{ minHeight: '100vh', background: '#05080c', color: '#E9F1F7', padding: '48px 24px', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <p style={{ color: '#ECA400', fontWeight: 800 }}>PORTFÓLIO · ERRO DE EXECUÇÃO</p>
            <h1 style={{ fontSize: 'clamp(36px, 7vw, 72px)', margin: '16px 0' }}>O site carregou, mas o React encontrou um erro.</h1>
            <p style={{ color: '#A9BBC5', lineHeight: 1.7 }}>
              Abra o console do navegador (F12 → Console) e copie a mensagem em vermelho para localizar o problema.
            </p>
            <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', padding: 18, border: '1px solid rgba(255,255,255,.15)', background: '#10181e' }}>
              {String(this.state.error)}
            </pre>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Elemento #root não encontrado no index.html')
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
