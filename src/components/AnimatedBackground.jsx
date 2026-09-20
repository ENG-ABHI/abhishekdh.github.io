import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current; const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d'); let width, height, frame; const dots = []
    const setup = () => {
      width = canvas.width = window.innerWidth * Math.min(devicePixelRatio, 2); height = canvas.height = window.innerHeight * Math.min(devicePixelRatio, 2)
      canvas.style.width = `${window.innerWidth}px`; canvas.style.height = `${window.innerHeight}px`; ctx.scale(Math.min(devicePixelRatio, 2), Math.min(devicePixelRatio, 2))
      dots.length = 0; const count = Math.min(46, Math.round(window.innerWidth / 28))
      for (let i = 0; i < count; i++) dots.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: Math.random() * 1.3 + .45 })
    }
    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      dots.forEach((d, i) => {
        if (!reduce) { d.x += d.vx; d.y += d.vy; if (d.x < 0 || d.x > window.innerWidth) d.vx *= -1; if (d.y < 0 || d.y > window.innerHeight) d.vy *= -1 }
        for (let j = i + 1; j < dots.length; j++) { const n = dots[j]; const dist = Math.hypot(d.x - n.x, d.y - n.y); if (dist < 135) { ctx.beginPath(); ctx.strokeStyle = `rgba(91, 207, 255, ${.09 * (1 - dist / 135)})`; ctx.lineWidth = .6; ctx.moveTo(d.x, d.y); ctx.lineTo(n.x, n.y); ctx.stroke() } }
        ctx.beginPath(); ctx.fillStyle = 'rgba(162, 222, 255, .35)'; ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill()
      })
      if (!reduce) frame = requestAnimationFrame(draw)
    }
    setup(); draw(); window.addEventListener('resize', setup)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', setup) }
  }, [])
  return <><canvas className="particle-canvas" ref={canvasRef} aria-hidden="true" /><div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-overlay" /></>
}
