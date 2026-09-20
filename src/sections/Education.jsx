import { m } from 'framer-motion'
import { GraduationCap, School, CalendarRange } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
export default function Education({ data }) { const edu = data.education; return <section id="education" className="section section-pad"><SectionHeading eyebrow="07 / EDUCATION" title="Built on a computer science foundation." />
 <m.article className="education-card glass-panel" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div className="edu-icon"><GraduationCap /></div><div className="edu-content"><p><School size={15} /> {edu.university}</p><h3>{edu.degree}</h3><span><CalendarRange size={15} /> {edu.years}</span></div><div className="edu-corner">EDU / 01</div></m.article></section> }
