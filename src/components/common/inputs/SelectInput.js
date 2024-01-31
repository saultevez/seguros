import React from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'
import classNames from 'classnames'

const SelectInput = ({ id, inputClassname, control, onChange, name, helpText, errorText, label, options, className, register }) => {
  return (
    <InputLayout
      id={id}
      className={classNames(className, 'flex flex-col')}
      label={label}
      helpText={helpText}
      errorText={errorText}
    >
      <select
        className={classNames(inputClassname, 'duration-300 hover:bg-blue-100 border-transparent focus:bg-blue-100 bg-slate-100 h-[40px] rounded-lg px-2')}
        id={id}
        name={name}
        {...register(id)}
        onInput={(e) => {
          if (control) {
            document.getElementById(control).value = e.target.value
          }
        }}
      >
        {options?.map((option, index) => (
          <option key={index} id={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {control && (
        <select
          className={'hidden'}
          id={control}
          name={control}
        >
          {options?.map((option, index) => (
            <option key={index} id={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </InputLayout>
  )
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  register: PropTypes.func.isRequired,
}

export default SelectInput
