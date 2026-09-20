import { m } from 'framer-motion'
import { Eye, MessageSquare, ScanLine, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
const iconMap = { message: MessageSquare, eye: Eye, sparkles: Sparkles, scan: ScanLine }
export default function ResearchDirection({ data }) { return <section id="research" className="section section-pad research-section"><SectionHeading eyebrow="05 / RESEARCH DIRECTION" title="Where I’m exploring." align="center" copy="A set of connected questions that keeps my work moving forward." />
 <div className="research-grid">{data.research.map((area, i) => { const Icon = iconMap[area.icon] || Sparkles; return <m.article className="research-card" key={area.title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={{ y: -7 }}><div className="research-icon"><Icon /></div><span>0{i + 1} · {area.label}</span><h3>{area.title}</h3><p>{area.description}</p><div className="research-line" /></m.article> })}</div></section> }
