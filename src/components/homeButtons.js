import React from "react"
import routes from "../routes"
import HomeButton from "./homeButton"

const HomeButtons = () => {
  return (
    <div className="max-w-[900px]">
      <ul className="grid grid-cols-2 items-center gap-4 font-bold w-full">
        {routes.map((button) => (
          button.label !== 'Home' && (
            <HomeButton key={button.path} to={button.path} label={button.label} />
          )
        ))}
      </ul>
    </div>
  )
}

export default HomeButtons
