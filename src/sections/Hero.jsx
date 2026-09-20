import { useState } from 'react'
import { m } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, Mail, Orbit, Sparkles } from 'lucide-react'

const roles = ['AI/ML Engineer', 'NLP Enthusiast', 'Computer Vision Enthusiast', 'Generative AI Explorer', 'Vision Models Enthusiast']

function Portrait({ initials }) {
  const [missing, setMissing] = useState(false)
  const photo = `${import.meta.env.BASE_URL}images/profile.jpg`
  return <div className="portrait-cluster" aria-label="Profile photo area">
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <span className="portrait-chip chip-top"><Sparkles size={12} /> AI / ML</span><span className="portrait-chip chip-bottom"><Orbit size={12} /> RESEARCH</span>
    <div className="portrait-frame">{!missing && <img src={photo} alt="Abhishek Dhaulakhandi" onError={() => setMissing(true)} />}{missing && <div className="portrait-placeholder"><span>{initials}</span><small>Add your photo<br />here</small></div>}</div>
    <i className="portrait-ping" />
  </div>
}

export default function Hero({ data }) {
  const socials = [{ Icon: Code2, href: data.social.github, label: 'GitHub' }, { Icon: BriefcaseBusiness, href: data.social.linkedin, label: 'LinkedIn' }, { Icon: Mail, href: `mailto:${data.social.email}`, label: 'Email' }]
  return <section id="home" className="hero section-pad" aria-label="Introduction">
    <div className="hero-copy">
      <m.div className="status-pill" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}><i /> AVAILABLE FOR COLLABORATION</m.div>
      <m.p className="hero-kicker" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }}>HELLO, I’M</m.p>
      <m.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .7 }}>{data.name.split(' ').map((part, index) => <span key={part} className={index ? 'text-gradient' : ''}>{part} </span>)}</m.h1>
      <m.div className="role-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}><span>{data.title}</span><span className="role-separator" /> <span className="role-cycle">{roles.map((role, i) => <b key={role} style={{ animationDelay: `${i * 3}s` }}>{role}</b>)}</span></m.div>
      <m.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }}>{data.tagline}</m.p>
      <m.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .78 }}><span>{data.education.degree} <em /> {data.education.university} <em /> {data.education.years}</span><span>Currently working at <strong>{data.currentOrganization}</strong> since {data.workingSince}.</span></m.div>
      <m.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9 }}><a href="#projects" className="button button-primary">View Projects <ArrowDownRight size={18} /></a><a href="#contact" className="button button-ghost">Let’s Connect <ArrowUpRight size={18} /></a></m.div>
      <m.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>{socials.map(({ Icon, href, label }) => <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer"><Icon size={17} />{label}</a>)}</m.div>
    </div>
    <m.div className="hero-visual" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .35, duration: .8 }}><Portrait initials={data.initials} /></m.div>
    <a className="scroll-note" href="#about"><span /> Scroll to explore</a>
  </section>
}
