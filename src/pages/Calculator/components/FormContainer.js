import React from "react"
import TotalContainer from "./TotalContainer"

const FormContainer = ({ title, total, children }) => {

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-[600px] mx-auto">
      <div>
        <h2 className="font-bold text-xl mb-4">{title}</h2>
        <hr className="mb-2" />
        {total ? <TotalContainer
          agePrice={state.agePrice}
          sexPrice={state.sexPrice}
          nicotinePrice={state.nicotinePrice}
        /> : <></>}
        <hr className="my-2" />
      </div>
      {children}
    </div>
  )
}

export default FormContainer
