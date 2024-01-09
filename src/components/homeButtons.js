import React from "react"
import routes from "../routes"
import HomeButton from "./homeButton"
import '../../src/App.css'

function HomeButtons() {
  return (
    <div className="w-full">
      <ul className="flex flex-col items-center gap-4 font-bold">
        {routes.map((button) => (
          <HomeButton key={button.path} to={button.path} label={button.label} />
        ))}
      </ul>
    </div>
  )
}

export default HomeButtons