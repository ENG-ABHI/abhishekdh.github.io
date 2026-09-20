import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const dot = document.querySelector('.cursor-dot'), ring = document.querySelector('.cursor-ring')
    const move = (e) => { dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)` }
    const over = (e) => { if (e.target.closest('a,button,input,textarea')) ring.classList.add('cursor-active') }
    const out = (e) => { if (e.target.closest('a,button,input,textarea')) ring.classList.remove('cursor-active') }
    window.addEventListener('pointermove', move); document.addEventListener('pointerover', over); document.addEventListener('pointerout', out)
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerover', over); document.removeEventListener('pointerout', out) }
  }, [])
  return <><span className="cursor-dot" /><span className="cursor-ring" /></>
}
