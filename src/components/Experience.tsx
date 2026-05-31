export default function Experience() {
  const experiences = [
    {
      company: 'HALEON',
      role: 'Senior Machine Learning Engineer',
      tenure: 'Apr 2024 – Present',
      summary: 'Led MLOps & Agentic-RAG foundations for DS and GenAI services on Azure & Databricks across multiple product teams.',
      bullets: [
        'Global Consumer Help Center: AI search across 15+ brand help centers & 400+ brand websites spanning multiple countries, markets & languages — reducing cost and reliance on human agents',
        'Procurement Contract Intelligence: AI-powered platform analyzing 11,000+ Contract IDs & 30,000+ contracts covering $7B third-party spend — enabling faster review, compliance visibility & time-cost savings',
        'Commercial Tech: MLOps framework for Marketing Mix Models, scalable, repeatable modeling of brand, market–level sales drivers - used to optimize global marketing spend',
        'MLOps and Agentic-RAG Foundation: Framework with code & detailed docs, used across Help Center, Contract AI, NRM, NBA, QSC and Commercial Tech projects',
      ],
      tags: ['Azure OpenAI', 'LangChain', 'Databricks', 'FastAPI', 'GitHub Actions'],
      tagVariant: 'gold' as const,
      awards: ['Global Employee Recognition ×3', '2025 Excellence Award — India Capability Centre'],
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
        'Data Flow Pipeline: Syncing Data 2500 Sheets with 15000 Jobs/day. (Refer to Detailed <a href="https://medium.com/cars24-data-science-blog/upgrading-data-flow-pipeline-cars24-1b6b8aea48e" target="_blank" rel="noopener noreferrer" class="text-[var(--accent)] hover:underline">Blog</a> got cited in <a href="https://www.linkedin.com/posts/moderndatastack_optimizing-data-flow-cars24-activity-7026209461774016513-vJSR/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" class="text-[var(--accent)] hover:underline">Modern Data Stack</a> and <a href="https://www.dataengineeringweekly.com/i/96964228/cars-upgrading-data-flow-pipeline-at-cars" target="_blank" rel="noopener noreferrer" class="text-[var(--accent)] hover:underline">Data Engineering Weekly</a>)',
        'NBFC DS Migration: AWS → GCP, monolith → GKE microservices, latency from 3s to 503ms (99.99%), eliminating 100% timeouts previously at 8–9%',
      ],
      tags: ['GCP', 'GKE', 'KServe', 'Triton', 'Airflow'],
      tagVariant: 'green' as const,
      awards: ['Rookie Award Q3 2022'],
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
      tags: ['YOLOv4', 'DeepSort', 'TFLite', 'Raspberry Pi', 'OpenCV'],
      tagVariant: 'gold' as const,
      awards: [],
      detailUrl: '/experience/internships',
    },
  ]

  return (
    <section id="experience" className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-4">
      <div className="flex items-center gap-3 mb-6 pt-14">
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.12em] uppercase text-[var(--accent)]">
          Experience
        </span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="space-y-3">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className={`bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5 hover:border-[var(--border-hover)] transition-colors ${exp.muted ? 'opacity-70' : ''}`}
          >
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div>
                <div className={`font-[family-name:var(--font-mono)] text-[13px] font-medium tracking-[0.04em] ${exp.muted ? 'text-[var(--muted)]' : 'text-[var(--accent)]'}`}>
                  {exp.company}
                </div>
                <div className={`text-[15px] font-medium text-[var(--text)] leading-tight ${exp.muted ? 'text-[13px]' : ''}`}>
                  {exp.role}
                </div>
              </div>
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] whitespace-nowrap">
                {exp.tenure}
              </span>
            </div>

            <p className="text-[13px] text-[#A8A3A0] leading-relaxed mb-3">
              {exp.summary}
            </p>

            {exp.bullets.length > 0 && (
              <ul className="mb-3.5 space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-[13px] text-[#B8B3AD] leading-[1.55] pl-3.5 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px] before:top-[1px]" dangerouslySetInnerHTML={{ __html: b }}>
                  </li>
                ))}
              </ul>
            )}

            {(exp.tags.length > 0 || exp.awards.length > 0) && (
              <>
                <div className="flex items-center justify-end">
                  <a href={exp.detailUrl} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] hover:opacity-80 transition-opacity tracking-[0.04em] whitespace-nowrap">
                    Full details ↗
                  </a>
                </div>
              </>
            )}

            {exp.tags.length === 0 && exp.detailUrl && (
              <div className="flex items-center justify-end">
                <a href={exp.detailUrl} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] hover:opacity-80 transition-opacity tracking-[0.04em] whitespace-nowrap">
                  Full details ↗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
