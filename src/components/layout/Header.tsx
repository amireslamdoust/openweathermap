import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between sm:h-16">
          <div className="flex">
            <div className="hidden sm:ml-6 sm:flex">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="felx sm:hidden ">
        <div className="my-2">
          <Link
            to="/"
            className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
