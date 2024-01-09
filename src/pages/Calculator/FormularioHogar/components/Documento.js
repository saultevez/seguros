import React from 'react'
import TextInput from '../../../../components/common/inputs/TextInput'
import SelectInput from '../../../../components/common/inputs/SelectInput'

const DocumentoIdentidad = ({ register }) => {
  return (
    <div>
      <h3 className="font-bold">Documento de identidad</h3>
      <div className={'flex items-center gap-0 py-2'}>
        <SelectInput
          className={'w-auto flex-1'}
          id={'ruc_o_dni'}
          inputClassname='bg-neutral-200 w-16 ps-2 rounded-s rounded-e-none'
          options={[{ label: 'DNI', value: 'dni' }, { label: 'RUC', value: 'ruc' }]}
          {...{ register }}
        />
        <TextInput  inputClassname={'rounded-e rounded-s-none'} id={'numero_documento'} register={register} />
      </div>
    </div>
  )
}

export default DocumentoIdentidad
