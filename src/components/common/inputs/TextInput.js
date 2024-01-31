import React from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'
import classNames from 'classnames'

const TextInput = ({ id, inputClassname, placeholder, onChange, register, name, helpText, errorText, label, className, control }) => {
  return (
    <InputLayout
      className={className}
      id={id}
      label={label}
      onChange={onChange}
      helpText={helpText}
      errorText={errorText}
    >
      <input
        className={classNames(inputClassname, 'duration-300 hover:bg-blue-100 border-transparent focus:bg-blue-100 bg-slate-100 h-[40px] rounded-lg px-2')}
        type="text"
        id={id}
        placeholder={placeholder}
        onInput={(e) => {
          if (control) {
            document.getElementById(control).value = e.target.value;
          }
        }}
        name={name}
        {...register(id)}
      />
      {control && (
        <input
        className={'hidden'}
        type="text"
        id={control}
        name={control}
      />
      )}
      
    </InputLayout>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
}

export default TextInput
