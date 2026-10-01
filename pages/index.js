```jsx
import Head from 'next/head'
import styles from '../styles/home.module.css'

const BASE_PATH = '/celineexpertev3'

function Home() {
  return (
    <>
      <Head>
        <title>Céline Bouriez | Healthcare Regulatory Affairs</title>
        <meta
          name="description"
          content="Regulatory affairs consulting for the market entry of medicines, medical devices and IVDs in France and internationally."
        />
        <meta name="theme-color" content="#142640" />
      </Head>

      <header className={styles.header}>
        <a className={styles.brand} href="#home" aria-label="Céline Bouriez, home">
          <span className={styles.brandMark}>CB</span>
          <span className={styles.brandName}>Regulatory Affairs</span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#expertise">Expertise</a>
          <a href="#approach">Approach</a>
          <a href="#education">Education</a>
          <a href="#career">Career</a>
        </nav>

        <a className={styles.headerCta} href="#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="home">

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span /> Independent regulatory affairs consulting
              </p>

              <h1>
                Regulatory clarity.
                <br />
                <em>Confident market access.</em>
              </h1>

              <p className={styles.lede}>
                From first strategy to approval, I help teams bring medicines,
                biologics, medical devices and IVDs to market with clear advice
                and rigorous regulatory submissions.
              </p>

              <div className={styles.credentials}>
                <span>Doctor of Pharmacy</span>
                <span>Residency in Industrial Pharmacy</span>
                <span>Postgraduate Diploma in Health Law</span>
              </div>

              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#contact">
                  Let’s discuss your project <span aria-hidden="true">↗</span>
                </a>

                <a className={styles.textLink} href="#expertise">
                  Explore my expertise <span aria-hidden="true">↓</span>
                </a>
              </div>

              <p className={styles.experienceNote}>
                18 years in industry across medicines, biologics and medical devices
              </p>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroPortraitCard}>
                <span className={styles.portraitLabel}>Céline Bouriez</span>

                <img
                  className={styles.heroImage}
                  src={`${BASE_PATH}/celine-bouriez.png`}
                  alt="Céline Bouriez, healthcare regulatory affairs consultant"
                />

                <div className={styles.portraitMeta}>
                  <strong>18+</strong>
                  <span>years in regulatory affairs</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PRODUCT GALLERY */}
        <section className={styles.productGallery} aria-label="Areas of regulatory expertise">

          <div className={styles.galleryHeading}>
            <p className={styles.eyebrow}>
              Cross-functional regulatory expertise
            </p>

            <h2>
              A clear route to market
              <br />
              <em>for every product.</em>
            </h2>

            <p className={styles.galleryIntro}>
              Regulatory strategy and submission support for medicines,
              biologics, medical devices and in vitro diagnostics, from
              development through market authorisation.
            </p>
          </div>

          <div className={styles.productGrid}>

            <figure className={styles.productFigure}>
              <img
                src={`${BASE_PATH}/medicine-tablets.jpg`}
                alt="Medicinal tablets and capsules"
              />
              <figcaption>
                <strong>Medicines &amp; biologics</strong>
              </figcaption>
            </figure>

            <figure className={styles.productFigure}>
              <img
                src={`${BASE_PATH}/pharmaceutical-research.jpg`}
                alt="Medical device product development"
              />
              <figcaption>
                <strong>Medical devices</strong>
              </figcaption>
            </figure>

            <
```
