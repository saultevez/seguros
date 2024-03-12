import React from 'react'
import SelectInput from '../../../../components/common/inputs/SelectInput'
import TextInput from '../../../../components/common/inputs/TextInput'

const PropertyCharacteristcsFields = ({ register, errors, idPropertyType, idPropertyAge, idPropertyAdress }) => {
  return (
    <div>
      <div className=' flex-col sm:flex-row w-full flex gap-4'>
        <div className='w-auto flex-1'>
          <p className='mb-3'>Tipo de propiedad</p>
          <SelectInput
            id='propiedad_tipo'
            options={[
              { label: 'Casa', value: 'casa' },
              { label: 'Departamento', value: 'departamento' },
            ]}
            {...{ register }}
            errorText={errors?.propiedad_tipo?.message}
            control={idPropertyType}
          />
        </div>
        <div className='w-auto flex-1'>
          <p className='mb-3'>Antiguedad</p>
          <SelectInput
            id='propiedad_antiguedad'
            errorText={errors?.propiedad_antiguedad?.message}
            options={[
              { label: '10', value: '0-10' },
              { label: '20', value: '10-20' },
              { label: '30', value: '20-30' },
              { label: '40', value: '30-40' },
              { label: '50', value: '40-50' },
              { label: '50+', value: '50+' },
            ]}
            {...{ register }}
            control={idPropertyAge}
          />
        </div>
      </div>
      <p className='mb-3 mt-4'>Distrito</p>
        <TextInput
          id='propiedad_direccion'
          errorText={errors?.propiedad_direccion?.message}
          register={register}
          name={idPropertyAdress}
          placeholder={'Distrito'}
          control={idPropertyAdress}
        />
    </div>
  )
}

export default PropertyCharacteristcsFields
