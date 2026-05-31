import Link from 'next/link'
import { getAssetPath } from '../../../utils/assets'

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
        <p className="text-[14px] text-[#B8B3AD] leading-[1.75]">
          Led MLOps and Agentic-RAG foundations for DS and GenAI services on Azure and Databricks, with engineering support, documentation, and standardized deployments.
        </p>
      </div>

      {/* Awards & Recognition */}
      <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-8">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-4">Awards & Recognition</div>
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <p className="text-[13px] text-[#B8B3AD] leading-[1.6]">
              <span className="text-[var(--text)] font-medium">Global Employee Recognition</span> — Led MLE for Consumer Help Center, Commercial Tech, and Contract Intelligence Platform.
            </p>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] whitespace-nowrap">Jan 2026</span>
          </div>
          <div className="flex items-start justify-between gap-3">
            <p className="text-[13px] text-[#B8B3AD] leading-[1.6]">
              <span className="text-[var(--text)] font-medium">2025 Excellence Award</span> — India Capability Centre - Built Agentic-RAG Contract AI platform with Procurement Analytics and Data Office.
            </p>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] whitespace-nowrap">Dec 2025</span>
          </div>
          <div className="flex items-start justify-between gap-3">
            <p className="text-[13px] text-[#B8B3AD] leading-[1.6]">
              <span className="text-[var(--text)] font-medium">Global Employee Recognition</span> — Presented Contract Intelligence Platform and Consumer Help Center at Career and Technovation Days.
            </p>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] whitespace-nowrap">Sep 2025</span>
          </div>
          <div className="flex items-start justify-between gap-3">
            <p className="text-[13px] text-[#B8B3AD] leading-[1.6]">
              <span className="text-[var(--text)] font-medium">Global Employee Recognition</span> — Outstanding efforts (GitHub Stats) for MLOps Template and Agentic RAG Foundations used across multiple projects.
            </p>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] whitespace-nowrap">Nov 2024</span>
          </div>
        </div>
      </div>

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
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7] mb-4">
            AI search solution across 15+ brand help centers, providing search results from 400+ brand websites and knowledge articles spanning multiple countries, markets, domains, and languages, enabling consumers and healthcare professionals to resolve queries independently, reducing cost and reliance on human agents.
          </p>
          <ul className="space-y-2.5">
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Large-scale web crawling from 400+ brand websites across multiple countries, markets, domains, and languages. Automated scraping using Scrapy, structure-aware information extraction from leaflets using Azure AI Document Intelligence, data ingestion to Azure Blob Storage, and updating vector and keyword indexes in Azure AI Search for real-time, high-relevance retrieval and RAG-ready content delivery.
            </li>
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Providing robust search, autocomplete, and suggestion APIs from Azure AI Search directly to the frontend team for seamless integration.
            </li>
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Agentic RAG Agent provides streaming responses along with search results — similar to a Google Search experience with AI Overview (as shown in demo).
            </li>
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              LLM-as-a-Judge evaluation framework with multiple judges evaluating answers across different scenarios — disclaimer compliance, groundedness, response consistency, and relevance — ensuring quality and safety of generated responses.
            </li>
          </ul>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent)] mb-3">Procurement Contract Intelligence</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7] mb-4">
            AI-powered, RAG-based (Agentic-RAG) contract intelligence platform that analyzed 11,000+ Contract IDs and 30,000+ contracts covering ~$7B third-party spend.
          </p>
          <ul className="space-y-2.5">
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Productionized modular workflows with Databricks Asset Bundles, integrating Azure Document Intelligence, Unity Catalog, and model serving endpoints along with automated deployment of Databricks App.
            </li>
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Built CI/CD pipelines with GitHub Actions for automated, rollback-ready workflows, deployments, and GitOps-based orchestration.
            </li>
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Agentic RAG with access to multiple tools — vector search index, SQL Toolkit, and custom Python functions working as tools for the main AI Agent — enabling deep research across contracts.
            </li>
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Enabled faster contract review with deep research functionality, improved compliance visibility, and measurable time-cost savings across procurement and business teams.
            </li>
          </ul>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent)] mb-3">Commercial Tech — Marketing Mix Models</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
            MLOps framework for Marketing Mix Models using Databricks Bundles, Unity Catalog, and GitHub Actions for scalable, repeatable modeling of brand and market-level sales drivers. Built robust CI/CD workflows with linting, bundle validation, pre and post semantic versioning, and automated Databricks job orchestration across Dev/UAT/Prod. Enabled dynamic, market and brand specific task generation at runtime, versioned model and data persistence in Unity Catalog, reproducible deployments via explicit semantic release tags, with outputs seamlessly refreshed in Power BI for stakeholders to optimize global marketing spend.
          </p>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent)] mb-3">MLOps and Agentic-RAG Foundation</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
            Comprehensive MLOps template for Databricks leveraging GitHub Actions to automate CI/CD pipelines, including code linting, testing, environment setup, and seamless deployment of Spark jobs, such as model training, validation, and deployment, resulting in significantly enhanced workflow efficiency and reduced deployment times. Delivered standardized framework code and detailed documentation, reused across Help Center, Contract AI, NRM, NBA, QSC, and Commercial Tech projects.
          </p>
        </div>

        {/* Other Projects */}
        <div className="pt-4">
          <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-4">Other Projects</div>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent)] mb-3">Haleon GenAI Assistant</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7] mb-4">
            Architected and developed an enterprise-grade, multi-team GenAI platform integrating FastAPI, React, Azure OpenAI and Azure Cloud Services to enable secure, intelligent data access across Finance, Procurement, and Help Center from scratch.
          </p>
          <ul className="space-y-2.5">
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Built team-specific AI agents and modular tool frameworks using LangChain and LangGraph for contextual data retrieval.
            </li>
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Enhanced retrieval quality through semantic ranker with multilingual support and hybrid search using text and vector search in Azure AI Search.
            </li>
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Engineered a scalable, structure-aware document processing pipeline using Azure AI Document Intelligence with automated GitHub Actions workflows.
            </li>
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Experimented with MCP (Model Context Protocol) client–server architecture for distributed tool orchestration across databases and AI services.
            </li>
            <li className="text-[13px] text-[#B8B3AD] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[11px]">
              Optimized chat architecture for sub-second latency through asynchronous processing, containerized deployment, and scalable microservice design.
            </li>
          </ul>
        </div>

        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent)] mb-3">Asset Vision</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
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
