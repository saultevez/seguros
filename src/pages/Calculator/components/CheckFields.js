import React from 'react'
import CheckInput from '../../../components/common/inputs/CheckInput'
import classNames from 'classnames'

const CheckFields = ({ register, className, errors, id, options, label }) => {
  return (
      <CheckInput
        className={classNames(className, 'mb-2')}
        label={label}
        id={id}
        register={register}
        errorText={errors?.[id]?.message}
        options={options}
          {...{ register }}
      />
  )
}

export default CheckFields
