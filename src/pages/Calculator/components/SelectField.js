import React from 'react'
import SelectInput from '../../../components/common/inputs/SelectInput'

const SelectField = ({ register, errors, id, options, label }) => {
  return (
      <SelectInput
        className={'mb-2'}
        label={label}
        id={id}
        register={register}
        errorText={errors?.[id]?.message}
        options={options}
          {...{ register }}
      />
  )
}

export default SelectField
