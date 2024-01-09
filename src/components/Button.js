import React from "react"
import classNames from "classnames"

const Button = ({children, onClick, className}) => {
    return (
        <button onClick={onClick} className={classNames(className, " duration-300 hover:bg-blue-600 bg-blue-500 text-white font-bold rounded py-2 px-4")}>
            {children}
        </button>
    )
}

export default Button