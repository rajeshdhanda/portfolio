import Link from 'next/link'

export default function Cars24Experience() {
  return (
    <main className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-24 pb-16">
      <Link href="/#experience" className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[12px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8">
        ← Back to portfolio
      </Link>

      <div className="mb-8">
        <div className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent2)] tracking-[0.12em] uppercase mb-2">
          CARS24
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[36px] text-[var(--text)] leading-tight mb-2">
          Machine Learning Engineer
        </h1>
        <p className="text-[14px] text-[var(--muted)]">
          September 2021 – April 2024 · Gurgaon, India
        </p>
      </div>

      <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-6">
        <p className="text-[14px] text-[#B8B3AD] leading-[1.75]">
          Productionized DS, Data Engineering, and BI services/pipelines on GCP (GKE, KServe, Triton Inference Server, PostgreSQL, Airflow and Vertex AI), implementing platform best practices, monitoring, and cost optimization.
        </p>
      </div>

      {/* Awards */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent2)] bg-[var(--green-bg)] border border-[var(--green-border)] px-3 py-1 rounded">
          ★ Rookie Award Q3 2022
        </span>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        {/* ML Platform */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">ML Platform</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">Serving</h4>
              <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
                Migrated 30+ DS workloads to GKE to enable better scaling, reduced latency and management of deployments (rollouts, canary deployment, monitoring, alerts). Robust CI/CD pipelines using Cloud Build for seamless and automated deployment of microservices and batch services on GKE, Cloud Functions, and Cloud Run.
              </p>
            </div>

            <div>
              <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">Inference & Request-Response Store</h4>
              <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
                EdgeDB on GKE with provisioned PostgreSQL instance as backend, with FastAPI endpoints. API employed across 10+ DS Services for real-time caching and retrieval of inferences with 5ms latency, as well as in batch processing jobs with traffic coming from Queue (PubSub) or an Orchestrator (Airflow). Integrated CI/CD pipelines for automated deployments.
              </p>
              <div className="flex gap-3 mt-2">
                <a href="https://drive.google.com/file/d/1EiB-sycgO4hvr8fHgADF9dxfzn7_stRd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Architecture ↗</a>
                <a href="https://drive.google.com/file/d/1N74h6xg6Mt_vOa5Wg5WjDznmxcH0gO5o/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Upgrade Flow ↗</a>
              </div>
            </div>

            <div>
              <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">Feature Store</h4>
              <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
                Feature-server on GKE using FastAPI with BigQuery as offline store and Redis as online store. Features at runtime, previously loaded through CSVs and required frequent update. Automated materialization pipelines, GCS-triggered updates sync online/offline stores for 10+ DS services with &lt;10ms latency. CI/CD enabled for robust rollouts.
              </p>
              <a href="https://drive.google.com/file/d/1kRH6hHc4K-P7_nUQc4gfLsYowGT7T8Bb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Architecture ↗</a>
            </div>

            <div>
              <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">Customer Interaction Analytics</h4>
              <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
                Airflow-orchestrated NLP pipeline for sales audio transcription, information extraction, summarization, and Q&A using GPT. Leverages Google Cloud Functions, Cloud Storage, KServe InferenceService, Triton, MongoDB and EdgeDB.
              </p>
            </div>
          </div>
        </div>

        {/* Orchestration Platform */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Orchestration Platform</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
            Airflow on GKE — 70+ diverse git-synced DAGs running 1000+ times daily, covering 3800+ task executions supporting DS-BI teams. Execution of tasks encompassing Cloud Function triggering, PubSub messaging, EdgeDB integrations, Snowflake-to-Google Sheets sync and GCP service integration. Implemented RBAC to enhance team visibility, established automated log cleanup ensuring a streamlined, well-maintained system.
          </p>
        </div>

        {/* Data Flow Pipeline */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Data Flow Pipeline</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
            Syncing data for 2500 Sheets with roughly 15000 Jobs/day between Snowflake and Google Sheets using Airflow, Pub-Sub, EdgeDB and GKE.
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            <a href="https://drive.google.com/file/d/1vI9r8uVN2BiVGF7693YAazSOz1yyX0YX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Architecture ↗</a>
            <a href="https://medium.com/cars24-data-science-blog/upgrading-data-flow-pipeline-cars24-1b6b8aea48e" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--accent2)] hover:text-[var(--accent)] transition-colors">Blog ↗</a>
            <a href="https://www.linkedin.com/posts/moderndatastack_optimizing-data-flow-cars24-activity-7026209461774016513-vJSR/" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Citation: Modern Data Stack ↗</a>
            <a href="https://www.dataengineeringweekly.com/i/96964228/cars-upgrading-data-flow-pipeline-at-cars" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Citation: Data Eng Weekly ↗</a>
          </div>
        </div>

        {/* NBFC DS Migration */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">NBFC DS Migration</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
            Led migration from AWS to GCP, decomposing monolith into scalable GKE microservices. Decoupled DB operations, reduced latency from 3 seconds to 503ms (99.99%), eliminating 100% timeouts previously at 8-9%. Streamlined data flow via Pub/Sub, enabling EdgeDB updates and hourly Snowflake sync. CI/CD pipelines orchestrated for seamless deployment.
          </p>
          <a href="https://drive.google.com/file/d/1XvlTULCTfEpB50KFcBauyYWsQqSKzlrg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Architecture ↗</a>
        </div>

        {/* Triton Python SDK */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Triton Python SDK</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
            Developed a pip-installable, reusable Python wheel package for seamless integration with Triton Inference Server, supporting high-performance model inference by handling both HTTP and GRPC requests in synchronous and asynchronous modes, with built-in logging, error handling, and configuration flexibility.
          </p>
        </div>

        {/* Data Platform R&D */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Data Platform R&D</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
            Experimenting with deploying Doris, StarRocks, and associated open-source tools on GKE to construct a scalable and high-performance data platform, incorporating S3-compatible object storage via MINIO/GCS, implementing access control and data retention policies, and ensuring effective Kubernetes cluster monitoring and alerting through Grafana dashboards utilizing Prometheus.
          </p>
        </div>

        {/* Audio Embeddings Search */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Audio Embeddings Search</h3>
          <p className="text-[13px] text-[#B8B3AD] leading-[1.7]">
            Experimented Minio and Milvus integration to extract audio embeddings from Minio, enabling efficient search for similar content, Redis for metadata storage.
          </p>
          <a href="https://drive.google.com/file/d/19KvVtSsnsxLBpRJoE9-SFJGd9gzmTkkN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Architecture ↗</a>
        </div>
      </div>

      {/* Blogs */}
      <div className="mt-8 pt-6 border-t border-[var(--border)]">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent2)] mb-3">Published Blogs</div>
        <div className="space-y-2">
          <a href="https://medium.com/cars24-data-science-blog/optimizing-data-flow-cars24-4c0a17b797d1" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-[var(--muted)] hover:text-[var(--text)] transition-colors">Optimizing Data Flow @ CARS24 ↗</a>
          <a href="https://medium.com/cars24-data-science-blog/ml-in-production-cars24-part-1-e712f54e20a2" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-[var(--muted)] hover:text-[var(--text)] transition-colors">ML in Production @ CARS24 (Part 1) ↗</a>
          <a href="https://medium.com/cars24-data-science-blog/upgrading-data-flow-pipeline-cars24-1b6b8aea48e" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-[var(--muted)] hover:text-[var(--text)] transition-colors">Upgrading Data Flow Pipeline @ CARS24 ↗</a>
          <a href="https://medium.com/cars24-data-science-blog/ml-in-production-cars24-part-2-6a717340d8e6" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-[var(--muted)] hover:text-[var(--text)] transition-colors">ML in Production @ CARS24 (Part 2) ↗</a>
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-8 pt-6 border-t border-[var(--border)]">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent2)] mb-3">Technologies</div>
        <div className="flex flex-wrap gap-1.5">
          {['GCP', 'GKE', 'KServe', 'Triton Inference Server', 'PostgreSQL', 'Airflow', 'VertexAI', 'EdgeDB', 'FastAPI', 'Feast', 'Redis', 'BigQuery', 'Cloud Build', 'Pub/Sub', 'Snowflake', 'MongoDB', 'Doris', 'StarRocks', 'MINIO', 'Milvus', 'Grafana', 'Prometheus'].map((t) => (
            <span key={t} className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green-text)]">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* GCP Architecture Doc */}
      <div className="mt-6">
        <a href="https://drive.google.com/file/d/1ys4_Llp7ZkcE6OAZltXG0TYTDloTeyrk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
          View GCP Architecture Overview ↗
        </a>
      </div>
    </main>
  )
}
