import React from 'react'
import SelectInput from '../../../../components/common/inputs/SelectInput'

const TipoPropiedadAntiguedad = ({ register }) => {
  return (
    <div>
      <div className='w-full flex gap-4'>
        <div className='w-auto flex-1'>
          <h3 className="font-bold mb-3">Tipo de propiedad</h3>
          <SelectInput
            id="casa_o_depa"
            options={[
              { label: 'Casa', value: 'casa' },
              { label: 'Departamento', value: 'departamento' },
            ]}
            {...{ register }}
          />
        </div>
        <div className='w-auto flex-1'>
          <h3 className="font-bold mb-3">Antiguedad</h3>
          <SelectInput
            id="propiedad_antiguedad"
            options={[
              { label: '10', value: 10 },
              { label: '20', value: 20 },
              { label: '30', value: 30 },
              { label: '40', value: 40 },
              { label: '50+', value: 50 },
            ]}
            {...{ register }}
          />
        </div>
      </div>
    </div>
  )
}

export default TipoPropiedadAntiguedad
