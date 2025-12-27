'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-lg border-b border-gray-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300">
              Rajesh Dhanda
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link href="/" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Home
              </Link>
              <Link href="/#about" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                About
              </Link>
              <Link href="/#experience" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Experience
              </Link>
              <Link href="/#skills" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Skills
              </Link>
              <Link href="/#competitions" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Competitions
              </Link>
              <Link href="/#projects" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Projects
              </Link>
              <Link href="/#canvasnote" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                CanvasNote
              </Link>
              <Link href="/#education" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Education
              </Link>
              <Link href="https://drive.google.com/file/d/1rKgBAFzYi0WNvGAGq2fDO7Rn3BI-jsYL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Resume
              </Link>
              {/* <Link href="/bucket-list" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Bucket List
              </Link> */}
              <Link href="/#contact" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <div className="space-y-1">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700 shadow-lg">
            <Link href="/" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              Home
            </Link>
            <Link href="/#about" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              About
            </Link>
            <Link href="/#experience" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              Experience
            </Link>
            <Link href="/#skills" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              Skills
            </Link>
            <Link href="/#competitions" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              Competitions
            </Link>
            <Link href="/#projects" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              Projects
            </Link>
            <Link href="/#canvasnote" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              CanvasNote
            </Link>
            <Link href="/#education" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              Education
            </Link>
            <Link href="https://drive.google.com/file/d/1rKgBAFzYi0WNvGAGq2fDO7Rn3BI-jsYL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              Resume
            </Link>
            {/* <Link href="/bucket-list" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              Bucket List
            </Link> */}
            <Link href="/#contact" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

