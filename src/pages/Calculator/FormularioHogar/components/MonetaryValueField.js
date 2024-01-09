import React from 'react'
import TextInput from '../../../../components/common/inputs/TextInput'
import SelectInput from '../../../../components/common/inputs/SelectInput'

const MonetaryValueField = ({ register, errors }) => {
  return (
    <div className='mb-2'>
      <p>Suma para asegurar</p>
      <div className={'flex items-start py-2'}>
        <SelectInput
          className={'w-auto flex-1'}
          inputClassname='bg-neutral-200 w-16 ps-2 rounded-s rounded-e-none'
          id={'soles_o_dolares'}
          options={[{ label: 'PEN', value: 'soles' }, { label: 'USD', value: 'dolares' }]}
          {...{ register }}
        />
        <TextInput inputClassname={'rounded-e rounded-s-none'} id={'propiedad_valor'} register={register} errorText={errors?.propiedad_valor?.message}/>
      </div>
    </div>
  )
}

export default MonetaryValueField
