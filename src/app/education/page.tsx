import Link from 'next/link'

export default function EducationPage() {
  const educationTimeline = [
    {
      year: '2018–2020',
      degree: "Master's in Physics",
      institute: 'Indian Institute of Technology Kanpur',
      description: 'Postgraduate Specialised in Computational Physics',
    },
    {
      year: '2015–2018',
      degree: 'B.Sc Physics Honours',
      institute: 'Maharshi Dayanand University, Rohtak',
      description: 'Undergraduate Programme Specialised in Physics',
    },
    {
      year: '2014',
      degree: 'CBSE Class XII',
      institute: 'Jawahar Navodaya Vidyalaya, Bhiwani',
      description: 'Higher secondary with Science and Mathematics',
    },
    {
      year: '2012',
      degree: 'CBSE Class X',
      institute: 'Jawahar Navodaya Vidyalaya, Bhiwani',
      description: 'Secondary education with Science and Mathematics',
    },
  ]

  const researchExams = [
    { name: 'JEST 2018', rank: 'AIR 65' },
    { name: 'CSIR-NET 2018', rank: 'AIR 70' },
    { name: 'CSIR-NET 2019', rank: 'AIR 51' },
  ]

  const competitiveExams = [
    { name: 'IIT JAM 2018', rank: 'AIR 22' },
    { name: 'IIT JEE Advanced 2015', rank: 'Qualified' },
    { name: 'GATE CSE 2021', rank: 'Qualified' },
  ]

  const leadership = [
    {
      title: 'Orientation Team Member',
      year: '2019',
      description: 'Assisted in coordinating with the Counseling Service and facilitating the Hall Allocation process and Orientation Program of 2019.',
    },
    {
      title: 'Hall Election Officer',
      year: '2019–20',
      description: 'Successfully organized and executed hall elections in Hall of Residence X, resulting in the formation of HEC for academic year 2019-20.',
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
          Academic Journey
        </div>
        <h1 className="text-[28px] font-[family-name:var(--font-heading)] text-[var(--text)] mb-2">
          Education
        </h1>
        <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[600px]">
          From foundational learning to advanced research, a comprehensive educational pathway spanning prestigious institutions and competitive achievements.
        </p>
      </div>

      {/* Educational Background */}
      <section className="mb-14">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-5">
          Educational Background
        </div>
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="px-5 py-3 text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.08em] text-[var(--muted)]">Year</th>
                <th className="px-5 py-3 text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.08em] text-[var(--muted)]">Degree</th>
                <th className="px-5 py-3 text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.08em] text-[var(--muted)]">Institute</th>
                <th className="px-5 py-3 text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.08em] text-[var(--muted)] hidden sm:table-cell">Description</th>
              </tr>
            </thead>
            <tbody>
              {educationTimeline.map((edu, i) => (
                <tr key={edu.degree} className={i < educationTimeline.length - 1 ? 'border-b border-[var(--border)]' : ''}>
                  <td className="px-5 py-4 font-[family-name:var(--font-mono)] text-[12px] text-[var(--muted)] whitespace-nowrap">{edu.year}</td>
                  <td className="px-5 py-4 text-[13px] font-medium text-[var(--text)]">{edu.degree}</td>
                  <td className="px-5 py-4 text-[12px] text-[#9A9690]">{edu.institute}</td>
                  <td className="px-5 py-4 text-[11px] text-[var(--muted)] hidden sm:table-cell">{edu.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="mb-14">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-5">
          Academic Excellence
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Research Entrance Exams */}
          <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5">
            <div className="text-[13px] font-medium text-[var(--text)] mb-4">Research Entrance Exams</div>
            <div className="space-y-3">
              {researchExams.map((e) => (
                <div key={e.name} className="flex items-center justify-between">
                  <span className="text-[12px] text-[#9A9690]">{e.name}</span>
                  <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] bg-[rgba(200,169,110,0.07)] border border-[rgba(200,169,110,0.2)] px-2.5 py-0.5 rounded">
                    {e.rank}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Exams */}
          <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5">
            <div className="text-[13px] font-medium text-[var(--text)] mb-4">Competitive Exams</div>
            <div className="space-y-3">
              {competitiveExams.map((e) => (
                <div key={e.name} className="flex items-center justify-between">
                  <span className="text-[12px] text-[#9A9690]">{e.name}</span>
                  <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--green-text)] bg-[var(--green-bg)] border border-[var(--green-border)] px-2.5 py-0.5 rounded">
                    {e.rank}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="mb-14">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-5">
          Professional Certifications
        </div>
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5">
          <div className="text-[14px] font-medium text-[var(--text)] mb-2">Machine Learning & AI Certifications</div>
          <p className="text-[12px] text-[#9A9690] leading-[1.6] mb-4">
            Collection of ML/AI certifications covering deep learning, data science, cloud platforms from leading tech companies and educational institutions.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/rajesh-dhanda/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] hover:opacity-80 transition-opacity"
            >
              View Certificates ↗
            </a>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--green-text)] bg-[var(--green-bg)] border border-[var(--green-border)] px-2 py-0.5 rounded">
              Verified
            </span>
          </div>
        </div>
      </section>

      {/* Leadership & Responsibilities */}
      <section>
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-5">
          Leadership & Responsibilities
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {leadership.map((l) => (
            <div key={l.title} className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="text-[13px] font-medium text-[var(--text)]">{l.title}</div>
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] whitespace-nowrap">{l.year}</span>
              </div>
              <p className="text-[12px] text-[#9A9690] leading-[1.6]">{l.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
