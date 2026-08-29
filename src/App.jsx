import { useCallback, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import WorkArchive from './components/WorkArchive.jsx'
import ShortCollection from './components/ShortCollection.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import VideoModal from './components/VideoModal.jsx'
import { brawlShorts, motionEdits, projects } from './data/portfolio.js'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  const closePlayer = useCallback(() => setActiveProject(null), [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedWork projects={projects} onPlay={setActiveProject} />
        <WorkArchive projects={projects} onPlay={setActiveProject} />
        <ShortCollection
          eyebrow="04"
          title="Brawl Stars em formato curto."
          description="Conteúdo autoral para TikTok focado em notícias, atualizações e assuntos do jogo. Os short links abrem na plataforma; a estrutura também aceita MP4 local como fallback."
          items={brawlShorts}
          onPlay={setActiveProject}
        />
        <ShortCollection
          eyebrow="05"
          title="Edits & motion no ritmo da música."
          description="Uma sequência de trabalhos autorais para @lgf.predo, usando Alight Motion para sincronizar movimento, impacto e música em vídeos verticais."
          items={motionEdits}
          onPlay={setActiveProject}
          showViews
        />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <VideoModal project={activeProject} onClose={closePlayer} />
    </>
  )
}
