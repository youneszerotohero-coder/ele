import { useState } from 'react'
import './App.css'
import project1 from '../projects-images/project1.jpeg'
import project2 from '../projects-images/project2.jpeg'
import project3 from '../projects-images/project3.jpeg'
import project4 from '../projects-images/project4.jpeg'
import project5 from '../projects-images/project5.jpeg'

const serviceGroups = [
  {
    title: 'Electrical engineering studies',
    summary:
      'Network modeling, protection studies, and design support for critical infrastructure.',
    points: [
      'Load flow, short-circuit, coordination, and selectivity studies',
      'Grid Code compliance reviews for utility-connected projects',
      'ETAP and DIgSILENT-based modeling for industrial electrical systems',
    ],
  },
  {
    title: 'HT / MT substations',
    summary:
      'Installation, testing, and commissioning for substations and transformer stations.',
    points: [
      'Design assistance for HT and MT substations',
      'Protection relay configuration, secondary tests, and energization procedures',
      'Interface support with SONELGAZ and GRTE requirements',
    ],
  },
  {
    title: 'Low-voltage systems',
    summary: 'Reliable AC/DC auxiliary systems, panels, cabling, and grounding works.',
    points: [
      'LV switchboards, compensation cabinets, and electrical enclosures',
      'Cable routing, terminations, and site installation supervision',
      'Renovation, surge protection, and grounding improvements',
    ],
  },
  {
    title: 'Generators and backup power',
    summary:
      'Emergency power installation, rental, servicing, and lifecycle maintenance.',
    points: [
      'Generator supply and installation for all power ranges',
      'Preventive maintenance and repair for backup energy equipment',
      'Fast-response support for continuity-sensitive operations',
    ],
  },
]

const sectors = [
  'Industrial facilities',
  'Public infrastructure',
  'Utility-connected substations',
  'Photovoltaic power plants',
]

const projects = [
  {
    image: project5,
    tag: 'HV infrastructure',
    title: 'Substation and transformer installation',
    text: 'Execution support for high-voltage equipment, grounding networks, and final energization readiness.',
  },
  {
    image: project4,
    tag: 'MT systems',
    title: 'Medium-voltage switchgear rooms',
    text: 'Installation and verification of protected switchgear lines built for controlled, safe operation.',
  },
  {
    image: project1,
    tag: 'Transformer rooms',
    title: 'Integrated transformer and panel setup',
    text: 'Combined transformer, cabling, and distribution works delivered for dependable site power distribution.',
  },
  {
    image: project2,
    tag: 'Cable routing',
    title: 'Heavy-duty connection and routing works',
    text: 'Complex cable management and transformer connections organized for industrial reliability.',
  },
  {
    image: project3,
    tag: 'Distribution',
    title: 'Protected MV distribution boards',
    text: 'Neat, serviceable switchgear installation prepared for pre-commissioning and operational validation.',
  },
]

const highlights = [
  {
    value: 'HT / MT / BT',
    label: 'complete electrical coverage from studies to commissioning',
  },
  {
    value: '20+',
    label: 'major public and industrial references across Algeria',
  },
  {
    value: '30kV / 10kV / 5.5kV',
    label: 'network environments supported by Saleg teams',
  },
]

