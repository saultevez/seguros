import React from "react"
const FormContainerFancy = ({ title, description, total, children, icon }) => {

  return (
    <div className="my-8 rounded-lg p-8 max-w-[800px] mx-auto">
  
        <div className=" flex-col sm:flex-row flex gap-4 items-start">
          {icon && (<div className="bg-blue-200 rounded-lg p-2 mt-1" >{icon}</div>)}
          <div>
            <h2 className="font-bold text-xl text-blue-800">{title}</h2>
            <p className="text-slate-600 mb-8">{description ? description : 'Descripción del item'}</p>
          </div>
        </div>

      {children}
    </div>
  )
}

export default FormContainerFancy
