import React from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'
import { twMerge } from 'tailwind-merge'

const DateInput = ({ id, inputClassname, placeholder, onChange, register, name, helpText, errorText, label, className, control, defaultValue }) => {
  const min = '1920-01-01'
  const inputClasses = twMerge(
    'duration-300 hover:bg-blue-100 focus:bg-blue-100 bg-slate-100 h-[40px] rounded-lg px-2 border-transparent',
    inputClassname
  )
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
        className={inputClasses}
        type="date"
        min={min}
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
                className='hidden'
                type='date'
                min={min}
                id={control}
                name={control}
                defaultValue={defaultValue}
              />
        )}
    </InputLayout>
  )
}

DateInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
}

export default DateInput
