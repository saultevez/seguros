import React from 'react'
import RadialInput from '../../../components/common/inputs/RadialInput'

const RadialFields = ({ register, inputClassname, errors, id, options, label, boxSelect }) => {
  return (
      <RadialInput
        className={'mb-2'}
        label={label}
        id={id}
        register={register}
        errorText={errors?.[id]?.message}
        options={options}
        boxSelect={boxSelect}
        inputClassname={inputClassname}
          {...{ register }}
      />
  )
}

export default RadialFields
