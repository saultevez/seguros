import React from 'react'
import TextInput from '../../../components/common/inputs/TextInput'
import SelectInput from '../../../components/common/inputs/SelectInput'

const MonetaryValueField = ({ register, errors, idCurrency, idCurrencyAmount, control, id }) => {
  return (
    <div className='mb-2 w-full'>
      <p>Suma para asegurar</p>
      <div className={'flex items-start py-2'}>
        <SelectInput
          inputClassname='bg-neutral-200 w-16 ps-2 rounded-s-lg rounded-e-none'
          id='tipo_de_moneda'
          errorText={errors?.tipo_de_moneda?.message}
          options={[{ label: 'PEN', value: 'PEN' }, { label: 'USD', value: 'USD' }]}
          {...{ register }}
          control={idCurrency}
        />
        <TextInput 
          placeholder={'valor'} 
          inputClassname={'rounded-e-lg rounded-s-none'} 
          id={id}
          register={register} 
          errorText={errors?.propiedad_valor?.message}
          control={idCurrencyAmount}
        />
      </div>
    </div>
  )
}

export default MonetaryValueField
