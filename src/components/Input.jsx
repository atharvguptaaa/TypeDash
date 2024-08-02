import { forwardRef } from "react";
import React from 'react';

const Input = forwardRef(({ onInputChange, val }, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      value={val}
      onChange={(e) => onInputChange(e.target.value)}
      className='w-full p-4 text-2xl font-medium text-gray-700 placeholder-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out'
      placeholder="Enter text here..."
    />
  );
});

export default Input;
