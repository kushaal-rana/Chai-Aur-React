import React, { forwardRef } from "react";
import { useId } from "react";

const Input = forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className={`${className} p-3 rounded-lg text-sm flex bg-white`}>
        <div className="w-1/2">
          {label && (
            <label
              htmlFor={id}
              className={`mb-2 inline-block ${
                className.includes("bg-black")
                  ? "text-white/70"
                  : "text-black/40"
              }`}
            >
              {label}
            </label>
          )}
        </div>

        <input
          type={type}
          id={id}
          className={` w-full bg-transparent py-1.5 px-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 transition duration-200 ease-in-out border-gray-300 focus:border-gray-500 ${className}`}
          {...props}
          ref={ref}
        />
        <select
          className={`outline-none w-full bg-transparent py-1.5 ${
            className.includes("bg-black")
              ? "text-white placeholder-white/50"
              : "text-black placeholder-black/50"
          }`}
        ></select>
      </div>
    );
  }
);
export default Input;
