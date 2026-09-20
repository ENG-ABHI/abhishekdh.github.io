import { m } from 'framer-motion'
import { BrainCircuit, ScanSearch, Sparkles, Waypoints } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
const modules = [
  { name: 'NLP', text: 'Language Understanding', icon: BrainCircuit, pos: 'lab-nlp' },
  { name: 'Computer Vision', text: 'Visual Intelligence', icon: ScanSearch, pos: 'lab-cv' },
  { name: 'RAG', text: 'Knowledge Retrieval', icon: Waypoints, pos: 'lab-rag' },
  { name: 'Generative AI', text: 'Content Generation', icon: Sparkles, pos: 'lab-gen' },
  { name: 'Vision Models', text: 'Visual Reasoning', icon: ScanSearch, pos: 'lab-vm' },
]
export default function AILab() { return <section className="section section-pad ai-lab-section"><SectionHeading eyebrow="06 / AI LABORATORY" title="The connected intelligence stack." align="center" copy="A visual map of the systems and ideas I’m excited to build with." />
 <m.div className="ai-lab glass-panel" initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}><svg className="lab-lines" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true"><path d="M500 310 L160 135 M500 310 L835 135 M500 310 L155 480 M500 310 L830 480 M500 310 L500 550" /><circle cx="500" cy="310" r="4" /><circle cx="160" cy="135" r="3" /><circle cx="835" cy="135" r="3" /><circle cx="155" cy="480" r="3" /><circle cx="830" cy="480" r="3" /><circle cx="500" cy="550" r="3" /></svg><div className="lab-core"><i /><BrainCircuit /><strong>AI</strong><span>LAB</span></div>{modules.map((module, i) => { const Icon = module.icon; return <m.div className={`lab-module ${module.pos}`} key={module.name} animate={{ y: [0, i % 2 ? -5 : 5, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}><Icon /><div><b>{module.name}</b><small>{module.text}</small></div></m.div> })}</m.div>
 </section> }
