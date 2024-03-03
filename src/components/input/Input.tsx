import React, { ChangeEvent, FocusEvent, MouseEvent, RefObject } from "react";
import { IconType } from "react-icons";

interface InputInterface {
  labelText?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  required?: boolean;
  disable?: boolean;
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  iconClick?: (event: MouseEvent<HTMLSpanElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  min?: number | string;
  max?: number | string;
  id?: string;
  inputRef?: RefObject<HTMLInputElement>;
  error?: string;
}

const Input: React.FC<InputInterface> = ({
  labelText,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  required,
  disable,
  className,
  type,
  placeholder,
  value,
  name,
  onChange,
  iconClick,
  onFocus,
  min,
  max,
  id,
  inputRef,
  error,
}) => {
  return (
    <React.Fragment>
      {labelText ? (
        <div className="p-1">
          <label className="text-xs">{labelText}</label>
          {required && <span className="ml-1 text-red-500">*</span>}
          {error && (
            <label className="pt-0 mt-0 text-xs text-red-700">
              ( {error} )
            </label>
          )}
        </div>
      ) : null}
      <div className="relative overflow-hidden">
        {LeftIcon && (
          <span className="absolute top-0 inline-flex items-center justify-center h-full p-0 mx-3 text-gray-400 left-1">
            <LeftIcon />
          </span>
        )}
        <input
          className={`block w-full text-gray-500 text-sm focus:outline-none overflow-auto h-10 px-4 ${
            LeftIcon ? "pl-10" : ""
          } rounded-lg focus:bg-accent focus:border-gray-400 ${
            error ? "border-red-400 bg-red-100" : ""
          } ${required ? "required" : ""} ${className ? className : ""}`}
          type={type}
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          min={min}
          max={max}
          id={id}
          disabled={disable}
          autoComplete="off"
        />
        {RightIcon && (
          <span
            className="absolute top-0 right-0 inline-flex items-center justify-center h-full p-0 mx-3 text-gray-400 cursor-pointer"
            onClick={iconClick}>
            <RightIcon />
          </span>
        )}
      </div>
    </React.Fragment>
  );
};

export default Input;
