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
      <main id="conteudo">
        <Hero onPlay={setActiveProject} />
        <FeaturedWork projects={projects} onPlay={setActiveProject} />
        <WorkArchive projects={projects} onPlay={setActiveProject} />
        <ShortCollection
          eyebrow="04"
          title="Pequenos formatos. Muito ritmo."
          description="Conteúdo autoral de Brawl Stars para TikTok e YouTube Shorts. Notícias, humor e cortes no tempo certo."
          items={brawlShorts}
          onPlay={setActiveProject}
          tone="light"
        />
        <ShortCollection
          eyebrow="05"
          title="Movimento que acompanha a batida."
          description="Edits autorais de @lgf.predo. Sincronia musical e motion criados no Alight Motion."
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
