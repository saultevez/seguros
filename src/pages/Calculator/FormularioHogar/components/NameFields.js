import React from 'react'
import TextInput from '../../../../components/common/inputs/TextInput'

const NameFields = ({ register, errors }) => {
  return (
    <div className='mb-2'>
      <p>Nombres y Apellidos</p>
      <div className={'flex items-start gap-4 py-2'}>
        <TextInput
          id={'nombres'}
          register={register}
          errorText={errors.nombres?.message}
          placeholder={'Nombres'}
        />
        <TextInput placeholder={'Apellidos'}  id={'apellidos'} register={register} errorText={errors.apellidos?.message}/>
      </div>
    </div>
  )
}

export default NameFields
