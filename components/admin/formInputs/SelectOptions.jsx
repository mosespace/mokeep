import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  className ,
  options = [],
  multiple = false,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-bold leading-6 text-black"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(name)}
          id={name}
          multiple={multiple}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 block w-full p-2.5"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  );
}
