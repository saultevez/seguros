import React from 'react'
import PropTypes from 'prop-types'
import InputLayout from './InputLayout'
import classNames from 'classnames'

const CheckInput = ({ id, options, inputClassname, register, onChange, name, helpText, errorText, label, className }) => {
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
            <div className={classNames(inputClassname, 'flex gap-4 items-center')}>
                {options.map((option, index) => (
                    <div className='w-auto flex-1 flex gap-2 items-center ml-1' key={index}>
                        <input
                            className='focus:outline-none duration-300'
                            type='checkbox'
                            id={option.id}
                            name={name}
                            value={option.value}
                            {...register(id)}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
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
}

export default CheckInput
