import React from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'

const TextInput = ({ id, onChange, register, name, helpText, errorText, label, className }) => {
  return (
    <InputLayout
      className={className}
      id={id}
      label={label}
      onChange={onChange}
      name={name}
      helpText={helpText}
      errorText={errorText}
    >
      <input
        className="bg-neutral-100 h-8 rounded px-2"
        type="text"
        id={id}
        onChange={onChange}
        name={name}
        {...register(id)}
      />
    </InputLayout>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default TextInput
