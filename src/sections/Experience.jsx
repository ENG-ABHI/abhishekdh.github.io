import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react'
import { m } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function Experience({ data }) {
 return <section id="experience" className="section section-pad"><SectionHeading eyebrow="02 / EXPERIENCE" title="A trajectory in intelligent systems." copy="A growing practice at the intersection of scientific thinking and applied AI." />
 <div className="timeline">{data.experience.map((item, i) => <m.article className="timeline-card glass-panel" key={`${item.company}-${i}`} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }}><div className="timeline-dot"><BriefcaseBusiness size={18} /></div><div className="timeline-top"><span className="timeline-index">0{i + 1}</span><span><CalendarDays size={14} /> {item.period}</span></div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.description}</p><div className="timeline-location"><MapPin size={14} /> Dehradun, India</div></m.article>)}</div></section>
}
