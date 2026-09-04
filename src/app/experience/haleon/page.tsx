import Link from 'next/link'
import { getAssetPath } from '../../../utils/assets'
import AwardsRecognition from '../../../components/AwardsRecognition'

export default function HaleonExperience() {
  return (
    <main className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-24 pb-16">
      <Link href="/#experience" className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[12px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8">
        ← Back to portfolio
      </Link>

      <div className="mb-8">
        <div className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] tracking-[0.12em] uppercase mb-2">
          HALEON
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[36px] text-[var(--text)] leading-tight mb-2">
          Senior Machine Learning Engineer
        </h1>
        <p className="text-[14px] text-[var(--muted)]">
          April 2024 – Present · Bengaluru, India
        </p>
      </div>

      <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-6">
        <p className="text-[14px] text-[var(--text-soft)] leading-[1.75]">
          Led MLOps and Agentic-RAG foundations for DS and GenAI services on Azure and Databricks, with engineering support, documentation, and standardized deployments.
        </p>
      </div>

      {/* Awards & Recognition */}
      <AwardsRecognition />

      {/* Projects */}
      <div className="space-y-6">
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[15px] font-medium text-[var(--accent)]">Global Consumer Help Center</h3>
            <a
              href={getAssetPath('/experience/haleon/help-center-demo')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.35)] px-3.5 py-1.5 rounded hover:bg-[rgba(200,169,110,0.18)] transition-colors font-medium"
            >
              View Demo ↗
            </a>
          </div>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7] mb-4">
            AI search solution across 15+ brand help centers, serving grounded answers and search results from 400+ brand websites and knowledge articles spanning 90 countries, markets, domains, and languages, enabling consumers and healthcare professionals to resolve queries independently. The experience feels familiar — an AI answer sits above the search results like a Google AI Overview, and it types out live, word by word, like ChatGPT.
          </p>
          <ul className="space-y-2.5">
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Built an automated pipeline that keeps content across 400+ websites fresh — crawling brand sites and product leaflets, refreshing what changed, removing outdated pages, and making everything searchable through a combination of keyword and meaning-based search.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Delivered fast search with autocomplete and suggestions, plus an AI assistant that answers using only trusted brand content and streams responses in real time — making self-service the primary channel over phone and email.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Automated quality checks that continuously score answers for accuracy, safety, and brand compliance across both curated & real traffic, keeping containment high at scale.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px] font-semibold">
              FY 2025: Drove a 70.1% self-serve containment rate and a 26.6% drop in agent-assisted contacts — cutting cost per interaction by ~95×.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px] font-semibold">
              Value: quicker, cheaper support — digital serving cost drops sharply when consumers are successfully contained, and scalable, efficient functionality helps support more consumers, more quickly.
            </li>
          </ul>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[15px] font-medium text-[var(--accent)]">Procurement Contract Intelligence</h3>
            <a
              href={getAssetPath('/experience/haleon/contract-ai-demo')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.35)] px-3.5 py-1.5 rounded hover:bg-[rgba(200,169,110,0.18)] transition-colors font-medium"
            >
              View Demo ↗
            </a>
          </div>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7] mb-4">
            AI assistant that lets procurement and business teams ask questions in plain English across 11,000+ Contract IDs and 30,000+ contracts covering ~$7B third-party spend — replacing hours of manual contract review.
          </p>
          <ul className="space-y-2.5">
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Chat-based assistant that answers questions about contracts — from quick counts and lists (&quot;how many contracts expire in 2026&quot;) to specific clause wording like payment, termination, or auto-renewal terms.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              A true agentic system — for each question the assistant reasons about what&apos;s being asked, decides which sources to check, digs deeper when the first pass looks thin, and combines the evidence into one grounded answer with follow-up question suggestions.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Two ways to work: a fast chat mode for everyday questions, and a Deep Research mode that plans the angles worth investigating, sends out specialised agents to study many contracts in parallel, and compiles everything into a structured, downloadable report.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Answers stream in live with visible progress (&quot;understanding your query&quot;, &quot;searching contract documents&quot;), and users can narrow the scope with filters for category, supplier, or a specific contract.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Delivered faster contract review, clearer compliance visibility, and measurable time and cost savings across procurement and business teams.
            </li>
          </ul>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent)] mb-3">Commercial Tech — Marketing Mix Models</h3>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">
            MLOps framework for Marketing Mix Models using Databricks Bundles, Unity Catalog, and GitHub Actions for scalable, repeatable modeling of brand and market-level sales drivers. Built robust CI/CD workflows with linting, bundle validation, pre and post semantic versioning, and automated Databricks job orchestration across Dev/UAT/Prod. Enabled dynamic, market and brand specific task generation at runtime, versioned model and data persistence in Unity Catalog, reproducible deployments via explicit semantic release tags, with outputs seamlessly refreshed in Power BI for stakeholders to optimize global marketing spend.
          </p>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent)] mb-3">MLOps and Agentic-RAG Foundation</h3>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">
            Comprehensive MLOps template for Databricks leveraging GitHub Actions to automate CI/CD pipelines, including code linting, testing, environment setup, and seamless deployment of Spark jobs, such as model training, validation, and deployment, resulting in significantly enhanced workflow efficiency and reduced deployment times. Delivered standardized framework code and detailed documentation, reused across Help Center, Contract AI, NRM, NBA, QSC, and Commercial Tech projects.
          </p>
        </div>

        {/* Other Projects */}
        <div className="pt-4">
          <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-4">Other Projects</div>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent)] mb-3">Haleon GenAI Assistant</h3>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7] mb-4">
            Architected and developed an enterprise-grade, multi-team GenAI platform integrating FastAPI, React, Azure OpenAI and Azure Cloud Services to enable secure, intelligent data access across Finance, Procurement, and Help Center from scratch.
          </p>
          <ul className="space-y-2.5">
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Built team-specific AI agents and modular tool frameworks using LangChain and LangGraph for contextual data retrieval.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Enhanced retrieval quality through semantic ranker with multilingual support and hybrid search using text and vector search in Azure AI Search.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Engineered a scalable, structure-aware document processing pipeline using Azure AI Document Intelligence with automated GitHub Actions workflows.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Experimented with MCP (Model Context Protocol) client–server architecture for distributed tool orchestration across databases and AI services.
            </li>
            <li className="text-[13px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Optimized chat architecture for sub-second latency through asynchronous processing, containerized deployment, and scalable microservice design.
            </li>
          </ul>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent)] mb-3">Asset Vision</h3>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">
            Designed and implemented a robust CI/CD pipeline with GitHub Actions to build and publish Docker images to GitHub Container Registry (GHCR) and Azure Container Registry (ACR), enabling automated deployment to Azure Web App and microservices on Kubernetes cluster for scalable, secure and reliable application management across environments. Applied same approach to streamline deployments in other RAG based projects.
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-8 pt-6 border-t border-[var(--border)]">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-3">Technologies</div>
        <div className="flex flex-wrap gap-1.5">
          {['Azure', 'Databricks', 'GitHub Actions', 'Docker', 'Kubernetes', 'Unity Catalog', 'Azure AI Search', 'Azure OpenAI', 'Spark', 'Python', 'FastAPI', 'React', 'LangChain', 'LangGraph', 'MCP', 'Azure Document Intelligence', 'Scrapy', 'GitOps', 'Semantic Versioning'].map((t) => (
            <span key={t} className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[var(--tag-text)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
