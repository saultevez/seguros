import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'
import classNames from 'classnames'

const CheckInput = ({ id, options, inputClassname, register, onChange, name, helpText, errorText, label, className, control }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  useEffect(() => {
    if (control) {
      const hiddenChecks = document.querySelectorAll(`input[type="checkbox"][name="${control}"]`)
      hiddenChecks.forEach((check) => {
        check.checked = selectedOptions.includes(check.value)
      })
    }
  }, [selectedOptions, control])

  const handleOptionChange = (optionObject) => {
    const updatedOptions = [...selectedOptions]

    if (updatedOptions.includes(optionObject.value)) {
      const index = updatedOptions.indexOf(optionObject.value)
      updatedOptions.splice(index, 1)
    } else {
      updatedOptions.push(optionObject.value)
    }

    setSelectedOptions(updatedOptions)
    onChange && onChange(updatedOptions)
  }

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
      <div className={classNames(inputClassname, 'flex gap-1 items-center')}>
        {options.map((option, index) => (
          <div className='w-auto flex-1 flex gap-2 items-center ml-1' key={index}>
            <input
              className='focus:outline-none duration-300 rounded'
              type='checkbox'
              id={option.id}
              name={name}
              value={option.value}
              onClick={() => handleOptionChange(option)}
              {...register(id)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
        {control &&
          options.map((option, index) => (
            <input
              key={index}
              className='hidden'
              type='checkbox'
              id={control}
              value={option.value}
              name={control}
            />
          ))}
      </div>
    </InputLayout>
  )
}

CheckInput.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  register: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  errorText: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  control: PropTypes.string,
}

export default CheckInput
