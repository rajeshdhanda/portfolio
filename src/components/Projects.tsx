export default function Projects() {
  const projects = [
    {
      title: "Sparse Linear Regression with Advanced Optimization",
      description: "Implemented sparse linear regression utilizing Accelerated Proximal Gradient Descent and Stochastic Coordinate Gradient Descent optimization techniques.",
      technologies: ["Machine Learning", "Optimization", "Python", "Mathematical Modeling"],
      metrics: "Advanced ML Algorithms",
      category: "ML - IIT Kanpur",
      institution: "IIT Kanpur",
      icon: "fa-robot",
      gradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100"
    },
    {
      title: "Multiclass Code Repair Classification",
      description: "Developed multiclass classification system for code repair using Bag of Words representations with Learning with Prototypes, One vs All, and Decision Tree methods.",
      technologies: ["Classification", "NLP", "Decision Trees", "Machine Learning"],
      metrics: "Multiple ML Approaches",
      category: "ML - IIT Kanpur",
      institution: "IIT Kanpur",
      icon: "fa-code-branch",
      gradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-100"
    },
    {
      title: "8 Programming Languages in 8 Weeks",
      description: "Comprehensive programming challenge covering 8 different programming languages in 8 weeks, exploring various paradigms and developing foundational understanding.",
      technologies: ["Multi-Language", "Programming Paradigms", "Software Development", "Problem Solving"],
      metrics: "8 Languages Mastered",
      category: "Programming Club - IIT Kanpur",
      institution: "IIT Kanpur",
      icon: "fa-laptop-code",
      gradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100"
    },
    {
      title: "ANITA Experiment Data Analysis",
      description: "Analyzed radio pulses and surface topography in ANITA experiment, creating 3D visualizations of mathematical formulations and experimental data using Python.",
      technologies: ["Data Analysis", "3D Visualization", "Python", "Scientific Computing"],
      metrics: "3D Data Visualization",
      category: "Academic Project - IIT Kanpur",
      institution: "IIT Kanpur",
      icon: "fa-chart-line",
      gradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-100"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
          <i className="fas fa-graduation-cap text-indigo-600 mr-3"></i>
          Academic Projects
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Research and development projects from IIT Kanpur
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white border-2 ${project.borderColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group`}>
              {/* Header with Icon and Category */}
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-br ${project.gradient} rounded-lg p-3 border ${project.borderColor}`}>
                  <i className={`fas ${project.icon} text-2xl text-indigo-600`}></i>
                </div>
                <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-200">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies Section */}
              <div className="mb-4 pt-4 border-t border-gray-200">
                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Metrics */}
              <div className={`bg-gradient-to-br ${project.gradient} rounded-lg p-3 border ${project.borderColor} mt-4`}>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-green-600"></i>
                  <span className="text-sm font-semibold text-gray-800">{project.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* IIT Kanpur Attribution */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-lg p-6 inline-block shadow-lg">
            <div className="flex items-center gap-3">
              <i className="fas fa-university text-amber-500 text-2xl"></i>
              <p className="text-gray-900 font-medium">
                Projects completed at{' '}
                <a 
                  href="https://www.iitk.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-semibold text-amber-700 hover:text-amber-900 underline"
                >
                  Indian Institute of Technology, Kanpur
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
