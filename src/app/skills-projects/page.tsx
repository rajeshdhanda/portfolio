import Link from 'next/link'

export default function SkillsProjectsPage() {
  const skillGroups = [
    {
      title: 'Cloud Platforms & Services',
      description: 'Enterprise cloud infrastructure and AI services',
      skills: ['Azure', 'Azure OpenAI', 'GCP', 'GitHub', 'Databricks'],
    },
    {
      title: 'Container & Orchestration',
      description: 'Containerization and deployment automation',
      skills: ['Docker', 'Kubernetes', 'GKE', 'GitHub Actions', 'Cloud Build'],
    },
    {
      title: 'Data & ML Platforms',
      description: 'Machine learning and data processing platforms',
      skills: ['Databricks', 'Unity Catalog', 'Spark', 'Airflow', 'MLOps', 'Feast', 'EdgeDB', 'Snowflake'],
    },
    {
      title: 'API & Development',
      description: 'Backend development and API architecture',
      skills: ['FastAPI', 'Python', 'RESTful APIs', 'Microservices', 'GitOps', 'Semantic Versioning', 'KServe', 'Triton Inference Server'],
    },
    {
      title: 'GenAI & LLMs',
      description: 'Large language models and retrieval-augmented generation',
      skills: ['LangChain', 'LangGraph', 'RAG', 'Agentic-RAG', 'Azure AI Search', 'MCP', 'Azure OpenAI', 'Document Intelligence'],
    },
    {
      title: 'Data & Analytics',
      description: 'Data engineering and visualization',
      skills: ['BigQuery', 'Redis', 'Power BI', 'NLP', 'Scrapy', 'Data Pipelines'],
    },
  ]

  const academicProjects = [
    {
      title: 'Sparse Linear Regression with Advanced Optimization',
      tag: 'ML - IIT Kanpur',
      description: 'Implemented sparse linear regression utilizing Accelerated Proximal Gradient Descent and Stochastic Coordinate Gradient Descent optimization techniques.',
      technologies: ['Machine Learning', 'Optimization', 'Python', 'Mathematical Modeling'],
      highlight: 'Advanced ML Algorithms',
    },
    {
      title: 'Multiclass Code Repair Classification',
      tag: 'ML - IIT Kanpur',
      description: 'Developed multiclass classification system for code repair using Bag of Words representations with Learning with Prototypes, One vs All, and Decision Tree methods.',
      technologies: ['Classification', 'NLP', 'Decision Trees', 'Machine Learning'],
      highlight: 'Multiple ML Approaches',
    },
    {
      title: '8 Programming Languages in 8 Weeks',
      tag: 'Programming Club - IIT Kanpur',
      description: 'Comprehensive programming challenge covering 8 different programming languages in 8 weeks, exploring various paradigms and developing foundational understanding.',
      technologies: ['Multi-Language', 'Programming Paradigms', 'Software Development', 'Problem Solving'],
      highlight: '8 Languages Mastered',
    },
    {
      title: 'ANITA Experiment Data Analysis',
      tag: 'Academic Project - IIT Kanpur',
      description: 'Analyzed radio pulses and surface topography in ANITA experiment, creating 3D visualizations of mathematical formulations and experimental data using Python.',
      technologies: ['Data Analysis', '3D Visualization', 'Python', 'Scientific Computing'],
      highlight: '3D Data Visualization',
    },
  ]

  return (
    <main className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-24 pb-16">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-6"
      >
        ← Back to Home
      </Link>

      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2 mb-10">
        <a href="#skills" className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] bg-[rgba(200,169,110,0.1)] border border-[var(--accent)] px-4 py-2 rounded-md hover:opacity-85 transition-opacity">
          Skills
        </a>
        <a href="#published-app" className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] border border-[var(--border-hover)] px-4 py-2 rounded-md hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
          Published App
        </a>
        <a href="#academic-projects" className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] border border-[var(--border-hover)] px-4 py-2 rounded-md hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
          Academic Projects
        </a>
      </div>

      {/* Skills & Technologies */}
      <section id="skills" className="mb-20 scroll-mt-24">
        <div className="mb-8">
          <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--accent)] mb-2">
            Skills & Technologies
          </div>
          <h1 className="text-[28px] font-[family-name:var(--font-heading)] text-[var(--text)] mb-2">
            Technical Expertise
          </h1>
          <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[600px]">
            Comprehensive expertise in modern cloud technologies, ML platforms, and scalable system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5">
              <div className="font-medium text-[14px] text-[var(--text)] mb-1">{g.title}</div>
              <div className="text-[11px] text-[var(--muted)] mb-3">{g.description}</div>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span key={s} className="font-[family-name:var(--font-mono)] text-[11px] text-[#9A9690] bg-[var(--bg3)] border border-[var(--border)] px-2.5 py-1 rounded-[5px]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Published Application */}
      <section id="published-app" className="mb-20 scroll-mt-24">
        <div className="mb-8">
          <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--accent)] mb-2">
            Published Application
          </div>
          <h2 className="text-[24px] font-[family-name:var(--font-heading)] text-[var(--text)] mb-2">
            CanvasNote
          </h2>
          <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[600px]">
            Production-ready native Linux application on Ubuntu Snap Store.
          </p>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
            <div>
              <p className="text-[13px] text-[#9A9690] leading-[1.7] mb-5">
                A comprehensive native Linux note-taking and drawing application optimized for 2-in-1/tablet devices with stylus support, featuring intelligent palm rejection, multiple input methods, and professional organization tools.
              </p>

              <div className="bg-[rgba(200,169,110,0.05)] border border-[rgba(200,169,110,0.15)] rounded-[8px] p-4 mb-5">
                <div className="text-[12px] font-medium text-[var(--accent)] mb-1.5">Why I Built This</div>
                <p className="text-[12px] text-[#9A9690] leading-[1.6]">
                  I use an ASUS ROG Flow Z13 (2022) with touchscreen and stylus on Linux. Since I couldn&apos;t find a Linux note-taking app that handled stylus input and palm rejection reliably, I built one tailored to my needs and shared it on the Snap Store for others to use.
                </p>
              </div>

              <div className="mb-5">
                <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-3">Key Features</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Pressure-sensitive stylus with palm rejection',
                    'Text input with formatting support',
                    'Multi-page A4 notes with templates',
                    'Shape tools and highlighter',
                    'Subject-based library organization',
                    'Export to PNG/PDF formats',
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <span className="text-[var(--accent2)] text-[10px] mt-0.5">✓</span>
                      <span className="text-[12px] text-[#9A9690]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-3">Technical Highlights</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { title: 'Architecture', desc: 'Built with GTK4 and libadwaita for native Linux desktop integration with Cairo graphics rendering' },
                    { title: 'Input Handling', desc: 'Advanced evdev-based palm rejection with automatic stylus detection and pressure sensitivity' },
                    { title: 'Deployment', desc: 'Packaged with Snapcraft for secure, sandboxed distribution with automatic updates' },
                  ].map((h) => (
                    <div key={h.title} className="bg-[var(--bg3)] border border-[var(--border)] rounded-[8px] p-3">
                      <div className="text-[12px] font-medium text-[var(--text)] mb-1">{h.title}</div>
                      <p className="text-[11px] text-[var(--muted)] leading-[1.5]">{h.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href="https://snapcraft.io/canvasnote" target="_blank" rel="noopener noreferrer" className="border border-[var(--border-hover)] rounded-md overflow-hidden block hover:opacity-85 transition-opacity">
                <img src="https://snapcraft.io/en/dark/install.svg" alt="Published on Ubuntu Snap Store" className="w-full" />
              </a>
              <a
                href="https://github.com/rajeshdhanda/canvasnote"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--border-hover)] text-[var(--muted)] px-4 py-2.5 rounded-md text-[12px] text-center hover:text-[var(--text)] transition-colors"
              >
                View on GitHub
              </a>
              <div className="bg-[var(--bg3)] border border-[var(--border)] rounded-[6px] px-3 py-2">
                <code className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)]">
                  sudo snap install canvasnote
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Projects */}
      <section id="academic-projects" className="scroll-mt-24">
        <div className="mb-8">
          <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--accent)] mb-2">
            Academic Projects
          </div>
          <h2 className="text-[24px] font-[family-name:var(--font-heading)] text-[var(--text)] mb-2">
            Research & Development
          </h2>
          <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[600px]">
            Research and development projects from IIT Kanpur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {academicProjects.map((p) => (
            <div key={p.title} className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-[14px] font-medium text-[var(--text)] leading-tight">{p.title}</h3>
                <span className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--accent)] bg-[rgba(200,169,110,0.07)] border border-[rgba(200,169,110,0.2)] px-2 py-0.5 rounded whitespace-nowrap">
                  {p.tag}
                </span>
              </div>
              <p className="text-[12px] text-[#9A9690] leading-[1.6] mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.technologies.map((t) => (
                  <span key={t} className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] bg-[var(--bg3)] border border-[var(--border)] px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[var(--accent2)] text-[10px]">✓</span>
                <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent2)]">{p.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
