import React from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'
import classNames from 'classnames'

const TextInput = ({ id, inputClassname, placeholder, onChange, register, name, helpText, errorText, label, className }) => {
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
        className={classNames(inputClassname, 'duration-300 hover:bg-blue-100 border-transparent focus:bg-blue-100 bg-neutral-100 h-[40px] rounded px-2')}
        type="text"
        id={id}
        placeholder={placeholder}
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
