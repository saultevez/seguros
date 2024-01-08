// SelectInput.jsx
import React from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'

const SelectInput = ({ id, value, onChange, name, helpText, errorText, label, options, className, register }) => {
  return (
    <InputLayout
      id={id}
      className={className}
      label={label}
      onChange={onChange}
      name={name}
      helpText={helpText}
      errorText={errorText}
    >
      <select
        className='bg-neutral-100 h-8 rounded px-2'
        id={id}
        onChange={onChange}
        name={name}
        {...register(id)}
      >
        {options?.map((option, index) => {
          return (
            <option key={index} id={index} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </InputLayout>
  )
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
}

export default SelectInput
