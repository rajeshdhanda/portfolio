import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Competitions from '@/components/Competitions'
import CanvasNote from '@/components/CanvasNote'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Competitions />
      <CanvasNote />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
