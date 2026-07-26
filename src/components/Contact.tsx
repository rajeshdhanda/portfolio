export default function Contact() {
  return (
    <section id="contact" className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-12 pb-10">
      <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-[20px] text-[var(--text)] mb-1">
            Let&apos;s build something.
          </h3>
          <p className="text-[12px] text-[var(--muted)]">
            Open to ML platform roles, consulting & collaborations.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <a href="https://www.linkedin.com/in/rajesh-dhanda/" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] bg-[var(--bg3)] border border-[var(--border)] px-3.5 py-2 rounded-md hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all tracking-[0.04em]">
            LinkedIn
          </a>
          <a href="https://github.com/rajeshdhanda" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] bg-[var(--bg3)] border border-[var(--border)] px-3.5 py-2 rounded-md hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all tracking-[0.04em]">
            GitHub
          </a>
          <a href="https://medium.com/@rajeshkrdhanda" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] bg-[var(--bg3)] border border-[var(--border)] px-3.5 py-2 rounded-md hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all tracking-[0.04em]">
            Medium
          </a>
          <a href="mailto:rajeshkrdhanda@gmail.com" className="font-[family-name:var(--font-mono)] text-[12px] text-[#1a1400] bg-[var(--accent)] border-none px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity">
            Email me ↗
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-10 pt-5 border-t border-[var(--border)]">
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] tracking-[0.06em]">
          © 2025 Rajesh Dhanda
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] tracking-[0.06em]">
          Senior Machine Learning Engineer · Bengaluru
        </span>
      </div>
    </section>
  )
}
