import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

function HomeButtons() {
  return (
    <div class="container-main">
      <ul class="home-buttons-container">
      <li class="home-button">
        <Link to="/seguro-contra-accidentes">Seguro Contra Accidentes</Link>
      </li>
      <li class="home-button">
        <Link to="/seguro-salud">Seguro de Salud</Link>
      </li>
      <li class="home-button">
        <Link to="/seguro-vida">Seguro de Vida</Link>
      </li>
    </ul>
    </div>
    
  );
}

export default HomeButtons;