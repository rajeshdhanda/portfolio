export default function Skills() {
  const groups = [
    { title: 'Cloud & Infrastructure', skills: ['Azure', 'GCP', 'Databricks', 'Docker', 'Kubernetes', 'GKE'] },
    { title: 'MLOps & Data', skills: ['MLOps', 'Airflow', 'Unity Catalog', 'Feast', 'Spark', 'Snowflake'] },
    { title: 'GenAI & LLMs', skills: ['LangChain', 'LangGraph', 'RAG', 'Azure OpenAI', 'MCP', 'AI Search'] },
    { title: 'Backend & APIs', skills: ['FastAPI', 'Python', 'GitHub Actions', 'KServe', 'Triton', 'GitOps'] },
  ]

  return (
    <section id="skills" className="max-w-[1100px] mx-auto px-8 lg:px-12 pb-4">
      <div className="flex items-center gap-3 mb-6 pt-14">
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.12em] uppercase text-[var(--accent)]">
          Skills
        </span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {groups.map((g) => (
          <div key={g.title} className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-4">
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-2.5">
              {g.title}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.skills.map((s) => (
                <span key={s} className="text-[12px] text-[#B8B3AD] bg-[var(--bg3)] border border-[var(--border)] px-2.5 py-1 rounded-[5px]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
