import React from 'react'
import TextInput from '../../../../components/common/inputs/TextInput'
import SelectInput from '../../../../components/common/inputs/SelectInput'

const SumaAsegurada = ({ register }) => {
  return (
    <div>
      <h3 className="font-bold">Suma asegurada</h3>
      <div className={'flex items-start py-2'}>
        <SelectInput
          className={'w-auto flex-1'}
          inputClassname='bg-neutral-200 w-16 ps-2 rounded-s rounded-e-none'
          id={'soles_o_dolares'}
          options={[{ label: 'PEN', value: 'soles' }, { label: 'USD', value: 'dolares' }]}
          {...{ register }}
        />
        <TextInput inputClassname={'rounded-e rounded-s-none'} id={'propiedad_valor'} register={register} />
      </div>
    </div>
  )
}

export default SumaAsegurada
