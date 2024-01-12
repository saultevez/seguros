import React from "react"
import TotalContainer from "./TotalContainer"

const FormContainer = ({ title, description, total, children, icon }) => {

  return (
    <div className="relative mt-8 bg-white shadow-md rounded-lg p-8 w-[600px] mx-auto">
      <div>
        {icon && (<div className="absolute top-[-10px] p-4 bg-blue-500 rounded-full left-[-15px]">{icon}</div>)}
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="mb-4 text-neutral-600">{description ? description : 'Descripción del item'}</p>
        <hr className="mb-2" />
        {total && (<div> <TotalContainer
          agePrice={total}
          sexPrice={total}
          nicotinePrice={total}
        />
        <hr className="my-2" /></div>)}
      </div>
      {children}
    </div>
  )
}

export default FormContainer
