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
        <a
          className={styles.brand}
          href="#home"
          aria-label="Céline Bouriez, home"
        >
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
                <span />
                Independent regulatory affairs consulting
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
                  Let’s discuss your project{' '}
                  <span aria-hidden="true">↗</span>
                </a>

                <a className={styles.textLink} href="#expertise">
                  Explore my expertise{' '}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>

              <p className={styles.experienceNote}>
                18 years in industry across medicines, biologics and medical
                devices
              </p>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroPortraitCard}>
                <span className={styles.portraitLabel}>
                  Céline Bouriez
                </span>

                <img
                  className={styles.heroImage}
                  src="/celineexpertev3/celine-bouriez.png"
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
        <section
          className={styles.productGallery}
          aria-label="Areas of regulatory expertise"
        >
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
                src="/celineexpertev3/medicine-tablets.jpg"
                alt="Medicinal tablets and capsules"
              />
              <figcaption>
                <strong>Medicines &amp; biologics</strong>
              </figcaption>
            </figure>

            <figure className={styles.productFigure}>
              <img
                src="/celineexpertev3/pharmaceutical-research.jpg"
                alt="Medical device product development"
              />
              <figcaption>
                <strong>Medical devices</strong>
              </figcaption>
            </figure>

            <figure className={styles.productFigure}>
              <img
                src="/celineexpertev3/healthcare-products.jpg"
                alt="Healthcare products"
              />
              <figcaption>
                <strong>In vitro diagnostics</strong>
              </figcaption>
            </figure>

          </div>
        </section>

        {/* EXPERTISE */}
        <section
          id="expertise"
          className={styles.section}
        >
          <div className={styles.sectionLabel}>
            <span>01</span>
            <span>Expertise</span>
          </div>

          <div className={styles.sectionContent}>
            <h2>
              Regulatory expertise
              <br />
              <em>with a business perspective.</em>
            </h2>

            <p>
              I support pharmaceutical, biotechnology and medical device
              companies throughout the regulatory pathway, combining scientific
              expertise with a practical understanding of business priorities.
            </p>

            <div className={styles.expertiseGrid}>
              <div>
                <span className={styles.cardNumber}>01</span>
                <h3>Regulatory strategy</h3>
                <p>
                  Market entry strategy, regulatory pathways, classification,
                  development plans and interactions with health authorities.
                </p>
              </div>

              <div>
                <span className={styles.cardNumber}>02</span>
                <h3>Submissions</h3>
                <p>
                  Preparation, review and coordination of regulatory
                  submissions for medicines, biologics, medical devices and
                  IVDs.
                </p>
              </div>

              <div>
                <span className={styles.cardNumber}>03</span>
                <h3>International markets</h3>
                <p>
                  Regulatory support across Europe, the United States and
                  Asian markets, adapting global strategies to local
                  requirements.
                </p>
              </div>

              <div>
                <span className={styles.cardNumber}>04</span>
                <h3>Lifecycle management</h3>
                <p>
                  Post-authorisation activities, variations, renewals,
                  regulatory intelligence and ongoing product compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section
          id="approach"
          className={styles.sectionAlt}
        >
          <div className={styles.sectionLabel}>
            <span>02</span>
            <span>Approach</span>
          </div>

          <div className={styles.sectionContent}>
            <h2>
              Clear advice.
              <br />
              <em>Practical execution.</em>
            </h2>

            <div className={styles.approachGrid}>
              <div>
                <h3>Understand</h3>
                <p>
                  I start by understanding the product, development strategy,
                  business objectives and regulatory context.
                </p>
              </div>

              <div>
                <h3>Define</h3>
                <p>
                  Together we identify the most appropriate regulatory pathway
                  and establish clear priorities and milestones.
                </p>
              </div>

              <div>
                <h3>Deliver</h3>
                <p>
                  I provide hands-on support through submissions, authority
                  interactions and the key decisions required for market access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className={styles.section}
        >
          <div className={styles.sectionLabel}>
            <span>03</span>
            <span>Education</span>
          </div>

          <div className={styles.sectionContent}>
            <h2>
              Scientific expertise,
              <br />
              <em>legal understanding.</em>
            </h2>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <span>01</span>
                <div>
                  <h3>Doctor of Pharmacy</h3>
                  <p>Pharmaceutical sciences and healthcare</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span>02</span>
                <div>
                  <h3>Residency in Industrial Pharmacy</h3>
                  <p>Industry-focused pharmaceutical training</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span>03</span>
                <div>
                  <h3>Postgraduate Diploma in Health Law</h3>
                  <p>Legal and regulatory framework of healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAREER */}
        <section
          id="career"
          className={styles.sectionAlt}
        >
          <div className={styles.sectionLabel}>
            <span>04</span>
            <span>Career</span>
          </div>

          <div className={styles.sectionContent}>
            <h2>
              18 years of
              <br />
              <em>regulatory experience.</em>
            </h2>

            <p>
              Experience spanning pharmaceutical products, biologics, medical
              devices and in vitro diagnostics, with exposure to regulatory
              environments in Europe, the United States and Asia.
            </p>

            <div className={styles.careerHighlight}>
              <strong>18+</strong>
              <span>years of industry experience</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className={styles.contact}
        >
          <div className={styles.contactInner}>
            <p className={styles.eyebrow}>
              <span />
              Start a conversation
            </p>

            <h2>
              Have a regulatory
              <br />
              <em>question?</em>
            </h2>

            <p>
              Whether you are preparing a market entry, developing a new
              product or navigating a regulatory challenge, let’s discuss how
              I can help.
            </p>

            <a
              className={styles.primaryButton}
              href="mailto:contact@celinebouriez.com"
            >
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Céline Bouriez</span>
        <span>Regulatory Affairs Consulting</span>
      </footer>
    </>
  )
}

export default Home
```
