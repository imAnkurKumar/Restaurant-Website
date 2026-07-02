import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id} className="block mb-2 font-bold">
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className="w-3/12 border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
});
export default Input;
