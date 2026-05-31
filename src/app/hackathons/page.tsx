import Link from 'next/link'

export default function HackathonsPage() {
  const competitions = [
    {
      type: 'Competition',
      date: 'Apr 2021',
      title: 'HackerEarth ML Challenge - Marketing Optimization',
      description: 'Achieved Rank 1 in HackerEarth Machine Learning Challenge focused on optimizing marketing expenditure by leveraging predictive analytics.',
      technologies: ['Machine Learning', 'Predictive Analytics', 'Python', 'Data Science'],
      rank: 'Rank 1',
      link: 'https://www.hackerearth.com/challenges/competitive/hackerearth-machine-learning-challenge-reduce-marketing-spend/leaderboard/reduce-marketing-waste-24-9c4e0592/',
    },
    {
      type: 'Competition',
      date: 'May 2021',
      title: 'HackerEarth ML Challenge - Wind Power Prediction',
      description: 'Secured Rank 5 in HackerEarth Machine Learning Challenge centered around predicting power generation on windy days using data-driven approaches.',
      technologies: ['Machine Learning', 'Time Series', 'Predictive Modeling', 'Python'],
      rank: 'Rank 5',
      link: 'https://www.hackerearth.com/challenges/competitive/hackerearth-machine-learning-challenge-predict-windmill-power/leaderboard/predict-the-power-kwh-produced-from-the-windmills-8-f055f832/',
    },
    {
      type: 'Hackathon',
      date: 'Apr 2021',
      title: 'GHF Hackathon - Credit Risk Prediction',
      description: 'Attained the 21st position in the GHF Hackathon organized by Univ.AI, demonstrating proficiency in credit risk prediction and financial modeling.',
      technologies: ['Credit Risk', 'Financial Modeling', 'Machine Learning', 'Python'],
      rank: 'Rank 21',
      link: 'https://certificate.univ.ai/c/14288u23c',
    },
  ]

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
      <div className="mb-10">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--accent)] mb-2">
          AI Hackathons & Competitions
        </div>
        <h1 className="text-[28px] font-[family-name:var(--font-heading)] text-[var(--text)] mb-2">
          AI Hackathons Achievements
        </h1>
        <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[600px]">
          Proven track record in machine learning competitions and hackathons.
        </p>
      </div>

      {/* Competition Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {competitions.map((c) => (
          <div key={c.title} className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5">
            <div className="flex items-center justify-between mb-4">
              <span className={`font-[family-name:var(--font-mono)] text-[10px] px-2.5 py-0.5 rounded ${
                c.type === 'Competition'
                  ? 'bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green-text)]'
                  : 'bg-[rgba(200,169,110,0.07)] border border-[rgba(200,169,110,0.2)] text-[var(--accent)]'
              }`}>
                {c.type}
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)]">{c.date}</span>
            </div>

            <h3 className="text-[14px] font-medium text-[var(--text)] mb-3 leading-tight">{c.title}</h3>
            <p className="text-[12px] text-[#9A9690] leading-[1.6] mb-4">{c.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {c.technologies.map((t) => (
                <span key={t} className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] bg-[var(--bg3)] border border-[var(--border)] px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
              <span className="font-[family-name:var(--font-mono)] text-[12px] text-[var(--accent)] font-medium">
                🏆 {c.rank}
              </span>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] hover:opacity-80 transition-opacity"
              >
                View Results ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p className="text-[12px] text-[var(--muted)] italic">
          Excellence in competitive programming and machine learning challenges
        </p>
      </div>
    </main>
  )
}
