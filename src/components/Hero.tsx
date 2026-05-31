import Image from 'next/image'
import { getAssetPath } from '../utils/assets'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-8 max-w-[1400px] mx-auto px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-10 items-center">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] tracking-[0.12em] uppercase mb-4">
            ML Platform Engineer
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[48px] sm:text-[52px] leading-[1.05] text-[var(--text)] mb-1.5">
            Rajesh <span className="text-[var(--accent)]">Dhanda</span>
          </h1>
          <p className="text-[16px] text-[var(--muted)] font-light mb-5 tracking-[0.01em]">
            Senior MLE · Haleon &nbsp;·&nbsp; ex-CARS24 &nbsp;·&nbsp; IIT Kanpur
          </p>
          <p className="text-[14px] text-[#B8B3AD] leading-[1.75] max-w-[520px] mb-7">
            I design and build scalable ML & LLM platforms that take prototypes to production — across RAG systems, agentic tools, and cloud-native inference infrastructure.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/file/d/1rKgBAFzYi0WNvGAGq2fDO7Rn3BI-jsYL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] text-[#1a1400] px-5 py-2.5 rounded-md text-[13px] font-medium hover:opacity-85 transition-opacity"
            >
              View Résumé
            </a>
            <a
              href="https://www.linkedin.com/in/rajesh-dhanda/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--border-hover)] text-[var(--muted)] px-5 py-2.5 rounded-md text-[13px] hover:text-[var(--text)] hover:border-[rgba(255,255,255,0.25)] transition-all"
            >
              LinkedIn
            </a>
            <a
              href={getAssetPath('/skills-projects')}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--border-hover)] text-[var(--muted)] px-5 py-2.5 rounded-md text-[13px] hover:text-[var(--text)] hover:border-[rgba(255,255,255,0.25)] transition-all"
            >
              Projects
            </a>
            <a
              href={getAssetPath('/hackathons')}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--border-hover)] text-[var(--muted)] px-5 py-2.5 rounded-md text-[13px] hover:text-[var(--text)] hover:border-[rgba(255,255,255,0.25)] transition-all"
            >
              AI Hackathons
            </a>
            <a
              href={getAssetPath('/education')}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--border-hover)] text-[var(--muted)] px-5 py-2.5 rounded-md text-[13px] hover:text-[var(--text)] hover:border-[rgba(255,255,255,0.25)] transition-all"
            >
              Education
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center gap-3 justify-center -ml-30">
          <div className="w-[180px] h-[180px] rounded-full bg-[var(--bg3)] border-[1.5px] border-[var(--border-hover)] overflow-hidden">
            <Image
              src={getAssetPath("/profile-picture.png")}
              alt="Rajesh Dhanda"
              width={180}
              height={180}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] text-center leading-[1.8] tracking-[0.04em]">
            Bengaluru, India
          </p>
        </div>
      </div>
    </section>
  )
}
