import React from 'react'
import PropTypes from 'prop-types'

const InputLayout = ({ label, helpText, errorText, id, children }) => {
    return (
        <div className='input-layout'>
            {label && (
                <label htmlFor={id} className="mb-2 font-sans font-bold capitalize">
                    {label}
                </label>
            )}
            {children}
            {helpText && (
                <p className="mt-2 text-xs text-neutral-300">
                    {helpText}
                </p>
            )}
            {errorText && (
                <p className="mt-2 text-xs text-red-500">
                    {errorText}
                </p>
            )}
        </div>
    )
}
InputLayout.propTypes = {
    label: PropTypes.string,
    helpText: PropTypes.string,
    errorText: PropTypes.string,
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }
export default InputLayout