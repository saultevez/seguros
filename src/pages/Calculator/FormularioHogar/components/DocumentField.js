import React from 'react'
import TextInput from '../../../../components/common/inputs/TextInput'
import SelectInput from '../../../../components/common/inputs/SelectInput'

const DocumentFields = ({ register, errors, idDocumentType, idDocumentNumber }) => {
  return (
    <div>
      <p>Documento de identidad</p>
      <div className={'flex items-start gap-0 py-2'}>
        <div>
          <SelectInput
            id='documento_tipo'
            inputClassname='bg-slate-200 w-16 ps-2 rounded-s-lg rounded-e-none'
            options={[{ label: 'DNI', value: 'DNI' }, { label: 'RUC', value: 'RUC' }]}
            errorText={errors?.documento_tipo?.message}
            {...{ register }}
            control={idDocumentType}
          />
        </div>
        <div className='w-auto flex-1'>
          <TextInput
            placeholder='DNI o RUC'
            inputClassname={'w-auto flex-1 rounded-e-lg rounded-s-none'}
            id='documento_numero'
            register={register}
            errorText={errors?.documento_numero?.message}
            control={idDocumentNumber} />
        </div>

      </div>
    </div>
  )
}

export default DocumentFields
