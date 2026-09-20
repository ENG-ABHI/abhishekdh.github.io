import { LazyMotion, domAnimation } from 'framer-motion'
import { portfolio } from './data/portfolio'
import AnimatedBackground from './components/AnimatedBackground'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import ResearchDirection from './sections/ResearchDirection'
import AILab from './sections/AILab'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="site-shell">
        <AnimatedBackground />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero data={portfolio} />
          <About data={portfolio} />
          <Experience data={portfolio} />
          <Projects data={portfolio} />
          <Skills data={portfolio} />
          <ResearchDirection data={portfolio} />
          <AILab />
          <Education data={portfolio} />
          <Contact data={portfolio} />
        </main>
        <Footer data={portfolio} />
      </div>
    </LazyMotion>
  )
}
