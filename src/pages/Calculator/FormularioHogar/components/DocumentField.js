import React from 'react'
import TextInput from '../../../../components/common/inputs/TextInput'
import SelectInput from '../../../../components/common/inputs/SelectInput'

const DocumentFields = ({ register, errors }) => {
  return (
    <div className='mb-2'>
      <p>Documento de identidad</p>
      <div className={'flex items-start gap-0 py-2'}>
        <SelectInput
          className={'w-auto flex-1'}
          id={'ruc_o_dni'}
          inputClassname='bg-neutral-200 w-16 ps-2 rounded-s rounded-e-none'
          options={[{ label: 'DNI', value: 'dni' }, { label: 'RUC', value: 'ruc' }]}
          {...{ register }}
        />
        <TextInput  inputClassname={'rounded-e rounded-s-none'} id={'documento_numero'} register={register} errorText={errors?.documento_numero?.message}/>
      </div>
    </div>
  )
}

export default DocumentFields
