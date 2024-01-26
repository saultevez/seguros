import React from "react";
import classNames from "classnames";

const Button = ({ children, onClick, className, type, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        className,
        "duration-300",
        {
          "hover:bg-neutral-100": disabled,
          "hover:bg-blue-600": !disabled,
          "bg-blue-500": !disabled,
          "text-white": !disabled,
          "cursor-pointer": !disabled,
          "cursor-not-allowed": disabled,
        },
        "font-bold rounded-lg py-2 px-4"
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
