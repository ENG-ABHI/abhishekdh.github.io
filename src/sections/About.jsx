import { BrainCircuit, Code2, GraduationCap, ScanSearch } from 'lucide-react'
import { m } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function About({ data }) {
  const facts = [{ Icon: GraduationCap, label: 'Education', value: 'B.Tech CSE' }, { Icon: BrainCircuit, label: 'Domain', value: 'AI / ML' }, { Icon: ScanSearch, label: 'Focus', value: 'Language + Vision' }, { Icon: Code2, label: 'Approach', value: 'Applied Research' }]
  return <section id="about" className="section section-pad"><SectionHeading eyebrow="01 / ABOUT" title="Engineering intelligence with curiosity." />
    <div className="about-grid"><m.article className="about-copy glass-panel" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><p>{data.about}</p><div className="focus-pills">{data.focusPills.map((pill, i) => <m.span key={pill} whileHover={{ y: -3 }} transition={{ delay: i * .04 }}>{pill}</m.span>)}</div></m.article>
    <div className="fact-grid">{facts.map(({ Icon, label, value }, i) => <m.div className="fact-card glass-panel" key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><Icon /><small>{label}</small><strong>{value}</strong></m.div>)}</div></div>
  </section>
}
