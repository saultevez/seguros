import React from 'react'
import TextInput from '../../../components/common/inputs/TextInput'

const TextFields = ({ register, errors, id, label, name, control, className }) => {
  return (
      <TextInput
        className={className}
        label={label}
        id={id}
        register={register}
        errorText={errors?.[id]?.message}
        placeholder={label}
        name={name}
        control={control}
      />
  )
}

export default TextFields
