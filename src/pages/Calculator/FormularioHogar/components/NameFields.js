import React from 'react';
import TextInput from '../../../../components/common/inputs/TextInput'

const NameFields = ({ register, errors, idApellidos, idNombres }) => {
  return (
    <div>
      <p>Nombres y Apellidos</p>
      <div className={'flex-col sm:flex-row flex items-start gap-4 '}>
        <TextInput
        className={'w-full flex-1'}
          id='nombres'
          register={register}
          errorText={errors?.nombres?.message}
          placeholder={'Nombres'}
          control={idNombres}
        />
        <TextInput 
        className={'w-full flex-1'}
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
