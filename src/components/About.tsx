import { getAssetPath } from '../utils/assets'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="space-y-6 lg:col-span-3">
            <p className="text-lg text-gray-600 leading-relaxed">
              With 5 years of experience in ML/DL model deployment, RESTful APIs, Docker, Kubernetes, and cloud platforms (Azure, GCP, Databricks), I am a proactive and results-driven machine learning engineer passionate about building highly scalable and resilient ML infrastructure. My expertise lies in CI/CD automation, container orchestration, Infrastructure as Code, and developing low-latency, high-performance inference systems to enable data scientists with seamless deployments and robust, production-grade workflows.
            </p>
          </div>
          
          <div className="flex justify-center lg:col-span-2">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <img 
                    src={getAssetPath("/Microsoft_Azure.svg")} 
                    alt="Microsoft Azure" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">Azure</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <img 
                    src={getAssetPath("/Google_Cloud_logo.svg")} 
                    alt="Google Cloud Platform" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">GCP</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-red-50 rounded-lg shadow-lg">
                  <img 
                    src={getAssetPath("/databricks.svg")} 
                    alt="Databricks" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">Databricks</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <img 
                    src={getAssetPath("/docker_logo.svg")} 
                    alt="Docker" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">Docker</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <img 
                    src={getAssetPath("/kubernetes_logo.svg")} 
                    alt="Kubernetes" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">Kubernetes</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-lg shadow-lg">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2772 21.0498 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="#181717"/>
                  </svg>
                </div>
                <p className="text-gray-600 text-sm font-medium">GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
