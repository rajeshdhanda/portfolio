export default function Education() {
  return (
    <section className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-4">
      <div className="flex items-center gap-3 mb-6 pt-14">
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.12em] uppercase text-[var(--accent)]">
          Education
        </span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="space-y-2.5">
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5 flex items-start justify-between gap-4">
          <div>
            <div className="text-[14px] font-medium text-[var(--text)] mb-0.5">
              M.Sc Physics — Computational Physics
            </div>
            <div className="text-[12px] text-[var(--muted)] mb-2.5">
              Indian Institute of Technology, Kanpur
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['JEST AIR 65', 'IIT JAM AIR 22', 'CSIR-NET AIR 51', 'GATE CSE'].map((s) => (
                <span key={s} className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green-text)]">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] whitespace-nowrap mt-0.5">
            2018 – 2020
          </span>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5 flex items-start justify-between gap-4">
          <div>
            <div className="text-[14px] font-medium text-[var(--text)] mb-0.5">
              B.Sc Physics Honours
            </div>
            <div className="text-[12px] text-[var(--muted)]">
              Maharshi Dayanand University, Rohtak
            </div>
          </div>
          <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] whitespace-nowrap mt-0.5">
            2015 – 2018
          </span>
        </div>
      </div>

      <a
        href="https://drive.google.com/drive/folders/1JRR0RF-xRKvHhtm6RV5k_Vt7AvIeLmkN?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors tracking-[0.04em]"
      >
        View certifications ↗
      </a>
    </section>
  )
}
