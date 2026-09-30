import Head from 'next/head'
import styles from '../styles/home.module.css'

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
        <a className={styles.headerCta} href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
      </header>

      <main id="home">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span /> Independent regulatory affairs consulting</p>
              <h1>Regulatory clarity.<br /><em>Confident market access.</em></h1>
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
                <a className={styles.primaryButton} href="#contact">Let’s discuss your project <span aria-hidden="true">↗</span></a>
                <a className={styles.textLink} href="#expertise">Explore my expertise <span aria-hidden="true">↓</span></a>
              </div>
              <p className={styles.experienceNote}>18 years in industry across medicines, biologics and medical devices</p>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroPortraitCard}>
                <span className={styles.portraitLabel}>Céline Bouriez</span>
                <img
                  className={styles.heroImage}
                  src="/celine-bouriez.png"
                  alt="Céline Bouriez, healthcare regulatory affairs consultant"
                  onError={(event) => { event.currentTarget.style.display = 'none' }}
                />
                <div className={styles.portraitMeta}>
                  <strong>18+</strong>
                  <span>years in regulatory affairs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productGallery} aria-label="Areas of regulatory expertise">
          <div className={styles.galleryHeading}>
            <p className={styles.eyebrow}>Cross-functional regulatory expertise</p>
            <h2>A clear route to market<br /><em>for every product.</em></h2>
            <p className={styles.galleryIntro}>Regulatory strategy and submission support for medicines, biologics, medical devices and in vitro diagnostics, from development through market authorisation.</p>
          </div>
          <div className={styles.productGrid}>
            <figure className={styles.productFigure}>
              <img src="/medicine-tablets.jpg" alt="Medicinal tablets and capsules" />
              <figcaption><strong>Medicines &amp; biologics</strong></figcaption>
            </figure>
            <figure className={styles.productFigure}>
              <img src="/pharmaceutical-research.jpg" alt="Medical device product development" />
              <figcaption><strong>Medical devices</strong></figcaption>
            </figure>
            <figure className={styles.productFigure}>
              <img src="/healthcare-products.jpg" alt="Healthcare research in a diagnostic laboratory" />
              <figcaption><strong>In vitro diagnostics</strong></figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.expertise} id="expertise">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Support tailored to your objectives</p>
            <h2>The right regulatory strategy,<br /><em>at the right time.</em></h2>
          </div>
          <div className={styles.serviceList}>
            <article className={styles.service}>
              <span className={styles.serviceNumber}>01</span>
              <div>
                <h3>Market entry</h3>
                <p>A clear route to market, the right regulatory pathway and focused support through approval.</p>
              </div>
              <span className={styles.serviceArrow} aria-hidden="true">↗</span>
            </article>
            <article className={styles.service}>
              <span className={styles.serviceNumber}>02</span>
              <div>
                <h3>Regulatory submissions &amp; compliance</h3>
                <p>Submission-ready dossiers built on coherent evidence, rigorous review and a clear regulatory narrative.</p>
              </div>
              <span className={styles.serviceArrow} aria-hidden="true">↗</span>
            </article>
            <article className={styles.service}>
              <span className={styles.serviceNumber}>03</span>
              <div>
                <h3>Regulatory affairs support</h3>
                <p>Experienced, hands-on support that helps teams resolve questions and keep critical milestones on track.</p>
              </div>
              <span className={styles.serviceArrow} aria-hidden="true">↗</span>
            </article>
          </div>
        </section>

        <section className={styles.approach} id="approach">
          <div className={styles.approachIntro}>
            <p className={styles.eyebrow}>A clear process, a direct conversation</p>
            <h2>Move forward<br /><em>with clarity.</em></h2>
            <p>Every product, market and team has its own needs. I tailor my support to your objectives, turning regulatory complexity into clear, practical decisions.</p>
          </div>
          <div className={styles.steps}>
            <div className={styles.step}><span>01</span><div><h3>Understand</h3><p>Clarify the product, objectives and timeline to establish a shared assessment.</p></div></div>
            <div className={styles.step}><span>02</span><div><h3>Plan</h3><p>Build a regulatory roadmap aligned with requirements, priorities and available resources.</p></div></div>
            <div className={styles.step}><span>03</span><div><h3>Deliver</h3><p>Prepare robust submissions and support their progress through to a decision.</p></div></div>
          </div>
        </section>

        <section className={styles.qualifications} id="education">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Education &amp; specialist training</p>
            <h2>A scientific and legal<br /><em>foundation.</em></h2>
          </div>
          <div className={styles.qualificationList}>
            <article className={styles.qualification}>
              <span>01</span>
              <h3>Doctor of Pharmacy</h3>
              <p>A rigorous scientific foundation in medicines and healthcare.</p>
            </article>
            <article className={styles.qualification}>
              <span>02</span>
              <h3>Hospital Residency in Pharmacy<br />Industrial Pharmacy</h3>
              <p>Specialist university-hospital training, with placements at Servier, Sanofi and France’s medicines agency, ANSM.</p>
            </article>
            <article className={styles.qualification}>
              <span>03</span>
              <h3>Postgraduate Diploma in Health Law (DESS)</h3>
              <p>Legal specialisation in the regulation of medicines and healthcare products.</p>
            </article>
          </div>
        </section>

        <section className={styles.career} id="career">
          <div className={styles.careerIntro}>
            <div className={styles.backgroundNumber}>18<span>+</span></div>
            <div className={styles.careerHeading}>
              <p className={styles.eyebrow}>Professional experience</p>
              <h2>18 years in regulatory affairs,<br /><em>on the industry side.</em></h2>
              <p>From specialist residency to senior regulatory roles, my experience spans medicines, biological products and medical devices.</p>
            </div>
            <div className={styles.regions}>
              <span>Markets supported</span>
              <strong>France <i>·</i> Europe <i>·</i><br />United States <i>·</i> Asia</strong>
            </div>
          </div>
          <div className={styles.experienceGroups}>
            <div className={styles.experienceGroup}>
              <p className={styles.eyebrow}>Industrial pharmacy residency</p>
              <article className={styles.careerEntry}>
                <div><h3>Laboratoires Servier</h3><p>Industrial pharmacy residency placement</p></div>
              </article>
              <article className={styles.careerEntry}>
                <div><h3>Sanofi</h3><p>Industrial pharmacy residency placement</p></div>
              </article>
              <article className={styles.careerEntry}>
                <div><h3>ANSM</h3><p>Residency placement at the French National Agency for Medicines and Health Products Safety</p></div>
              </article>
            </div>
            <div className={styles.experienceGroup}>
              <p className={styles.eyebrow}>Industry</p>
              <article className={styles.careerEntry}>
                <div><h3>Macopharma</h3><p>Regulatory Affairs Pharmacist · Fixed-term contract</p></div><span>6 months</span>
              </article>
              <article className={styles.careerEntry}>
                <div><h3>LFB</h3><p>Regulatory Affairs Pharmacist</p></div><span>3.5 years</span>
              </article>
              <article className={styles.careerEntry}>
                <div><h3>Delpharm</h3><p>Regulatory Affairs Associate</p></div><span>18 months</span>
              </article>
              <article className={styles.careerEntry}>
                <div><h3>SERB</h3><p>Interim Responsible Pharmacist / Senior Regulatory Affairs Associate</p></div><span>5 years 9 months</span>
              </article>
              <article className={styles.careerEntry}>
                <div><h3>Genefit</h3></div><span>1.5 years</span>
              </article>
              <article className={styles.careerEntry}>
                <div><h3>Diagast</h3></div><span>5.5 years</span>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <div>
            <p className={styles.eyebrow}>Have a project to move forward?</p>
            <h2>Let’s start<br /><em>a conversation.</em></h2>
          </div>
          <div className={styles.contactAction}>
            <p>Tell me about your objectives, timelines and the regulatory context for your product.</p>
            <a href="mailto:celinebouriez@gmail.com">Email Céline <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#home">
          <span className={styles.brandMark}>CB</span>
          <span className={styles.brandName}>Regulatory Affairs</span>
        </a>
        <span>Independent healthcare regulatory affairs consultant</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default Home