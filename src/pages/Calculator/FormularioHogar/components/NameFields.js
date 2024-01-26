import React from 'react';
import TextInput from '../../../../components/common/inputs/TextInput'

const NameFields = ({ register, errors, idApellidos, idNombres }) => {
  return (
    <div className='mb-2'>
      <p>Nombres y Apellidos</p>
      <div className={'flex items-start gap-4 py-2'}>
        <TextInput
        className={'w-auto flex-1'}
          id='nombres'
          register={register}
          errorText={errors?.nombres?.message}
          placeholder={'Nombres'}
          control={idNombres}
        />
        <TextInput 
        className={'w-auto flex-1'}
          placeholder={'Apellidos'}  
          id='apellidos'
          register={register} 
          errorText={errors?.apellidos?.message}
          name={idApellidos}
          control={idApellidos}
        />
      </div>
    </div>
  )
}

export default NameFields;
