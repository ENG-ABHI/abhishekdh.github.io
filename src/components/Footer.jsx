import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'

export default function Footer({ data }) {
  const social = [{ icon: Code2, url: data.social.github, label: 'GitHub' }, { icon: BriefcaseBusiness, url: data.social.linkedin, label: 'LinkedIn' }, { icon: Mail, url: `mailto:${data.social.email}`, label: 'Email' }]
  return <footer><div className="footer-line" /><div className="footer-content"><p>© 2026 {data.name}</p><p>Building intelligent systems at the intersection of language and vision.</p><div className="footer-social">{social.map(({ icon: Icon, url, label }) => <a key={label} href={url} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={label}><Icon size={17} /></a>)}</div></div></footer>
}
