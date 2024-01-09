import React from "react"
import { Link } from "react-router-dom"
import logo from '../../assets/img/logo.jpg'
import NavItem from "./components/NavItem"
import routes from "../../routes"
function Navbar() {
  return (
    <nav>
      <ul className="flex p-4 items-center gap-4">
        <li className="w-12">
          <Link to="/">
            <img className="logo" alt="logo" src={logo} />
          </Link>
        </li>
        {routes.map((route) => (
          <NavItem key={route.path} to={route.path}>
            {route.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar