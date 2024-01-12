import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'
import classNames from 'classnames'

const RadialInput = ({ id, options, inputClassname, register, onChange, name, helpText, errorText, label, className, boxSelect }) => {
  const [selected, setSelected] = useState(null)

  const handleOptionChange = (optionId) => {
    setSelected(optionId)
    onChange && onChange(optionId)
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
      <div className={classNames(inputClassname, 'flex gap-4')}>
        {options.map((option, index) => (
          <div
            key={index}
            className={classNames(
              boxSelect
                ? 'border-2 cursor-pointer duration-300 p-4 rounded-lg w-full hover:bg-blue-200 flex gap-2 items-center ml-1'
                : 'w-auto flex-1 flex gap-2 items-center ml-1',
              {
                'bg-blue-200/50 border-blue-500 active:shadow-lg': boxSelect && option.id === selected,
                'bg-blue-100/50 border-transparent': boxSelect && option.id !== selected

              }
            )}
            onClick={() => handleOptionChange(option.id)}
          >
            <input
              className='focus:outline-none duration-300'
              type='radio'
              id={option.id}
              name={name}
              value={option.value}
              onClick={() => handleOptionChange(option.id)}
              checked={selected === option.id}
              {...register(id)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </InputLayout>
  )
}

RadialInput.propTypes = {
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
}

export default RadialInput
