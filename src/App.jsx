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
import MotionEffects from './components/MotionEffects.jsx'
import { brawlShorts, motionEdits, projects } from './data/portfolio.js'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  const closePlayer = useCallback(() => setActiveProject(null), [])

  return (
    <>
      <MotionEffects />
      <Header />
      <main>
        <Hero />
        <FeaturedWork projects={projects} onPlay={setActiveProject} />
        <WorkArchive projects={projects} onPlay={setActiveProject} />
        <ShortCollection
          eyebrow="04"
          title="Videos curtos que eu produzi:"
          description='Conteúdo autoral para TikTok e YouTube Shorts. Veja abaixo os vídeos ou clique em "Original" para ser redirecionado para o vídeo na rede social.'
          items={brawlShorts}
          onPlay={setActiveProject}
          tone="light"
        />
        <ShortCollection
          eyebrow="05"
          title="Edits & motion que eu produzi"
          description="Alguns dos melhores trabalhos autorais para minha conta de edits no Tiktok @lgf.predo, usando o app de edição para mobile Alight Motion."
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
