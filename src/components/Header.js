import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex justify-between px-8 py-4 items-center mb-4">
      <Link to="/" className="text-violet-700 font-semibold text-xl">
        S4DX - Lab
      </Link>
      <Link
        to="/orders"
        className="text-xl font-semibold  text-gray-800 hover:text-violet-700"
      >
        Orders
      </Link>
    </div>
  );
}

export default Header;
