import React from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'

const RadialInput = ({id, value, onChange, name, helpText, errorText, label, className}) => {
    return (
        <InputLayout id={id}
        className={className}
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        helpText={helpText}
        errorText={errorText}>
            <input
                type='radio'
                id={id}
                value={value}
                onChange={onChange}
                name={name}/>
        </InputLayout>
    )

}

RadialInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  }
export default RadialInput