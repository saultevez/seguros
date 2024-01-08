import React from 'react'
import PropTypes from 'prop-types'

const InputLayout = ({ label, helpText, errorText, id, children, className }) => {
    return (
        <div className= {className ? className : 'flex flex-col gap-2 w-full'}>
            {label && (
                <label htmlFor={id} className="font-sans capitalize">
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