import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from '../../assets/img/logo.svg'
import NavItem from "./components/NavItem"
import routes from "../../routes"

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const filteredRoutes = routes.filter(route => route.path !== '/')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="sticky top-0 z-50 bg-blue-50 shadow-sm list-none">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/">
            <img className="h-8" alt="logo" src={logo} />
          </Link>
        </div>
        <div className="hidden md:flex md:items-center space-x-4">
          {filteredRoutes.map((route) => (
            <NavItem
              key={route.path}
              to={route.path}
              className={location.pathname === route.path ? 'text-blue-500' : ''}
            >
              {route.label}
            </NavItem>
          ))}
        </div>
        <div className="md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>
      <div className={`md:opacity-0 h-[0px] ${isMenuOpen ? 'opacity-100 h-[300px]' : 'opacity-0'} transition-all duration-300 overflow-hidden`}>
        <div className="px-2 flex flex-col gap-4 pt-4 pb-3 space-y-1 text-right">
          {filteredRoutes.map((route) => (
            <NavItem
              key={route.path}
              to={route.path}
              className={location.pathname === route.path ? 'text-blue-500' : ''}
            >
              {route.label}
            </NavItem>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
