import React from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'

const SelectInput = ({id, value, onChange, name, helpText, errorText, label, options}) => {
    return (
        <InputLayout id={id}
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        helpText={helpText}
        errorText={errorText}>
            <select
                type='radio'
                id={id}
                value={value}
                onChange={onChange}
                name={name}>
            {options?.map((index, option) => {
                return (
                    <option key={index} id={index} value={option.value}>{option.label}</option>
                )
            })}
            </select>
        </InputLayout>
    )

}

SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  }
export default SelectInput