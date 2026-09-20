import { m } from 'framer-motion'
import { Braces, Cpu, Database, Eye, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const icons = [Cpu, Braces, Eye, Sparkles, Database]
export default function Skills({ data }) { return <section id="skills" className="section section-pad"><SectionHeading eyebrow="04 / TOOLKIT" title="A multidisciplinary AI toolkit." copy="A focused set of technologies and concepts—without artificial proficiency scores." />
  <div className="skills-grid">{Object.entries(data.skills).map(([category, skills], i) => { const Icon = icons[i]; return <m.article className="skill-card glass-panel" key={category} initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .06 }} whileHover={{ y: -5 }}><div className="skill-card-head"><span><Icon size={20} /></span><h3>{category}</h3><small>0{i + 1}</small></div><div className="skill-list">{skills.map(skill => <span key={skill}><i />{skill}</span>)}</div></m.article> })}</div>
 </section> }
