import Link from 'next/link'

export default function InternshipsExperience() {
  return (
    <main className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-24 pb-16">
      <Link href="/#experience" className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[12px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8">
        ← Back to portfolio
      </Link>

      <div className="mb-10">
        <div className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] tracking-[0.12em] uppercase mb-2">
          2021 · INTERNSHIPS
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[36px] text-[var(--text)] leading-tight">
          Computer Vision & AI Engineering
        </h1>
      </div>

      <div className="space-y-6">
        {/* Deep Sight AI Labs */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <div className="font-[family-name:var(--font-mono)] text-[13px] text-[var(--accent)] tracking-[0.04em] mb-1">Deep Sight AI Labs</div>
              <div className="text-[15px] font-medium text-[var(--text)]">Computer Vision Software Engineer</div>
            </div>
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] whitespace-nowrap">Jun – Sept 2021</span>
          </div>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7] mb-4">
            Developed solutions for object detection, object tracking, and video surveillance utilizing Deep Learning techniques.
          </p>
          <ul className="space-y-2.5 mb-4">
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Implemented a reference direction-based entry-exit system and Object Counting Feature using DeepSort.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Conducted TensorFlow Lite model conversion of DeepSort and executed its deployment on Raspberry Pi hardware.
            </li>
          </ul>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {['Computer Vision', 'Deep Learning', 'DeepSort', 'TensorFlow Lite', 'Raspberry Pi'].map((t) => (
              <span key={t} className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[var(--tag-text)]">
                {t}
              </span>
            ))}
          </div>
          <a href="https://www.youtube.com/watch?v=l9d9lOKmxEs&t=1s" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.25)] px-3 py-1.5 rounded hover:bg-[rgba(200,169,110,0.14)] transition-colors">
            Demo Video: Vehicle Tracking with DeepSort ↗
          </a>
        </div>

        {/* DocBot+ */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <div className="font-[family-name:var(--font-mono)] text-[13px] text-[var(--accent)] tracking-[0.04em] mb-1">DocBot+</div>
              <div className="text-[15px] font-medium text-[var(--text)]">Artificial Intelligence Engineer Intern</div>
            </div>
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] whitespace-nowrap">Mar – May 2021</span>
          </div>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7] mb-4">
            Developed intelligent healthcare solutions focusing on disease diagnosis and symptom analysis using machine learning algorithms.
          </p>
          <ul className="space-y-2.5 mb-4">
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Developed algorithm for many-to-many mapping of symptoms to diseases, enabling disease diagnosis based on symptom sets.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Created mathematical formulation to facilitate symptom recommendation, improving user experience and healthcare decision-making.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Generated random datasets to rigorously test and optimize ML algorithms for recommendation systems.
            </li>
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {['Machine Learning', 'Healthcare AI', 'Python', 'Recommendation Systems'].map((t) => (
              <span key={t} className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[var(--tag-text)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
