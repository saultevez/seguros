import React from "react"
import { twMerge } from 'tailwind-merge'

const Button = ({ children, onClick, className, type, disabled }) => {
  const buttonClasses = twMerge(
    "duration-300 text-white cursor-pointer hover:bg-blue-600 disabled:text-slate-300 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:hover:bg-slate-100 bg-blue-500",
    "font-bold rounded-lg py-2 px-4",
    className,
  )
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
