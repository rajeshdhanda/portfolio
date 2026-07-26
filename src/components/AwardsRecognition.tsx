'use client'

import { useEffect, useState } from 'react'
import { getAssetPath } from '../utils/assets'

type Award = {
  title: string
  description: string
  date: string
  image: string
}

const awards: Award[] = [
  {
    title: 'Global Employee Recognition',
    description:
      'Delivered Generative Search for the Consumer Help Center as an enterprise-first innovation.',
    date: 'Jul 2026',
    image: '/awards/help-center-recongnition.png',
  },
  {
    title: 'Global Employee Recognition',
    description:
      'Led MLE for Consumer Help Center, Commercial Tech, and Contract Intelligence Platform.',
    date: 'Jan 2026',
    image: '/awards/mlops-foundation-recognition.png',
  },
  {
    title: '2025 Excellence Award',
    description:
      'India Capability Centre — Built Agentic-RAG Contract AI platform with Procurement Analytics and Data Office.',
    date: 'Dec 2025',
    image: '/awards/contract-ai-recognition.png',
  },
  {
    title: 'Global Employee Recognition',
    description:
      'Presented Contract Intelligence Platform and Consumer Help Center at Career and Technovation Days.',
    date: 'Sep 2025',
    image: '/awards/career-day-recognition.png',
  },
  {
    title: 'Global Employee Recognition',
    description:
      'Outstanding efforts (GitHub Stats) for MLOps Template and Agentic RAG Foundations used across multiple projects.',
    date: 'Nov 2024',
    image: '/awards/github-proejcts-recognition.png',
  },
]

export default function AwardsRecognition() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  useEffect(() => {
    if (!activeImage) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeImage])

  return (
    <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-8">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)]">
          Awards &amp; Recognition
        </div>
        <div className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--muted)] whitespace-nowrap">
          Click to view certificate ↗
        </div>
      </div>
      <div className="space-y-3">
        {awards.map((award) => (
          <button
            key={award.date + award.title}
            type="button"
            onClick={() => setActiveImage(award.image)}
            className="group w-full text-left flex items-start justify-between gap-3 rounded-md -mx-2 px-2 py-1.5 hover:bg-[rgba(200,169,110,0.08)] transition-colors"
          >
            <p className="text-[13px] text-[var(--text-soft)] leading-[1.6]">
              <span className="text-[var(--text)] font-medium">{award.title}</span>
              {' — '}
              {award.description}
              <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--accent)] ml-1.5 opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                View ↗
              </span>
            </p>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] whitespace-nowrap pt-0.5">
              {award.date}
            </span>
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[900px] w-full max-h-[90vh] overflow-auto rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white text-[16px] leading-none hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetPath(activeImage)}
              alt="Award recognition"
              className="w-full h-auto block"
            />
          </div>
        </div>
      )}
    </div>
  )
}
