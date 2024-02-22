/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        
        setCount(count - 1);
        
    };
    return (
        <div className="flex items-center justify-center bg-slate-100 max-w-md mx-auto my-10 py-6">
        <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={decreaseCount}
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
            />
            </svg>
        </button>
      <input
        type="text"
        className="w-16 text-center bg-gray-100 border-t border-b border-gray-300 py-2"
        value={count}
        readOnly
      />
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={increaseCount}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
    );
  };

export default Counter;