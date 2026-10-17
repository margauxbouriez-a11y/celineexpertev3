import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/home.module.css'
import content, { EMAIL } from '../content'

const BASE = '/celineexpertev3'
const SITE_URL = 'https://margauxbouriez-a11y.github.io/celineexpertev3/'
const pad = (n) => String(n + 1).padStart(2, '0')

function TwoLine({ lines }) {
  return (
    <>
      {lines[0]}
      <br />
      <em>{lines[1]}</em>
    </>
  )
}

function Brand() {
  return (
    <a className={styles.brand} href="#home" aria-label="Céline Bouriez">
      <span className={styles.brandMark}>CB</span>
      <span className={styles.brandText}>
        <strong>Céline Bouriez</strong>
        <span>Regulatory Affairs · PharmD</span>
      </span>
    </a>
  )
}

export default function Home() {
  const [lang, setLang] = useState('fr')
  const [copied, setCopied] = useState(false)
  const [showBar, setShowBar] = useState(false)
  const t = content[lang]

  useEffect(() => {
    let initial = null
    try {
      initial = window.localStorage.getItem('lang')
    } catch (e) {}
    if (initial !== 'fr' && initial !== 'en') {
      initial = (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en'
    }
    setLang(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Apparition douce des sections au défilement + barre d'action mobile
  useEffect(() => {
    const root = document.documentElement
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    let io
    if ('IntersectionObserver' in window) {
      root.classList.add('reveal-ready')
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible')
              io.unobserve(e.target)
            }
          })
        },
        { rootMargin: '0px 0px -10% 0px' }
      )
      els.forEach((el) => io.observe(el))
    }
    const contact = document.getElementById('contact')
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7
      const atContact = contact && contact.getBoundingClientRect().top < window.innerHeight
      setShowBar(pastHero && !atContact)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (io) io.disconnect()
    }
  }, [])

  const switchLang = (next) => {
    setLang(next)
    try {
      window.localStorage.setItem('lang', next)
    } catch (e) {}
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch (e) {}
  }

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(t.contact.subject)}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Céline Bouriez — Regulatory Affairs Consulting',
    url: SITE_URL,
    email: EMAIL,
    image: `${SITE_URL}celine-bouriez.png`,
    areaServed: ['France', 'Europe', 'United States', 'Asia'],
    founder: {
      '@type': 'Person',
      name: 'Céline Bouriez',
      jobTitle: 'Regulatory Affairs Consultant, PharmD',
      knowsAbout: [
        'Regulatory affairs',
        'Marketing authorisation',
        'CTD dossiers',
        'Medical devices',
        'In vitro diagnostics',
        'Biologics',
      ],
    },
  }

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d1c31" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:image" content={`${SITE_URL}celine-bouriez.png`} />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href={`${BASE}/favicon.svg`} type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <a className={styles.skip} href="#main">
        {lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.nav} aria-label="Navigation">
            <a href="#expertise">{t.nav.expertise}</a>
            <a href="#clients">{t.nav.clients}</a>
            <a href="#missions">{t.nav.missions}</a>
            <a href="#career">{t.nav.career}</a>
          </nav>
          <div className={styles.headerActions}>
            <div className={styles.langSwitch} role="group" aria-label={t.nav.langLabel}>
              {['fr', 'en'].map((l) => (
                <button
                  key={l}
                  type="button"
                  aria-pressed={lang === l}
                  className={lang === l ? styles.langActive : undefined}
                  onClick={() => switchLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a className={styles.headerCta} href="#contact">
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} id="home">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <a className={styles.badge} href="#contact">
                <span className={styles.dot} aria-hidden="true" /> {t.hero.badge}
              </a>
              <p className={styles.eyebrow}>
                <span className={styles.rule} /> {t.hero.eyebrow}
              </p>
              <h1>
                <TwoLine lines={t.hero.title} />
              </h1>
              <p className={styles.lede}>{t.hero.lede}</p>
              <ul className={styles.credentials}>
                {t.hero.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#contact">
                  {t.hero.primary} <span aria-hidden="true">→</span>
                </a>
                <a className={styles.textLink} href="#expertise">
                  {t.hero.secondary} <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className={styles.formats}>{t.hero.formats}</p>
            </div>

            <div className={styles.heroVisual}>
              <figure className={styles.portrait}>
                <span className={styles.portraitLabel}>{t.hero.portraitLabel}</span>
                <img
                  src={`${BASE}/celine-bouriez.png`}
                  alt={lang === 'fr' ? 'Portrait de Céline Bouriez' : 'Portrait of Céline Bouriez'}
                  width="296"
                  height="296"
                />
                <figcaption>
                  <strong>18+</strong>
                  <span>{t.hero.portraitStat}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.proof} aria-label={t.proof.label}>
          <span className={styles.proofLabel}>{t.proof.label}</span>
          <ul className={styles.proofList}>
            {t.proof.names.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>

        <section className={styles.figures} aria-label={lang === 'fr' ? 'Chiffres clés' : 'Key figures'}>
          {t.figures.map((f) => (
            <div key={f.label} className={styles.figure}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </div>
          ))}
        </section>

        <section className={styles.section} aria-labelledby="pains-title" data-reveal>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{t.pains.eyebrow}</p>
            <h2 id="pains-title">
              <TwoLine lines={t.pains.title} />
            </h2>
          </div>
          <div className={styles.painGrid}>
            {t.pains.items.map((p, i) => (
              <article key={p.problem} className={styles.pain}>
                <span className={styles.num}>{pad(i)}</span>
                <h3>{p.problem}</h3>
                <p>
                  <span className={styles.arrow} aria-hidden="true">→</span> {p.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.tinted}`} id="expertise" data-reveal>
          <div className={styles.split}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>{t.expertise.eyebrow}</p>
              <h2>
                <TwoLine lines={t.expertise.title} />
              </h2>
              <p className={styles.intro}>{t.expertise.intro}</p>
            </div>
            <div className={styles.serviceGrid}>
              {t.expertise.items.map((s, i) => (
                <article key={s.title} className={styles.service}>
                  <span className={styles.num}>{pad(i)}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="clients" data-reveal>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{t.clients.eyebrow}</p>
            <h2>
              <TwoLine lines={t.clients.title} />
            </h2>
          </div>
          <div className={styles.clientGrid}>
            {t.clients.items.map((c) => (
              <article key={c.title} className={styles.client}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.dark}`} id="missions" data-reveal>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{t.missions.eyebrow}</p>
            <h2>
              <TwoLine lines={t.missions.title} />
            </h2>
          </div>
          <div className={styles.missionGrid}>
            {t.missions.items.map((m) => (
              <article key={m.title} className={styles.mission}>
                <span className={styles.tag}>{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>
          <a className={styles.primaryButton} href="#contact">
            {t.hero.primary} <span aria-hidden="true">→</span>
          </a>
        </section>

        <section className={styles.section} aria-labelledby="strengths-title" data-reveal>
          <div className={styles.split}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>{t.strengths.eyebrow}</p>
              <h2 id="strengths-title">
                <TwoLine lines={t.strengths.title} />
              </h2>
            </div>
            <div className={styles.strengthGrid}>
              {t.strengths.items.map((s) => (
                <article key={s.title} className={styles.strength}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.banner} data-reveal>
          <div>
            <h2>{t.banner.title}</h2>
            <p>{t.banner.text}</p>
          </div>
          <a className={styles.primaryButton} href="#contact">
            {t.banner.button} <span aria-hidden="true">→</span>
          </a>
        </section>

        <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="approach-title" data-reveal>
          <div className={styles.split}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>{t.approach.eyebrow}</p>
              <h2 id="approach-title">
                <TwoLine lines={t.approach.title} />
              </h2>
              <p className={styles.intro}>{t.approach.intro}</p>
            </div>
            <ol className={styles.steps}>
              {t.approach.steps.map((s, i) => (
                <li key={s.title} className={styles.step}>
                  <span className={styles.num}>{pad(i)}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.section} id="career" data-reveal>
          <div className={styles.careerIntro}>
            <div className={styles.bigNumber}>
              18<span>+</span>
            </div>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>{t.career.eyebrow}</p>
              <h2>
                <TwoLine lines={t.career.title} />
              </h2>
              <p className={styles.intro}>{t.career.intro}</p>
            </div>
            <div className={styles.regions}>
              <span>{t.career.marketsLabel}</span>
              <strong>{t.career.markets.join(' · ')}</strong>
            </div>
          </div>

          <div className={styles.experienceGroups}>
            <div>
              <p className={styles.groupLabel}>{t.career.industryLabel}</p>
              {t.career.industry.map((e) => (
                <article key={e.name} className={styles.careerEntry}>
                  <div>
                    <h3>{e.name}</h3>
                    <p>{e.role}</p>
                  </div>
                  <span>{e.duration}</span>
                </article>
              ))}
            </div>
            <div>
              <p className={styles.groupLabel}>{t.career.residencyLabel}</p>
              {t.career.residency.map((e) => (
                <article key={e.name} className={styles.careerEntry}>
                  <div>
                    <h3>{e.name}</h3>
                    <p>{e.role}</p>
                  </div>
                </article>
              ))}
              <p className={`${styles.groupLabel} ${styles.groupLabelSpaced}`}>{t.education.eyebrow}</p>
              {t.education.items.map((e) => (
                <article key={e.title} className={styles.careerEntry}>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{t.contact.eyebrow}</p>
            <h2>
              <TwoLine lines={t.contact.title} />
            </h2>
          </div>
          <div className={styles.contactAction}>
            <p>{t.contact.text}</p>
            <div className={styles.contactButtons}>
              <a className={styles.primaryButton} href={mailto}>
                {t.contact.button} <span aria-hidden="true">→</span>
              </a>
              <button type="button" className={styles.copyButton} onClick={copyEmail}>
                {copied ? t.contact.copied : t.contact.copy}
              </button>
            </div>
            <p className={styles.contactNote}>
              <span className={styles.dot} aria-hidden="true" /> {t.contact.note} · <a href={mailto}>{EMAIL}</a>
            </p>
          </div>
        </section>
      </main>

      <a
        className={`${styles.mobileBar} ${showBar ? styles.mobileBarVisible : ''}`}
        href="#contact"
        aria-hidden={!showBar}
        tabIndex={showBar ? 0 : -1}
      >
        {t.mobileCta} <span aria-hidden="true">→</span>
      </a>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Brand />
          <span>{t.footer.tagline}</span>
          <a href="#home">{t.footer.top}</a>
        </div>
      </footer>
    </>
  )
}
