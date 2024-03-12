import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'
import classNames from 'classnames'

const RadialInput = ({ id, options, inputClassname, register, control, onChange, name, helpText, errorText, label, className, boxSelect, defaultValue }) => {
  const [selected, setSelected] = useState(null)

  const handleOptionChange = (optionObject) => {
    setSelected(optionObject.id)
    onChange && onChange(optionObject.id)

    if (control) {
      const hiddenRadios = document.querySelectorAll(`input[type="radio"][name="${control}"]`)
      hiddenRadios.forEach((radio) => {
        radio.checked = radio.value === optionObject.value
      })
    }
  }

  useEffect(() => {
    onChange && onChange(selected)
  }, [selected, onChange])

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
      <div className={classNames(inputClassname, boxSelect
        ? 'flex gap-4'
        : 'flex flex-col sm:grid sm:grid-cols-2 gap-4',)}>
        {options.map((option, index) => (
          <div
            key={index}
            className={classNames(
              boxSelect
                ? 'border-2 cursor-pointer duration-300 p-4 rounded-lg  w-full text-left hover:bg-blue-200 flex gap-2 items-center ml-1'
                : 'w-auto flex gap-2 items-center ml-1 text-left',
              {
                'bg-blue-200/50 border-blue-500 active:shadow-lg': boxSelect && option.id === selected,
                'bg-slate-100/50 border-transparent': boxSelect && option.id !== selected,
              }
            )}
            onClick={() => handleOptionChange(option)}
          >
            <input
              className='focus:outline-none duration-300'
              type='radio'
              id={option.id}
              value={option.value}
              onClick={() => handleOptionChange(option)}
              {...register(id)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
        {control && (
          options.map((option, index) => (
            <input
              key={index}
              className='hidden'
              type='radio'
              id={control}
              value={option.value}
              name={control}
              defaultChecked={defaultValue === option.value}
            />
          ))
        )}
      </div>
    </InputLayout>
  )
}

RadialInput.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.any.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  register: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  helpText: PropTypes.string,
  errorText: PropTypes.string,
  label: PropTypes.any,
  className: PropTypes.string,
}

export default RadialInput
