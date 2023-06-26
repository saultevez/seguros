import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './assets/img/logo.svg';
import "./App.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/seguro-contra-accidentes">SSa</Link>
        </li>
        <li>
          <Link to="/seguro-salud">SSS</Link>
        </li>
        <li>
          <Link to="/"><img src={logo} alt=""></img></Link>
        </li>
        <li>
          <Link to="/seguro-vida">SSv</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;