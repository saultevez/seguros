import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const InputLayout = ({ label, helpText, errorText, id, children, className }) => {
    return (
        <div className= {classNames(className, 'flex flex-col gap-2')}>
            {label && (
                <label htmlFor={id} className="font-sans">
                    {label}
                </label>
            )}
            {children}
            {helpText && (
                <p className="text-xs text-slate-300">
                    {helpText}
                </p>
            )}
            {errorText && (
                <p className="text-xs text-red-500">
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