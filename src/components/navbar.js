import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import logo from '../assets/img/logo.jpg'
import '../../src/App.css'
function Navbar() {
  return (
    <nav>
      <ul>
        <li class="logo">
          <Link to="/"><img className='logo' alt="logo" src={logo}/></Link>
        </li>
        <li>
          <Link to="/seguro-contra-accidentes">Seguro Contra Accidentes</Link>
        </li>
        <li>
          <Link to="/seguro-salud">Seguro de Salud</Link>
        </li>
        <li>
          <Link to="/seguro-vida">Seguro de Vida</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar