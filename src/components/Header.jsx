import React from 'react'

function Header() {
  return (
        <header className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 px-4 sm:px-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">i</span>
            <span className="font-bold text-xl sm:text-2xl text-gray-800">Balaram Dev</span>
          </div>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4 sm:pr-8">
              <li className="mb-2 sm:mb-0"><a href="#projects" className="text-gray-600 hover:text-gray-900 no-underline text-sm sm:text-base">Projects</a></li>
              <li className="mb-2 sm:mb-0"><a href="#skills" className="text-gray-600 hover:text-gray-900 no-underline text-sm sm:text-base">Skills</a></li>
              <li className="mb-2 sm:mb-0"><a href="#about" className="text-gray-600 hover:text-gray-900 no-underline text-sm sm:text-base">About</a></li>
              <li className="mb-2 sm:mb-0"><a href="#contact" className="text-gray-600 hover:text-gray-900 no-underline text-sm sm:text-base">Contact</a></li>
            </ul>
          </nav>
        </header>
  )
}

export default Header
