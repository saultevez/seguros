import React from "react"

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className="bg-blue-500 text-white font-bold rounded py-2 px-4">
            {children}
        </button>
    )
}

export default Button