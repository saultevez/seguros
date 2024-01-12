import React from 'react'
import DateInput from '../../../components/common/inputs/DateInput'

const BirthDateFields = ({ register, errors }) => {
  return (
      <DateInput
        className={'mb-2'}
        label={'Fecha de Nacimiento'}
        id={'fecha_nacimiento'}
        register={register}
        errorText={errors.fecha_nacimiento?.message}
      />
  )
}

export default BirthDateFields
