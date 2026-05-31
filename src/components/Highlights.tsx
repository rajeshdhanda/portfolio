export default function Highlights() {
  const projects = [
    {
      type: 'Enterprise Platform',
      name: 'Haleon GenAI Assistant',
      desc: 'Multi-team AI platform integrating Azure OpenAI, LangChain agents & hybrid search for Finance, Procurement & Help Center.',
      stack: 'Azure OpenAI · LangGraph · FastAPI',
    },
    {
      type: 'Search at Scale',
      name: 'Global Consumer Help Center',
      desc: 'AI search across 500+ brand websites in 15+ countries, cutting support costs and agent dependency.',
      stack: 'Azure AI Search · Scrapy · RAG',
    },
    {
      type: 'ML Infrastructure',
      name: 'CARS24 ML Platform',
      desc: 'Migrated 30+ DS workloads to GKE. Built Inference Store with 5ms latency, Feature Store & Airflow platform.',
      stack: 'GKE · KServe · EdgeDB · Airflow',
      link: 'https://medium.com/cars24-data-science-blog/upgrading-data-flow-pipeline-cars24-1b6b8aea48e',
    },
    {
      type: 'Open Source App',
      name: 'CanvasNote',
      desc: 'Native Linux note-taking app with stylus support & palm rejection. Published on Ubuntu Snap Store.',
      stack: 'GTK4 · libadwaita · Snapcraft',
      link: 'https://snapcraft.io/canvasnote',
    },
  ]

  return (
    <section id="projects" className="max-w-[1100px] mx-auto px-8 lg:px-12 pb-4">
      <div className="flex items-center gap-3 mb-6 pt-14">
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.12em] uppercase text-[var(--accent)]">
          Featured Projects
        </span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {projects.map((p) => (
          <div key={p.name} className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5 hover:border-[var(--border-hover)] transition-colors">
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent2)] mb-2">
              {p.type}
            </div>
            <div className="text-[14px] font-medium text-[var(--text)] mb-1.5 leading-tight">
              {p.name}
            </div>
            <p className="text-[12px] text-[var(--muted)] leading-[1.55] mb-2.5">
              {p.desc}
            </p>
            <div className="border-t border-[var(--border)] pt-2.5 flex items-center justify-between">
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)]">
                {p.stack}
              </span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                  view ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
