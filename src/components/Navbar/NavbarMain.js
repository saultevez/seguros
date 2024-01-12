import React from "react"
import { Link, useLocation } from "react-router-dom"
import logo from '../../assets/img/logo.svg'
import NavItem from "./components/NavItem"
import routes from "../../routes"

function Navbar() {
  const location = useLocation()
  return (
    <nav className="w-full px-3">
      <ul className="flex justify-center w-full p-4 items-center gap-4">
        <li className="w-12 mr-auto">
          <Link to="/">
            <img className="logo" alt="logo" src={logo} />
          </Link>
        </li>
        {routes.map((route) => (

          <NavItem
            key={route.path}
            to={route.path}
            className={location.pathname === route.path ? 'text-blue-500' : ''}
          >
            {route.label}
          </NavItem>
        ))}
      </ul>
      <hr/>
    </nav>
  )
}

export default Navbar
