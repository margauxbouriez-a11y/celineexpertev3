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
  const [copied, setCopied] = useState(false)
  const [showBar, setShowBar] = useState(false)
  const t = content

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
    founder: {
      '@type': 'Person',
      name: 'Céline Bouriez',
      jobTitle: 'Regulatory Affairs Consultant, PharmD',
      knowsAbout: [
        'Regulatory affairs',
        'Marketing authorisation',
        'CTD dossiers',
        'Regulatory strategy for new products',
        'Medical devices (MDR)',
        'In vitro diagnostic medical devices (IVDR)',
        'Biological and plasma-derived medicinal products',
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
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.nav} aria-label="Navigation">
            <a href="#services">{t.nav.services}</a>
            <a href="#expertise">{t.nav.expertise}</a>
            <a href="#clients">{t.nav.clients}</a>
            <a href="#career">{t.nav.career}</a>
          </nav>
          <div className={styles.headerActions}>
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
                <a className={styles.textLink} href="#services">
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
                  alt="Portrait of Céline Bouriez"
                  width="296"
                  height="296"
                />
                <figcaption>
                  <strong>{t.hero.years}+</strong>
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

        <section className={styles.figures} aria-label="Key figures">
          {t.figures.map((f) => (
            <div key={f.label} className={styles.figure}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </div>
          ))}
        </section>

        <section className={`${styles.section} ${styles.dark}`} id="services" data-reveal>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{t.services.eyebrow}</p>
            <h2>
              <TwoLine lines={t.services.title} />
            </h2>
            <p className={styles.intro}>{t.services.intro}</p>
          </div>
          <article className={styles.featured}>
            <div>
              <span className={styles.tag}>{t.services.featured.tag}</span>
              <h3>{t.services.featured.title}</h3>
              <p>{t.services.featured.text}</p>
            </div>
            <ul className={styles.featuredPoints}>
              {t.services.featured.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
          <div className={styles.missionGrid}>
            {t.services.items.map((m) => (
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

        <section className={styles.section} id="career" data-reveal>
          <div className={styles.careerIntro}>
            <div className={styles.bigNumber}>
              {t.hero.years}<span>+</span>
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
              <ul className={styles.marketList}>
                {t.career.markets.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
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
