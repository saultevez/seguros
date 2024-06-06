import React from 'react'
import FormularioAccidentes from './components/FormularioAccidentes/FormularioAccidentes'
import FormularioCar from './components/FormularioVehicular/FormularioCAR'
import FormularioResponsabilidad from './components/FormularioResponsabilidadCivil'
const OtrosSeguros = () => {
    return (
        <div className='pb-4 flex flex-col gap-2'>
          <h1 className="font-bold text-xl text-center mt-5">Otros Seguros:</h1>
          <div className=''>
            <div className='mb-2'>  
          <FormularioAccidentes/>
          </div>  
          <div className='mb-2'>  
          <FormularioCar/>
          </div>
          <div className='mb-2'>  
          <FormularioResponsabilidad/>
          </div>
          </div>
          
        </div>
        )
}
export default OtrosSeguros
