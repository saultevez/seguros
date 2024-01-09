import React from 'react'
import TextInput from '../../../../components/common/inputs/TextInput'

const NombresApellidos = ({ register, errors }) => {
  return (
    <div>
      <h3 className="font-bold">Nombres y Apellidos</h3>
      <div className={'flex items-start gap-4 py-2'}>
        <TextInput
          id={'nombres'}
          register={register}
          errorText={errors.nombres?.message}
          placeHolder={'Nombres'}
        />
        <TextInput placeHolder={'Apellidos'}  id={'apellidos'} register={register} />
      </div>
    </div>
  )
}

export default NombresApellidos
