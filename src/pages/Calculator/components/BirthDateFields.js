import React from 'react'
import DateInput from '../../../components/common/inputs/DateInput'

const BirthDateFields = ({ register, errors, control, id, label, className, inputClassname, defaultValue }) => {
  return (
      <DateInput
        className={className}
        label={label}
        inputClassname={inputClassname}
        id={id}
        register={register}
        errorText={errors.fecha_nacimiento?.message}
        control={control}
        defaultValue={defaultValue}
      />
  )
}

export default BirthDateFields
