import { getAssetPath } from '../utils/assets'

type Award = {
  title: string
  description: string
  date: string
}

const awards: Award[] = [
  {
    title: 'Global Employee Recognition',
    description:
      'Delivered Generative Search for the Consumer Help Center as an enterprise-first innovation.',
    date: 'Jul 2026',
  },
  {
    title: 'Global Employee Recognition',
    description:
      'Led MLE for Consumer Help Center, Commercial Tech, and Contract Intelligence Platform.',
    date: 'Jan 2026',
  },
  {
    title: '2025 Excellence Award',
    description:
      'India Capability Centre — Built Agentic-RAG Contract AI platform with Procurement Analytics and Data Office.',
    date: 'Dec 2025',
  },
  {
    title: 'Global Employee Recognition',
    description:
      'Presented Contract Intelligence Platform and Consumer Help Center at Career and Technovation Days.',
    date: 'Sep 2025',
  },
  {
    title: 'Global Employee Recognition',
    description:
      'Outstanding efforts (GitHub Stats) for MLOps Template and Agentic RAG Foundations used across multiple projects.',
    date: 'Nov 2024',
  },
]

export default function AwardsRecognition() {
  return (
    <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-8">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)]">
          Recognitions
        </div>
        <a
          href={getAssetPath('/recognition')}
          className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.35)] px-3.5 py-1.5 rounded hover:bg-[rgba(200,169,110,0.18)] transition-colors font-medium"
        >
          What Leadership Says ↗
        </a>
      </div>
      <div className="space-y-3">
        {awards.map((award) => (
          <a
            key={award.date + award.title}
            href={getAssetPath('/recognition')}
            className="group w-full text-left flex items-start justify-between gap-3 rounded-md -mx-2 px-2 py-1.5 hover:bg-[rgba(200,169,110,0.08)] transition-colors"
          >
            <p className="text-[13px] text-[var(--text-soft)] leading-[1.6]">
              <span className="text-[var(--text)] font-medium">{award.title}</span>
              {' — '}
              {award.description}
            </p>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] whitespace-nowrap pt-0.5">
              {award.date}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
