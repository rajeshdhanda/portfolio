export default function Competitions() {
  const items = [
    { rank: '#1', name: 'HackerEarth ML\nMarketing Optimisation', link: 'https://www.hackerearth.com/challenges/competitive/hackerearth-machine-learning-challenge-reduce-marketing-spend/leaderboard/reduce-marketing-waste-24-9c4e0592/' },
    { rank: '#5', name: 'HackerEarth ML\nWind Power Prediction', link: 'https://www.hackerearth.com/challenges/competitive/hackerearth-machine-learning-challenge-predict-windmill-power/leaderboard/predict-the-power-kwh-produced-from-the-windmills-8-f055f832/' },
    { rank: '#21', name: 'GHF Hackathon\nCredit Risk — Univ.AI', link: 'https://certificate.univ.ai/c/14288u23c' },
  ]

  return (
    <section className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-4">
      <div className="flex items-center gap-3 mb-6 pt-14">
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.12em] uppercase text-[var(--accent)]">
          Competitions
        </span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {items.map((c) => (
          <div key={c.rank + c.name} className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-4 text-center">
            <div className="font-[family-name:var(--font-display)] text-[28px] text-[var(--accent)] leading-none mb-1">
              {c.rank}
            </div>
            <div className="text-[11px] text-[#B8B3AD] leading-[1.4] mb-1.5 whitespace-pre-line">
              {c.name}
            </div>
            <a href={c.link} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors tracking-[0.04em]">
              leaderboard ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
