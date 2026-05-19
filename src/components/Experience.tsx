
'use client'
import FederatedSearchDemo from './FederatedSearchDemo'

export default function Experience() {
  // Calculate experience from Jan 1, 2021 to current date
  const getExperience = () => {
    const startDate = new Date('2021-01-01')
    const currentDate = new Date()
    
    // Calculate total days
    const totalDays = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    
    // Calculate years and remaining days
    const years = Math.floor(totalDays / 365.25) // Using 365.25 to account for leap years
    const remainingDays = totalDays - (years * 365.25)
    
    // If remaining days are within ±30 days of a full year, show exact years
    // Otherwise show n+ years
    if (Math.abs(remainingDays) <= 30) {
      return `${years} years`
    } else {
      return `${years}+ years`
    }
  }

  const experiences = [
    {
      id: 1,
      company: "HALEON",
      position: <>Senior Machine Learning Engineer (<span className="text-purple-600 font-semibold">MLOps</span>)</>,
      duration: "April 2024 - Present",
      location: "Bengaluru, India",
      description: <>Led MLOps and Agentic-RAG foundations for DS and GenAI services on <strong>Azure</strong> and <strong>Databricks</strong>, with engineering support, documentation, and standardized deployments.</>,
      achievements: [
        <><span className="font-bold text-blue-600">Haleon GenAI Assistant</span>: Architected and developed an enterprise-grade, multi-team <strong>GenAI platform</strong> integrating <strong>FastAPI</strong>, <strong>React</strong>, <strong>Azure OpenAI</strong> and Azure Cloud Services to enable secure, intelligent data access across Finance, Procurement, and Help Center from scratch.
        <ul className="mt-3 ml-6 space-y-2 list-disc text-gray-700">
          <li>Built team-specific AI agents and modular tool frameworks using <strong>LangChain</strong> and <strong>LangGraph</strong> for contextual data retrieval.</li>
          <li>Enhanced retrieval quality through <strong>semantic ranker</strong> with multilingual support and <strong>hybrid search</strong> using text and vector search in <strong>Azure AI Search</strong>.</li>
          <li>Engineered a scalable, structure-aware document processing pipeline using <strong>Azure AI Document Intelligence</strong> with automated <strong>GitHub Actions</strong> workflows, extracting structured layouts and entities, performing chunking, ingesting and managing documents in <strong>Azure Blob Storage</strong>, and updating vector and keyword indexes in <strong>Azure AI Search</strong> for real-time, high-relevance retrieval and RAG-ready content delivery.</li>
          <li>Experimented with <strong>MCP</strong> (Model Context Protocol) client–server architecture for distributed tool orchestration across databases and AI services.</li>
          <li>Optimized chat architecture for sub-second latency through asynchronous processing, containerized deployment, and scalable microservice design.</li>
        </ul>
        </>,
        <><span className="font-bold text-blue-600">Commercial Tech</span>: Implemented end-to-end MLOps framework for <strong>Marketing Mix Models</strong> using <strong>Databricks Bundles</strong>, <strong>Unity Catalog</strong>, and <strong>GitHub Actions</strong> for scalable and repeatable modeling of brand and market-level sales drivers. Built robust CI/CD workflows with linting, bundle validation, pre and post <strong>semantic versioning</strong>, and automated Databricks job orchestration across Dev/UAT/Prod. Enabled dynamic, market and brand specific task generation at <strong>runtime</strong>, versioned model and data persistence in Unity Catalog, reproducible deployments via explicit <strong>semantic release tags</strong>, with outputs seamlessly refreshed in Power BI for stakeholders to optimize global marketing spend.</>,
        <><span className="font-bold text-blue-600">Global Consumer Help Center (Consumer Tech Pillar)</span>: Architected and delivered an AI search solution across 15+ brand help centers, providing search results from 500+ brand websites and knowledge articles across multiple countries, markets, domains, and languages. Enabled consumers and healthcare professionals to resolve queries independently, reducing operational support cost and reliance on human agents.
        <ul className="mt-3 ml-6 space-y-2 list-disc text-gray-700">
          <li>Large-scale web crawling from 500+ brand websites (including help centers) across multiple countries, markets, domains, and languages. Automated scraping using <strong>Scrapy</strong>, structure-aware information extraction from leaflets using <strong>Azure AI Document Intelligence</strong>, data ingestion to <strong>Azure Blob Storage</strong>, and updating vector and keyword indexes in <strong>Azure AI Search</strong> for real-time, high-relevance retrieval and RAG-ready content delivery.</li>
          <li>Providing robust <strong>search</strong>, <strong>autocomplete</strong>, and <strong>suggestion</strong> APIs from <strong>Azure AI Search</strong> directly to the frontend team for seamless integration.</li>
          <li>For internal testing using GenAI assistant: Added <strong>Playground mode</strong> with custom model selection, temperature control, and system prompt configuration, including full prompt visibility alongside search results for enhanced experimentation and debugging.</li>
        </ul>
        </>,
        <><span className="font-bold text-blue-600">Procurement Contract Analysis</span>: Led ML-Ops for an AI-powered, RAG-based (<strong>Agentic-RAG</strong>) contract intelligence platform that analyzed 11,000+ Contract IDs and 30,000+ contracts covering ~$7B third-party spend. Productionized modular workflows with <strong>Databricks Asset Bundles</strong>, integrating <strong>Azure Document Intelligence</strong>, Unity Catalog, and model serving endpoints along with automated deployment of <strong>Databricks App</strong>. Built CI/CD pipelines with GitHub Actions for automated, rollback-ready workflows, deployments, and <strong>GitOps</strong>-based orchestration, enabling faster deep research, improved compliance visibility, and measurable time-cost savings across procurement and business teams.</>,
        <><span className="font-bold text-blue-600">Asset Vision</span>: Designed, implemented a robust CI/CD pipeline with <strong>GitHub Actions</strong> to build and publish Docker images to GitHub Container Registry (<strong>GHCR</strong>) and Azure Container Registry (<strong>ACR</strong>), enabling automated deployment to <strong>Azure Web App</strong> and microservices on <strong>Kubernetes</strong> cluster for scalable, secure and reliable application management across environments. Applied same approach to streamline deployments in other <strong>RAG</strong> based project.</>,
        <><span className="font-bold text-blue-600">MLOps and Agentic-RAG Foundation</span>: Improved and implemented a comprehensive MLOps template for <strong>Databricks</strong> leveraging <strong>GitHub Actions</strong> to automate CI/CD pipelines, including code linting, testing, environment setup, and seamless deployment of <strong>Spark</strong> jobs, such as model training, validation, and deployment, resulting in significantly enhanced workflow efficiency and reduced deployment times. Delivered standardized framework code and detailed documentation, reused across Help Center, Contract AI, NRM, NBA, QSC, and Commercial Tech projects.</>    
      ],
      technologies: ["Azure", "Databricks", "GitHub Actions", "Docker", "Kubernetes", "Unity Catalog", "Azure AI Search", "Azure OpenAI", "Spark", "Python", "FastAPI", "React", "LangChain", "Azure Cognitive Search", "MCP", "Azure Document Intelligence"]
    },
    {
      id: 2,
      company: "CARS24",
      position: <>Machine Learning Engineer (<span className="text-purple-600 font-semibold">MLOps</span>)</>,
      duration: "Sept 2021 - April 2024",
      location: "Gurgaon, India",
      description: <>Productionized DS, Data Engineering, and BI services/pipelines on <a href="https://drive.google.com/file/d/1ys4_Llp7ZkcE6OAZltXG0TYTDloTeyrk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">GCP</a> (GKE, KServe, Triton Inference Server, PostgreSQL, Airflow and Vertex AI), implementing platform best practices, monitoring, and cost optimization.</>,
      achievements: [
        <><span className="font-bold text-blue-600">ML Platform</span>: Migrated <strong>30+</strong> DS workloads to <strong>GKE</strong> to improve scale and deployment management with controlled rollouts, canary deployment, monitoring, and alerting, while reducing latency and operational overhead.</>,
        <><span className="font-bold text-blue-600">CI/CD Infrastructure</span>: Robust <strong>CI/CD</strong> pipelines using <strong>Cloud Build</strong> for seamless and automated deployment of microservices and batch services on <strong>GKE</strong>, <strong>Cloud Functions</strong>, and <strong>Cloud Run</strong>, significantly reducing deployment errors, manual effort, and turnaround times across environments. Collaborated with DS team to optimise code and model inference for higher throughput.</>,
        <><span className="font-bold text-blue-600">EdgeDB Inference Store</span>: Architected, deployed and <strong>upgraded</strong> <a href="https://drive.google.com/file/d/1EiB-sycgO4hvr8fHgADF9dxfzn7_stRd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">Inference store</a> (<strong>EdgeDB</strong> on Google Kubernetes Engine with provisioned <strong>PostgreSQL</strong> instance as backend) with <strong>FastAPI</strong> endpoints deployed in GKE. API employed across various DS Services for efficient caching and retrieval of inferences in real time (latency around <strong>5ms</strong>), as well as in batch processing jobs with traffic coming from Queue (<strong>PubSub</strong>) or an Orchestrator (<strong>Airflow</strong>). Integrated <strong>CI/CD pipelines</strong> for automated deployments in GCP (<a href="https://drive.google.com/file/d/1N74h6xg6Mt_vOa5Wg5WjDznmxcH0gO5o/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">Upgrade Flow</a>).</>,
        <><span className="font-bold text-blue-600">Feast Feature Store</span>: Efficiently deployed <strong>Feast</strong> <a href="https://drive.google.com/file/d/1kRH6hHc4K-P7_nUQc4gfLsYowGT7T8Bb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">feature-server</a> on Google Kubernetes Engine, leveraging an automated materialization pipeline for real-time data updates in <strong>Redis</strong> (Online Store) and <strong>BigQuery</strong> (Offline Store) via Cloud Functions triggered by a diverse range of team data uploads in a GCS bucket. API effectively addresses the challenge of accessing up-to-date features from CSV files and currently employed in 10+ DS services, delivering features with minimal latency (<strong>&lt;10ms</strong>). <strong>CI/CD</strong> enabled for robust rollouts.</>,
        <><span className="font-bold text-blue-600">Data Flow Pipeline</span>: Built <a href="https://drive.google.com/file/d/1vI9r8uVN2BiVGF7693YAazSOz1yyX0YX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">data flow pipeline</a> to optimize the timely data sync between Snowflake and Google Sheets using <strong>Airflow</strong>, <strong>Pub-Sub</strong>, <strong>EdgeDB</strong> and <strong>GKE</strong>. Syncing data for approx 2500 Sheets with roughly 15000 Jobs/day. (<a href="https://medium.com/cars24-data-science-blog/upgrading-data-flow-pipeline-cars24-1b6b8aea48e" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 hover:text-green-800 underline">blog</a>) (<a href="https://www.linkedin.com/posts/moderndatastack_optimizing-data-flow-cars24-activity-7026209461774016513-vJSR/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">citation</a> by Modern Data Stack, <a href="https://www.dataengineeringweekly.com/i/96964228/cars-upgrading-data-flow-pipeline-at-cars" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">citation</a> by Data Engineering Weekly).</>,
        <><span className="font-bold text-blue-600">Airflow Orchestration Platform</span>: Deployed, administered, upgraded a robust <strong>Airflow</strong> infrastructure on Google Kubernetes Engine, overseeing <strong>70+</strong> diverse git synchronised DAGs running approx <strong>1000+</strong> times daily, covering a total of <strong>3800+</strong> tasks executions to support various DS-BI teams. Efficiently managed the execution of tasks, encompassing Cloud Function triggering, job scheduling, PubSub messaging, EdgeDB integration for jobs status update, and Snowflake-to-Google Sheets data synchronization and seamless integration with diverse GCP services. Implemented <strong>RBAC</strong> to enhance team visibility, established automated log cleanup with ensuring a streamlined, well-maintained system.</>,
        <><span className="font-bold text-blue-600">NBFC Infrastructure Migration</span>: Spearheaded <a href="https://drive.google.com/file/d/1XvlTULCTfEpB50KFcBauyYWsQqSKzlrg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">migration</a> of NBFC DS infrastructure from <strong>AWS</strong> to <strong>GCP</strong>, breaking down monolith into scalable sub-monoliths and GKE-based microservices. Decoupled DB operations, slashing response times from <strong>3 seconds</strong> to <strong>503ms</strong> (99.99 percentile), and eliminating overall timeouts previously at <strong>8-9%</strong>. Implemented streamlined data flow via Pub/Sub and Cloud Functions, enabling efficient EdgeDB updates and hourly Snowflake synchronization. CI/CD pipelines orchestrated for seamless deployment of microservices on GKE and respective cloud functions.</>,
        <><span className="font-bold text-blue-600">Triton Python SDK</span>: Developed a pip-installable, reusable Python wheel package for seamless integration with <strong>Triton Inference Server</strong>, supporting high-performance model inference by handling both <strong>HTTP</strong> and <strong>GRPC</strong> requests in <strong>synchronous</strong> and <strong>asynchronous</strong> modes, with built-in logging, error handling, and configuration flexibility.</>,
        <><span className="font-bold text-blue-600">Request-Response Store</span>: Designed, deployed high-performance APIs <strong>Request-Response Store</strong> using <strong>FastAPI</strong>, featuring <strong>client authentication</strong>, <strong>rate limiting</strong> and <strong>low 5ms latency</strong>. Orchestrated storage of request-response in <strong>EdgeDB</strong>, synchronized to <strong>Snowflake</strong> based on team-defined frequencies, and leveraged by 10+ DS services.</>,
        <><span className="font-bold text-blue-600">Customer Interaction Analytics</span>: Designed and implemented a cloud-based workflow for end-to-end processing of customer interactions data. The workflow encompasses data ingestion from Snowflake, audio download, transcription generation, information extraction, and automated customer summary generation. This system is orchestrated through <strong>Airflow</strong> and leverages Google Cloud Functions, Cloud Storage, <strong>Kserve InferenceService</strong>, <strong>Triton</strong>, <strong>MongoDB</strong> and <strong>EdgeDB</strong>.</>,
        <><span className="font-bold text-blue-600">Data Platform R&D</span>: Experimenting with deploying <strong>Doris</strong>, <strong>StarRocks</strong>, and associated open-source tools on <strong>GKE</strong> to construct a scalable and high-performance data platform, incorporating <strong>S3</strong>-compatible object storage via <strong>MINIO/GCS</strong>, implementing access control and data retention policies, and ensuring effective <strong>Kubernetes</strong> cluster monitoring and alerting through <strong>Grafana&apos;s</strong> dashboards utilizing <strong>Prometheus</strong> as a primary time-series data source.</>,
        <><span className="font-bold text-blue-600">Audio Embeddings Search</span>: Experimented <a href="https://drive.google.com/file/d/19KvVtSsnsxLBpRJoE9-SFJGd9gzmTkkN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">Minio and Milvus</a> integration to extract audio embeddings from Minio, enabling efficient search for similar content, Redis for metadata storage.</>,
        
      ],
      technologies: ["GCP", "GKE", "Kserve", "Triton Inference Server", "PostgreSQL", "Airflow", "VertexAI", "EdgeDB", "FastAPI", "Feast", "Redis", "BigQuery", "Cloud Build", "Pub/Sub", "Snowflake", "MongoDB", "Doris", "StarRocks", "MINIO", "Milvus", "Grafana", "Prometheus"],
      blogs: [
        {
          title: "Optimizing Data Flow @ CARS24",
          url: "https://medium.com/cars24-data-science-blog/optimizing-data-flow-cars24-4c0a17b797d1"
        },
        {
          title: "ML in Production @ CARS24 (Part 1)",
          url: "https://medium.com/cars24-data-science-blog/ml-in-production-cars24-part-1-e712f54e20a2"
        },
        {
          title: "Upgrading Data Flow Pipeline @ CARS24",
          url: "https://medium.com/cars24-data-science-blog/upgrading-data-flow-pipeline-cars24-1b6b8aea48e"
        },
        {
          title: "ML in Production @ CARS24 (Part 2)",
          url: "https://medium.com/cars24-data-science-blog/ml-in-production-cars24-part-2-6a717340d8e6"
        }
      ]
    },
    {
      id: 3,
      company: "Deep Sight AI Labs",
      position: "Computer Vision Software Engineer",
      duration: "June 2021 - Sept 2021",
      location: "Remote",
      description: <>Developed solutions for <strong>object detection</strong>, <strong>object tracking</strong>, and <strong>video surveillance</strong> utilizing <strong>Deep Learning</strong> techniques.</>,
      achievements: [
        <>Implemented a reference direction-based <strong>entry-exit system</strong> and <strong>Object Counting Feature</strong> using <strong>DeepSort</strong>, showcased in video. </>,
        <>Conducted <strong>TensorFlow Lite</strong> model conversion of <strong>DeepSort</strong> and executed its deployment on <strong>Raspberry Pi</strong> hardware.</>
      ],
      technologies: ["Computer Vision", "Deep Learning", "DeepSort", "TensorFlow Lite", "Raspberry Pi", "Object Detection", "Object Tracking", "Video Surveillance"],
      video: {
        title: "Directions & Counting of moving Vehicles with velocity vector using Deep SORT",
        url: "https://www.youtube.com/watch?v=l9d9lOKmxEs&t=1s",
        thumbnail: "https://img.youtube.com/vi/l9d9lOKmxEs/maxresdefault.jpg"
      }
    },
    {
      id: 4,
      company: "DocBot+",
      position: "Artificial Intelligence Engineer Intern",
      duration: "March 2021 - May 2021",
      location: "Remote",
      description: <>Developed intelligent healthcare solutions focusing on <strong>disease diagnosis</strong> and <strong>symptom analysis</strong> using <strong>machine learning</strong> algorithms.</>,
      achievements: [
        <>Developed algorithm for <strong>many-to-many mapping</strong> of symptoms to diseases, enabling <strong>disease diagnosis</strong> based on symptom sets.</>,
        <>Created mathematical formulation to facilitate <strong>symptom recommendation</strong>, improving user experience and healthcare decision-making.</>,
        <>Generated random datasets to rigorously test and optimize <strong>ML algorithms</strong> for <strong>recommendation systems</strong>.</>
      ],
      technologies: ["Machine Learning", "Data Analysis", "Algorithm Development", "Healthcare AI", "Python", "Recommendation Systems"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 font-medium">
            <span className="text-2xl font-bold text-blue-600">{getExperience()}</span> of building scalable ML systems and platforms
          </p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full opacity-60"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-xl animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Content */}
              <div className="ml-20">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group-hover:border-blue-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-gray-600">
                        <span className="font-bold text-blue-600 text-lg bg-blue-50 px-3 py-1 rounded-full">{exp.company}</span>
                        <span className="hidden sm:block text-blue-400">•</span>
                        <span className="font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">{exp.duration}</span>
                        <span className="hidden sm:block text-blue-400">•</span>
                        <span className="font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full flex items-center">
                          <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-gray-700 mb-8 leading-relaxed text-lg bg-gray-50 p-4 rounded-xl border-l-4 border-blue-400">
                    {typeof exp.description === 'string' ? exp.description : exp.description}
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <svg className="w-6 h-6 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                      Key Achievements
                    </h4>
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="group">
                          <div className="text-gray-700 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                            {typeof achievement === 'string' ? achievement : achievement}
                            {/* Animated demo for Global Consumer Help Center achievement */}
                            {exp.company === 'HALEON' && idx === 2 && (
                              <FederatedSearchDemo />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Awards & Recognition — CARS24 */}
                  {exp.company === 'CARS24' && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="text-2xl mr-3">🏆</span>
                        Awards & Recognition
                      </h4>
                      <ul className="space-y-4">
                        {/* Rookie Award – Appreciation Certificate (Q3 2022) */}
                        <li className="group">
                          <div className="text-gray-700 leading-relaxed bg-gray-50/90 p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h5 className="font-bold text-blue-700 mr-2">Rookie Award – Appreciation Certificate</h5>
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-300">Special Recognition</span>
                              <span className="ml-auto text-sm text-gray-700">Q3 2022</span>
                            </div>
                            <p>
                              This certificate is proudly awarded to Rajesh Dhanda (ML Engg – Global) for outstanding performance in Quarter 3, 2022.
                            </p>
                            <div className="mt-3 text-sm text-gray-600">
                              <span className="font-semibold">Signatories:</span> VP – DS and BI, COO
                            </div>
                            {/* Optional certificate preview if hosted in public assets */}
                            {/* <div className="mt-4">
                              <img src="/certificates/cars24-rookie-award.jpg" alt="CARS24 Rookie Award Certificate" className="w-full rounded-lg border" />
                            </div> */}
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Awards & Recognition Section - separated cards like Achievements, themed to API demo colors */}
                  {exp.company === 'HALEON' && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="text-2xl mr-3">🏆</span>
                        Awards & Recognition
                      </h4>
                      <ul className="space-y-4">
                        {/* Global Employee Recognition (Bronze) - Dec 2025 */}
                        <li className="group">
                          <div className="text-gray-700 leading-relaxed bg-gray-50/90 p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h5 className="font-bold text-blue-700 mr-2">Global Employee Recognition</h5>
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-300">Bronze</span>
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 border border-purple-300">Unlock Value at Pace</span>
                              <span className="ml-auto text-sm text-gray-700">Dec 2025</span>
                            </div>
                            <p>
                              Rajesh has 1168 GitHub contributions this year, which is impeccable. He led MLE efforts and delivered successful deployments for Global Consumer Help Center, Commercial Tech, and Contract Analyzer projects. He presented the Contract Analyzer project on AI Day, receiving significant recognition across the Data Office and CDO.
                            </p>
                          </div>
                        </li>

                        {/* Global Employee Recognition (Bronze) - Nov 2024 */}
                        <li className="group">
                          <div className="text-gray-700 leading-relaxed bg-gray-50/90 p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h5 className="font-bold text-blue-700 mr-2">Global Employee Recognition</h5>
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-300">Bronze</span>
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 border border-purple-300">Go Beyond</span>
                              <span className="ml-auto text-sm text-gray-700">Nov 2024</span>
                            </div>
                            <p>
                              Outstanding ML Engineer with major contributions to GenAI initiatives including Global Consumer Help Center and RAG-based chatbots using Azure and Databricks. Significant impact on MLOps through Commercial Tech and MLOps template contributions. Recognized as a strong team player, actively supporting deployments and leading discussions across MLOps forums.
                            </p>
                          </div>
                        </li>

                        {/* Global Employee Recognition - Collaborate for Impact (Sep 2025) */}
                        <li className="group">
                          <div className="text-gray-700 leading-relaxed bg-gray-50/90 p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h5 className="font-bold text-blue-700 mr-2">Global Employee Recognition</h5>
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 border border-purple-300">Collaborate for Impact</span>
                              <span className="ml-auto text-sm text-gray-700">Sep 2025</span>
                            </div>
                            <p>
                              Exceptional contribution and energy during Career Day and Technovation Day. Presented Contract Analyzer and Global Consumer Help Center projects, receiving widespread appreciation across the Data Office and CDO.
                            </p>
                          </div>
                        </li>

                        {/* 2025 Excellence Award – India Capability Centre (Dec 2025) */}
                        <li className="group">
                          <div className="text-gray-700 leading-relaxed bg-gray-50/90 p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h5 className="font-bold text-blue-700 mr-2">2025 Excellence Award – India Capability Centre</h5>
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 border border-green-300">Simplify for Impact</span>
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 border border-purple-300">Win as One</span>
                              <span className="ml-auto text-sm text-gray-700">Dec 2025</span>
                            </div>
                            <p>
                              Helped bring Haleon’s “Win as One” strategy to life. 2025 Excellence Award – India Capability Centre for Build Contract AI – A synergy of Procurement Analytics and Data Office, revolutionising contract intelligence and management using Agentic-RAG.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="text-2xl mr-3">⚙️</span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors duration-200 shadow-sm cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Video Showcase Section */}
                  {exp.video && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        Video Showcase
                      </h4>
                      <div className="relative">
                        <a
                          href={exp.video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                          <img
                            src={exp.video.thumbnail}
                            alt={exp.video.title}
                            className="w-full h-72 object-cover transition-transform duration-300"
                            onError={(e) => {
                              console.log('Thumbnail failed to load:', exp.video.thumbnail);
                              // Fallback to different quality thumbnails if maxres fails
                              const target = e.target as HTMLImageElement;
                              if (target.src.includes('maxresdefault')) {
                                console.log('Trying hqdefault...');
                                target.src = target.src.replace('maxresdefault', 'hqdefault');
                              } else if (target.src.includes('hqdefault')) {
                                console.log('Trying mqdefault...');
                                target.src = target.src.replace('hqdefault', 'mqdefault');
                              } else if (target.src.includes('mqdefault')) {
                                console.log('Trying default thumbnail...');
                                target.src = target.src.replace('mqdefault', 'default');
                              } else {
                                console.log('All thumbnails failed, using placeholder');
                                // Final fallback to a placeholder
                                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDY0MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiBmaWxsPSIjNEEzQUZGIi8+Cjx0ZXh0IHg9IjMyMCIgeT0iMTgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VmlkZW8gVGh1bWJuYWlsPC90ZXh0Pgo8L3N2Zz4=';
                              }
                            }}
                            onLoad={() => {
                              console.log('Thumbnail loaded successfully:', exp.video.thumbnail);
                            }}
                          />
                          {/* Play button overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-500">
                            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-6 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-2xl transform group-hover:scale-110 animate-pulse">
                              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                              </svg>
                            </div>
                          </div>
                          {/* Video title overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                            <h5 className="text-white font-bold text-xl mb-2">{exp.video.title}</h5>
                            <p className="text-gray-300 text-sm flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                              Click to watch on YouTube
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Blogs Section */}
                  {exp.blogs && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                        Blogs Written & Contributed
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.blogs.map((blog: { url: string; title: string }, idx: number) => (
                          <a
                            key={idx}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl hover:from-green-100 hover:to-emerald-100 hover:border-green-300 transition-all duration-300 group transform hover:scale-105 shadow-md hover:shadow-lg"
                          >
                            <div className="flex-shrink-0 mr-4">
                              <svg className="w-6 h-6 text-green-600 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                              </svg>
                            </div>
                            <span className="text-green-800 font-semibold group-hover:text-green-900 flex-1">
                              {blog.title}
                            </span>
                            <svg className="w-5 h-5 text-green-500 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-10 border border-gray-200 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Career Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="text-4xl font-bold text-blue-600 mb-3">
                  {getExperience()}
                </h3>
                <p className="text-gray-700 font-semibold">Total Experience</p>
                <div className="w-16 h-1 bg-blue-400 mx-auto mt-3 rounded-full"></div>
              </div>
            </div>
            <div className="group hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="text-4xl font-bold text-green-600 mb-3">4</h3>
                <p className="text-gray-700 font-semibold">Companies Worked</p>
                <div className="w-16 h-1 bg-green-400 mx-auto mt-3 rounded-full"></div>
              </div>
            </div>
            <div className="group hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="text-4xl font-bold text-orange-600 mb-3">5+</h3>
                <p className="text-gray-700 font-semibold">Team Members Led</p>
                <div className="w-16 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
