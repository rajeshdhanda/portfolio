import Link from 'next/link'

const heroLinks = [
  { label: 'What Leadership Says', href: '/recognition', external: false },
  { label: 'Recognitions', href: '/recognition', external: false },
  { label: 'AI Hackathons', href: '/hackathons', external: false },
  { label: 'Education', href: '/education', external: false },
  { label: 'Projects', href: '/skills-projects', external: false },
  { label: 'Get in touch', href: '/contact', external: false },
]

const experiences = [
  {
    company: 'HALEON',
    role: 'Senior Machine Learning Engineer',
    tenure: 'Apr 2024 – Present',
    summary: 'Led MLOps & Agentic-RAG foundations for DS and GenAI services on Azure & Databricks across multiple product teams.',
    bullets: [
      'Global Consumer Help Center: AI search across 15+ brand help centers from 400+ brand websites spanning multiple countries, markets & languages — reducing cost and reliance on human agents',
      'Procurement Contract Intelligence: AI-powered platform analyzing 11,000+ Contract IDs covering $7B third-party spend — enabling faster review, compliance visibility & time-cost savings',
      'Commercial Tech: MLOps framework for Marketing Mix Models, scalable, repeatable modeling of brand, market–level sales drivers - used to optimize global marketing spend',
      'MLOps and Agentic-RAG Foundation: Framework with code & detailed docs, used across Help Center, Contract AI, NRM, NBA, QSC and Commercial Tech projects',
    ],
    detailUrl: '/experience/haleon',
  },
  {
    company: 'CARS24',
    role: 'Machine Learning Engineer',
    tenure: 'Sept 2021 – Apr 2024',
    summary: 'Productionized DS, Data Engg, and BI services/pipelines on GCP (GKE, KServe, Triton, Airflow), implementing best practices, monitoring and cost optimization.',
    bullets: [
      'ML Platform — Serving: Migrated 30+ DS workloads to GKE; Inference Store: EdgeDB with 5ms latency across 10+ services; Feature Store: FastAPI + BigQuery + Redis with 10ms latency',
      'Orchestration Platform: Airflow on GKE — 70+ git-synced DAGs, 1000+ daily runs, 3800+ task executions supporting DS-BI teams',
      'Data Flow Pipeline: Syncing Data 2500 Sheets with 15000 Jobs/day. (Refer to Detailed <a href="https://medium.com/cars24-data-science-blog/upgrading-data-flow-pipeline-cars24-1b6b8aea48e" target="_blank" rel="noopener noreferrer">Blog</a> got cited in <a href="https://www.linkedin.com/posts/moderndatastack_optimizing-data-flow-cars24-activity-7026209461774016513-vJSR/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">Modern Data Stack</a> and <a href="https://www.dataengineeringweekly.com/i/96964228/cars-upgrading-data-flow-pipeline-at-cars" target="_blank" rel="noopener noreferrer">Data Engineering Weekly</a>)',
      'NBFC DS Migration: AWS → GCP, monolith → GKE microservices, latency from 3s to 503ms (99.99%), eliminating 100% timeouts previously at 8–9%',
    ],
    detailUrl: '/experience/cars24',
  },
  {
    company: 'DEEP SIGHT AI LABS / DOCBOT+',
    role: 'Computer Vision & AI Internships',
    tenure: 'Mar – Sept 2021',
    summary: 'Object detection & tracking (DeepSort), healthcare symptom mapping algorithms, TFLite on Raspberry Pi.',
    bullets: [
      'Deep Sight AI Labs: Vehicle detection, tracking & counting using YOLOv4 + DeepSort on traffic surveillance footage',
      'DocBot+: Healthcare symptom-to-disease mapping algorithms, TFLite model deployment on Raspberry Pi for edge inference',
    ],
    detailUrl: '/experience/internships',
  },
]

const skills = [
  { label: 'Frameworks', values: 'LangChain, LangGraph, MLflow, Seldon Core & Kubeflow KServe, Nvidia Triton Inference Server' },
  { label: 'MLOps', values: 'CI/CD, GitHub Actions, Databricks Bundles, MLflow, Unity Catalog, Docker, Kubernetes, Helm, Prometheus, Grafana' },
  { label: 'Cloud · Azure', values: 'OpenAI, AI Search, AI Document Intelligence, Blob Storage, ACR, Web App, AI Foundry' },
  { label: 'Cloud · GCP', values: 'GKE, Cloud Build, Cloud Functions, Cloud Run, Cloud Storage, Pub/Sub, Vertex AI, BigQuery, GCR' },
  { label: 'Cloud · Databricks', values: 'Bundles, Unity Catalog, Model Serving, App, Mosaic AI Gateway, Vector Search, Lakebase Postgres' },
]

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="wrap">
          <div>
            <h1>Rajesh Dhanda</h1>
            <div className="hero-sub">Senior Machine Learning Engineer · Haleon &nbsp;·&nbsp; ex-CARS24 &nbsp;·&nbsp; IIT Kanpur &nbsp;·&nbsp; Bengaluru, India</div>
            <div className="hero-actions">
              {/* View Résumé hidden for ATS-friendly print PDF */}
              {heroLinks.map((l) =>
                l.external ? (
                  <a key={l.label} className="pill-link" href={l.href} target="_blank" rel="noopener">{l.label}</a>
                ) : (
                  <Link key={l.label} className="pill-link" href={l.href}>{l.label}</Link>
                )
              )}
            </div>
          </div>
          <svg className="wave" viewBox="0 0 1100 60" preserveAspectRatio="none"><path d="M0,30 C200,60 350,0 550,30 C750,60 900,0 1100,30 L1100,60 L0,60 Z" fill="#333333" opacity="0.06" /></svg>
        </div>
      </header>

      {/* EXPERIENCE */}
      <section id="experience" className="ed-section" style={{ paddingTop: '48px' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-head-row"><span className="sec-tag">Experience</span></div>
          </div>
          {experiences.map((exp) => (
            <div className="exp-card" key={exp.company}>
              <div className="exp-top">
                <div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-role">{exp.role}</div>
                </div>
                <span className="exp-tenure">{exp.tenure}</span>
              </div>
              <p className="exp-summary">{exp.summary}</p>
              <ul className="exp-list">
                {exp.bullets.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
              <Link className="exp-more" href={exp.detailUrl}>Full details ↗</Link>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="ed-section" style={{ paddingTop: '48px' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-head-row"><span className="sec-tag">Skills &amp; Tooling</span></div>
          </div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-row" key={s.label}>
                <div className="skill-label">{s.label}</div>
                <div className="skill-values">{s.values}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="ed-footer" style={{ background: 'var(--cream-deep)' }}>
        <div className="wrap">
          <div className="foot-fine">
            <span>© 2026 Rajesh Dhanda</span>
            <span>Senior Machine Learning Engineer · Bengaluru</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
