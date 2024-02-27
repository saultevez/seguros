import React from 'react'
import SelectInput from '../../../components/common/inputs/SelectInput'

const SelectField = ({ register, errors, id, options, label, control, className, placeholder }) => {
  return (
      <SelectInput
        className={className}
        label={label}
        id={id}
        register={register}
        errorText={errors?.[id]?.message}
        options={options}
        {...{ register }}
        control={control}
        placeholder={placeholder}
      />
  )
}

export default SelectField
