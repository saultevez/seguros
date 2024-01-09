import React from 'react'
import TextInput from '../../../../components/common/inputs/TextInput'

const EmailFields = ({ register, errors }) => {
  return (
      <TextInput
        className={'mb-2'}
        label={'Email'}
        id={'email'}
        register={register}A
        errorText={errors.email?.message}
        placeHolder={'email'}
      />
  )
}

export default EmailFields
