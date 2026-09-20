import { m } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  return (
    <m.div
      className={`section-heading ${align === 'center' ? 'text-center mx-auto' : ''}`}
      initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}
    >
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </m.div>
  )
}
