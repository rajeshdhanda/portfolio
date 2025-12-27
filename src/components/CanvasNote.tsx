import Image from 'next/image'

export default function CanvasNote() {
  return (
    <section id="canvasnote" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
          <i className="fas fa-pencil-alt text-indigo-600 mr-3"></i>
          Published Application
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Production-ready native Linux application on Ubuntu Snap Store
        </p>
        
        <div className="bg-white border-2 border-indigo-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
          {/* Top Section: Title, Description, Why I Built This */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left: Title and Description */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Image 
                    src="/portfolio/canvasnote.png" 
                    alt="CanvasNote Logo" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">CanvasNote</h3>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A comprehensive native Linux note-taking and drawing application optimized for 2-in-1/tablet devices with stylus support, featuring intelligent palm rejection, multiple input methods, and professional organization tools.
                </p>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-lightbulb text-amber-500 text-xl mt-1"></i>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Why I Built This</h5>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        I use an <a 
                          href="https://rog.asus.com/laptops/rog-flow/rog-flow-z13-2022-series/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-semibold text-amber-700 hover:text-amber-900 underline"
                        >ASUS ROG Flow Z13 (2022)</a> with touchscreen and stylus on Linux. Since I couldn&apos;t find a Linux note-taking app that handled stylus input and palm rejection reliably, I built one tailored to my needs and shared it on the Snap Store for others to use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Metrics and Actions */}
              <div className="lg:w-80">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-box text-green-600"></i>
                    <span className="font-semibold text-gray-900">Published on</span>
                  </div>
                  <p className="text-2xl font-bold text-green-700">Ubuntu Snap Store</p>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://snapcraft.io/canvasnote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      alt="Get it from the Snap Store" 
                      src="https://snapcraft.io/en/dark/install.svg"
                      className="w-full rounded-lg shadow-md hover:shadow-lg transition-all"
                    />
                  </a>
                  
                  <a
                    href="https://github.com/rajeshdhanda/canvasnote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                  >
                    <i className="fab fa-github mr-2"></i>
                    View on GitHub
                  </a>
                  
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-3">
                    <code className="text-sm text-gray-800 font-mono">
                      sudo snap install canvasnote
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features - Full Width */}
          <div className="mb-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-star text-yellow-500 mr-2"></i>
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <span className="text-gray-700">Pressure-sensitive stylus with palm rejection</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <span className="text-gray-700">Text input with formatting support</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <span className="text-gray-700">Multi-page A4 notes with templates</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <span className="text-gray-700">Shape tools and highlighter</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <span className="text-gray-700">Subject-based library organization</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <span className="text-gray-700">Export to PNG/PDF formats</span>
              </div>
            </div>
          </div>

          {/* Bottom: Technical Highlights */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-code text-indigo-600 mr-2"></i>
              Technical Highlights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                <i className="fas fa-layer-group text-blue-600 text-2xl mb-2"></i>
                <h5 className="font-semibold text-gray-900 mb-1">Architecture</h5>
                <p className="text-sm text-gray-600">Built with GTK4 and libadwaita for native Linux desktop integration with Cairo graphics rendering</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
                <i className="fas fa-hand-pointer text-green-600 text-2xl mb-2"></i>
                <h5 className="font-semibold text-gray-900 mb-1">Input Handling</h5>
                <p className="text-sm text-gray-600">Advanced evdev-based palm rejection with automatic stylus detection and pressure sensitivity</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                <i className="fas fa-cog text-purple-600 text-2xl mb-2"></i>
                <h5 className="font-semibold text-gray-900 mb-1">Deployment</h5>
                <p className="text-sm text-gray-600">Packaged with Snapcraft for secure, sandboxed distribution with automatic updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
