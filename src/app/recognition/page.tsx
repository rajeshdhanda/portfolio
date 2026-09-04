import Link from 'next/link'

export default function RecognitionPage() {
  const testimonials = [
    {
      id: 'help-center',
      quote:
        "On GCR Business and Tech teams' behalf, I'd like to recognize Rajesh for his outstanding contribution to delivering Generative Search, a true enterprise-first innovation. Rajesh's engineering expertise, technical leadership, unwavering focus on security and commitment to quality helped turn a complex, high-risk initiative into a seamless, reliable success. Rajesh's collaboration has been instrumental in ensuring the solution met the highest standards for performance, security, and Responsible AI requirements. Thank you Rajesh for helping set a new benchmark for AI-powered consumer experiences.",
      author: 'GCR Business & Tech Leadership',
      context: 'Global Consumer Help Center · Generative Search',
      badge: 'Silver',
      badgeType: 'silver' as const,
    },
    {
      id: 'contract-ai',
      quote:
        'Simplify for Impact — Contract.AI: Revolutionising Contract Management in Procurement. A project that has revolutionized our contract management process at Haleon. Faced with the challenge of manually reviewing approximately 12,000 contracts, this project harnessed AI technologies to transform static documents into structured intelligence. By implementing automated intelligence through ML/NLP pipelines, the team enabled semantic search and clause-level interrogation.',
      author: 'Procurement Product Owner',
      context: 'Contract.AI · Procurement Intelligence',
      badge: 'Bronze',
      badgeType: 'bronze' as const,
    },
    {
      id: 'engineering-leadership',
      quote:
        'Rajesh has 1112 GitHub contributions this year, which is impeccable. He also led the MLE efforts and completed successful deployments on Help Centre Federated Search, Prometheus and Contract Analyzer projects. He presented the Contract Analyzer project on AI Day, which received a lot of accolades across the Data Office and CDO.',
      author: 'Engineering Leadership',
      context: 'Federated Search · Prometheus · Contract Analyzer',
      badge: 'Bronze',
      badgeType: 'bronze' as const,
    },
    {
      id: 'mlops-leadership',
      quote:
        'Rajesh has been an outstanding ML engineer. Since he joined, he has worked on Gen AI projects like "Help Centre Federated Search" and created RAG-based chatbots using both Azure and Databricks backends. He also worked on MLOps projects like Prometheus and contributed to the MLOps template. Apart from this, he has been a team player, helping all team members with deployment tasks. He has actively presented in all the MLOps discussions and forums about his work. You are an asset to Haleon, keep up the good work.',
      author: 'MLOps Leadership',
      context: 'MLOps Foundation · Gen AI Platform',
      badge: 'Go Beyond',
      badgeType: 'green' as const,
    },
    {
      id: 'career-day',
      quote:
        "Rajesh's contribution and energy on Career Day was impeccable. Your participation had a very good impact and I appreciate the collaboration.",
      author: 'Career Day Organising Team',
      context: 'Leadership · Career Day',
      badge: 'Recognition',
      badgeType: 'neutral' as const,
    },
  ]

  const badgeStyles: Record<string, string> = {
    silver:
      'text-[#c8c8d0] bg-[rgba(200,200,208,0.08)] border-[rgba(200,200,208,0.25)]',
    bronze:
      'text-[#c8a96e] bg-[rgba(200,169,110,0.08)] border-[rgba(200,169,110,0.25)]',
    green:
      'text-[var(--green-text)] bg-[var(--green-bg)] border-[var(--green-border)]',
    neutral:
      'text-[var(--muted)] bg-[var(--bg3)] border-[var(--border)]',
  }

  return (
    <main className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-24 pb-16">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-10"
      >
        ← Back to Home
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--accent)] mb-2">
          Recognition
        </div>
        <h1 className="text-[28px] font-[family-name:var(--font-heading)] text-[var(--text)] mb-2">
          What Product Owners &amp; Leadership Say
        </h1>
        <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[620px]">
          Words from product owners, leadership and teams across Haleon — recognising
          contributions to Gen AI platforms, MLOps foundations and enterprise-first innovation.
        </p>
      </div>

      {/* Testimonials */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            id={t.id}
            className="recognition-card bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 flex flex-col hover:border-[var(--border-hover)] transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-[family-name:var(--font-mono)] text-[24px] leading-none text-[var(--accent)]">
                &ldquo;
              </span>
              <span
                className={`font-[family-name:var(--font-mono)] text-[10px] px-2.5 py-0.5 rounded border ${badgeStyles[t.badgeType]}`}
              >
                {t.badge}
              </span>
            </div>

            <p className="text-[13px] text-[var(--text-soft)] leading-[1.7] mb-5 flex-1">
              {t.quote}
            </p>

            <div className="pt-4 border-t border-[var(--border)]">
              <div className="text-[13px] font-medium text-[var(--text)]">
                {t.author}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] mt-0.5">
                {t.context}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
