import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, ChevronDown, ExternalLink, Mail, MapPin, Menu, Moon, Send, Sparkles, Sun, X } from 'lucide-react'
import { experience, skills, timeline } from './data/profile'

const links = [
  ['About', '#about'], ['Journey', '#journey'], ['Experience', '#experience'], ['Skills', '#skills'], ['Connect', '#contact'],
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [light, setLight] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className={light ? 'site light' : 'site'}>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className={scrolled ? 'nav nav-scrolled' : 'nav'}>
      <a href="#top" className="brand" aria-label="Go to top">SK<span>.</span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <div className="nav-actions">
        <button className="icon-button" onClick={() => setLight(!light)} aria-label="Toggle colour theme">{light ? <Moon size={18}/> : <Sun size={18}/>}</button>
        <button className="menu icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Available for meaningful opportunities</p>
          <h1>Thoughtful operations.<br/><em>Lasting impact.</em></h1>
          <p className="hero-intro">Hi, I’m <strong>Kasireddy Sai Kiran</strong> — a Commercial P&amp;C Insurance professional bringing together underwriting operations, quality, and a relentless curiosity to improve how work gets done.</p>
          <div className="hero-cta">
            <a className="button primary" href="#contact">Let’s connect <ArrowDownRight size={18}/></a>
            <a className="button secondary" href="mailto:saikirankasireddy@yahoo.com">Email me <Mail size={17}/></a>
          </div>
        </div>
        <div className="hero-art" aria-label="SK monogram illustration">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="grid"/>
          <div className="monogram">SK</div>
          <div className="hero-note note-top"><Sparkles size={15}/><span>Continuous learner</span></div>
          <div className="hero-note note-bottom"><span className="pulse"/> Visakhapatnam, India</div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><ChevronDown size={17}/></div>
      </section>

      <section className="metrics section-shell" aria-label="Career highlights">
        <div><strong>4+</strong><span>Years of professional experience</span></div>
        <div><strong>P&amp;C</strong><span>Insurance operations focus</span></div>
        <div><strong>2</strong><span>Languages: English &amp; Telugu</span></div>
        <div><strong>∞</strong><span>Curiosity for better ways of working</span></div>
      </section>

      <section id="about" className="section-shell split-section">
        <p className="section-index">01 / ABOUT</p>
        <div className="section-content">
          <p className="eyebrow">More than a job title</p>
          <h2>I look for the <em>why</em><br/>behind the work.</h2>
          <p className="lead">I enjoy understanding complex systems, solving operational challenges, and making dependable work even better. My career has brought together insurance operations, quality, process thinking, and technology — with a focus on learning continuously and contributing with care.</p>
          <div className="traits">
            {['Curious by nature', 'Quality minded', 'Independent explorer', 'Loyal teammate', 'Root-cause thinker', 'Always learning'].map((trait, i) => <span key={trait}><b>0{i + 1}</b>{trait}</span>)}
          </div>
        </div>
      </section>

      <section id="journey" className="section-shell journey">
        <div className="section-heading"><div><p className="section-index">02 / JOURNEY</p><h2>A career built<br/>one <em>step</em> at a time.</h2></div><p>From technical foundations to insurance operations, every chapter has strengthened my ability to learn, adapt, and deliver.</p></div>
        <div className="timeline">{timeline.map((item, i) => <article key={item.title} className="timeline-item"><div className="timeline-line"><span>{String(i + 1).padStart(2, '0')}</span></div><p>{item.period}</p><h3>{item.title}</h3><span>{item.detail}</span></article>)}</div>
      </section>

      <section id="experience" className="section-shell experience-section">
        <div className="section-heading"><div><p className="section-index">03 / EXPERIENCE</p><h2>Creating confidence<br/>in <em>complexity.</em></h2></div><a href="#contact" className="text-link">Discuss my experience <ArrowUpRight size={17}/></a></div>
        <div className="experience-list">{experience.map((role, i) => <article className="experience-card" key={role.company}>
          <div className="role-number">0{i+1}</div><div className="role-main"><p>{role.period}</p><h3>{role.company}</h3><h4>{role.role}</h4><p className="description">{role.description}</p></div><div className="role-tags">{role.focus.map(f => <span key={f}>{f}</span>)}</div>
        </article>)}</div>
      </section>

      <section id="skills" className="section-shell skills-section">
        <p className="section-index">04 / EXPERTISE</p><div className="skills-intro"><h2>Built on domain<br/><em>knowledge</em> &amp; curiosity.</h2><p>Capabilities that connect operational excellence with business understanding and evolving technology.</p></div>
        <div className="skill-grid">{skills.map((group, index) => <article key={group.name} className={'skill-card skill-' + index}><span className="skill-number">0{index+1}</span><h3>{group.name}</h3><div>{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="section-shell quote-section"><p className="eyebrow">Career direction</p><blockquote>“I aspire to contribute where innovation, operational excellence, and continuous improvement are valued — while growing into leadership in a global environment.”</blockquote><span>— Kasireddy Sai Kiran</span></section>

      <section id="contact" className="section-shell contact-section">
        <p className="section-index">05 / CONNECT</p>
        <div className="contact-main"><p className="eyebrow">Start a conversation</p><h2>Let’s build<br/>something <em>better.</em></h2><a className="contact-email" href="mailto:saikirankasireddy@yahoo.com">saikirankasireddy@yahoo.com <ArrowUpRight/></a></div>
        <div className="contact-details"><a href="https://www.linkedin.com/in/saikirankasireddy" target="_blank" rel="noreferrer"><BriefcaseBusiness/> LinkedIn <ArrowUpRight size={16}/></a><a href="https://github.com/saikirankasireddy" target="_blank" rel="noreferrer"><ExternalLink/> GitHub <ArrowUpRight size={16}/></a><span><MapPin/> Visakhapatnam, India</span><a href="tel:+919966663721"><Send/> +91 99666 63721</a></div>
      </section>
    </main>
    <footer><a className="brand" href="#top">SK<span>.</span></a><span>© {new Date().getFullYear()} Kasireddy Sai Kiran</span><a href="#top">Back to top <ArrowUpRight size={14}/></a></footer>
  </div>
}
