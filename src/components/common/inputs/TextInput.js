import React from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'

const TextInput = ({id, value, onChange, name, helpText, errorText, label}) => {
    return (
        <InputLayout id={id}
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        helpText={helpText}
        errorText={errorText}>
            <input
                type='text'
                id={id}
                value={value}
                onChange={onChange}
                name={name}/>
        </InputLayout>
    )

}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  }
export default TextInput