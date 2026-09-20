import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }
  return <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
    <nav className="nav glass" aria-label="Primary navigation">
      <button className="brand" onClick={() => go('home')} aria-label="Back to home"><span className="brand-mark">A</span><span>AD</span></button>
      <div className="nav-links">{navigation.map(([name, id]) => <button key={id} onClick={() => go(id)}>{name}</button>)}</div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation menu">{open ? <X /> : <Menu />}</button>
    </nav>
    <AnimatePresence>
      {open && <m.div className="mobile-menu glass" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
        {navigation.map(([name, id], i) => <m.button key={id} onClick={() => go(id)} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .035 }}>{name}<span>0{i + 1}</span></m.button>)}
      </m.div>}
    </AnimatePresence>
  </header>
}
