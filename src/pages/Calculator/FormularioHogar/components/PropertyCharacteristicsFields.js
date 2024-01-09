import React from 'react'
import SelectInput from '../../../../components/common/inputs/SelectInput'

const PropertyCharacteristcsFields = ({ register, errors }) => {
  return (
    <div className='mb-2'>
      <div className='w-full flex gap-4'>
        <div className='w-auto flex-1'>
          <p className='mb-3'>Tipo de propiedad</p>
          <SelectInput
            id="propiedad_tipo"
            options={[
              { label: 'Casa', value: 'casa' },
              { label: 'Departamento', value: 'departamento' },
            ]}
            {...{ register }}
            errorText={errors.propiedad_tipo?.message}
          />
        </div>
        <div className='w-auto flex-1'>
        <p className='mb-3'>Antiguedad</p>
          <SelectInput
            id="propiedad_antiguedad"
            errorText={errors.propiedad_antiguedad?.message}
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

export default PropertyCharacteristcsFields
