import React from 'react';

function Button({ name, onClick }) {
  return (
    <div className="load">
      <button
        onClick={onClick}
        className=" bg-slate-300 p-2 rounded font-primary font-medium  text-gray-800 hover:bg-pink-700 hover:text-gray-200"
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
