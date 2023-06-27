import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './assets/img/logo.svg';
import "./App.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li class="logo">
          <Link to="/"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="logo-svg" fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM28.9343 10.6424C29.6379 12.341 30 14.1615 30 16H16L2 16C2 14.1615 2.36212 12.341 3.06569 10.6424C3.76925 8.94387 4.80048 7.40053 6.1005 6.10051C7.40052 4.80049 8.94387 3.76925 10.6424 3.06569C12.341 2.36212 14.1615 2 16 2C17.8385 2 19.659 2.36212 21.3576 3.06569C23.0561 3.76925 24.5995 4.80048 25.8995 6.1005C27.1995 7.40053 28.2307 8.94387 28.9343 10.6424Z" fill="#313131" />
          </svg></Link>
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
  );
}

export default Navbar;