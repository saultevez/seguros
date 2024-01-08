import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import '../../src/App.css'

function HomeButtons() {
  return (
    <div class="w-full">
      <ul class="flex flex-col items-center gap-4 font-bold">
        <li className="text-black hover:text-blue-500">
          <Link to="/seguro-contra-accidentes">Seguro Contra Accidentes</Link>
        </li>
        <li class="text-black hover:text-blue-500">
          <Link to="/seguro-salud">Seguro de Salud</Link>
        </li>
        <li class="text-black hover:text-blue-500">
          <Link to="/seguro-vida">Seguro de Vida</Link>
        </li>
      </ul>
    </div>

  )
}

export default HomeButtons