function App() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Saleg home">
          <img src="/salegLogo.png" alt="Saleg logo" />
          <div>
            <strong>saleg</strong>
            <span>Electrical engineering & power systems</span>
          </div>
        </a>

        <nav className="topnav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-backdrop">
            <img src={project5} alt="Saleg electrical infrastructure project" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Algeria-based industrial electrical specialist</p>
            <h1>Power systems expertise for demanding infrastructure projects</h1>
            <p className="hero-text">
              Saleg delivers electrical engineering, HT/MT/BT installation, protection
              systems, commissioning, and backup power solutions for industrial,
              institutional, and energy-sector projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Request a consultation
              </a>
              <a className="button button-secondary" href="#services">
                Explore services
              </a>
            </div>

            <ul className="hero-pills" aria-label="Key offers">
              <li>Substations</li>
              <li>Protection studies</li>
              <li>PV commissioning</li>
              <li>Generator systems</li>
            </ul>
          </div>

          <div className="hero-collage" aria-hidden="true">
            <figure className="collage-card card-large">
              <img src={project4} alt="" />
            </figure>
            <figure className="collage-card card-small">
              <img src={project1} alt="" />
            </figure>
            <div className="accent-block accent-red"></div>
            <div className="accent-block accent-sand"></div>
            <div className="accent-block accent-blue"></div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-visual">
            <div className="about-frame">
              <img src={project2} alt="Transformers and power cabling by Saleg" />
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">About Saleg</p>
            <h2>Built for reliable execution in critical electrical environments</h2>
            <p>
              SALEG is an Algerian company focused on industrial electrical systems,
              from engineering studies through installation and commissioning. The team
              supports EPC contractors, utilities, and public institutions with safe,
              compliant, and well-coordinated electrical delivery.
            </p>
            <p>
              Our portfolio covers transformer stations, high and medium-voltage
              networks, low-voltage auxiliary systems, renewable energy integration,
              and emergency power continuity.
            </p>
            <a className="button button-primary" href="#projects">
              See selected projects
            </a>
          </div>
        </section>

        <section className="metrics-section" aria-label="Saleg key figures">
          {highlights.map((item) => (
            <article className="metric-card" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="services-section" id="services">
          <div className="services-intro">
            <p className="eyebrow">What we do</p>
            <h2>Technical services for every stage of the electrical scope</h2>
            <p>
              From early studies and protection coordination to field installation and
              energization, Saleg adapts its support to the needs of each project.
            </p>
            <a className="button button-secondary" href="#contact">
              Start a project
            </a>

            <div className="service-photo">
              <img src={project3} alt="Medium-voltage equipment installed by Saleg" />
            </div>
          </div>

          <div className="services-accordion">
            {serviceGroups.map((service, index) => {
              const isActive = activeService === index

              return (
                <article
                  className={`service-item${isActive ? ' is-active' : ''}`}
                  key={service.title}
                >
                  <button
                    type="button"
                    className="service-trigger"
                    onClick={() => setActiveService(index)}
                    aria-expanded={isActive}
                  >
                    <span>{service.title}</span>
                    <span className="service-symbol">{isActive ? '-' : '+'}</span>
                  </button>

                  <div className="service-content">
                    <p>{service.summary}</p>
                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-light">Selected work</p>
              <h2>Project references that reflect Saleg's field capability</h2>
            </div>
            <p className="section-note">
              The company has supported public, industrial, military, and energy-sector
              infrastructure across Algeria, including utility-connected projects and
              complex electrical facilities.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="project-body">
                  <span>{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-section">
          <div className="trust-copy">
            <p className="eyebrow">Why teams choose Saleg</p>
            <h2>Engineering depth backed by practical site execution</h2>
            <blockquote>
              "Saleg combines study capability, installation discipline, and
              commissioning readiness in one delivery partner."
            </blockquote>
            <p className="quote-source">
              Positioning based on the company service portfolio and project references
            </p>
          </div>

          <div className="trust-panel">
            <h3>Sectors supported</h3>
            <ul>
              {sectors.map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
            <p>
              References include national institutions, utilities, EPC partners, and
              large industrial operators across multiple regions in Algeria.
            </p>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <img src={project1} alt="Saleg electrical equipment installation" />
          <div className="cta-overlay">
            <p className="eyebrow eyebrow-light">
              Let's build the next power system right
            </p>
            <h2>Talk to Saleg about studies, installation, testing, or commissioning</h2>
            <div className="cta-details">
              <p>Bab-Ezzouar, Alger</p>
              <p>020 20 14 69</p>
              <p>+213 661 300 972</p>
              <p>sarlsaleg@yahoo.fr</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>SALEG</strong>
          <p>
            Montage electrique HT/MT/BT, protection systems, generator services, and
            commissioning support for infrastructure projects.
          </p>
        </div>
        <div>
          <strong>Company</strong>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <strong>Services</strong>
          <a href="#services">Engineering studies</a>
          <a href="#services">Electrical installation</a>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="tel:020201469">020 20 14 69</a>
          <a href="mailto:sarlsaleg@yahoo.fr">sarlsaleg@yahoo.fr</a>
        </div>
      </footer>
    </div>
  )
}

export default App
