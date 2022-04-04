import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex justify-between px-8 py-4 items-center mb-8">
      <Link to="/" className="flex items-center">
        <img
          src="https://res.cloudinary.com/pooreffects/image/upload/c_scale,w_60/v1649102121/logo_epasmb.webp"
          className="logo"
          alt="Logo"
        />
        <h2 className="text-gray-800 font-semibold text-xl">S4DX</h2>
      </Link>
      <Link
        to="/orders"
        className="text-xl font-semibold  text-gray-800 hover-underline-animation"
      >
        Orders
      </Link>
    </div>
  );
}

export default Header;
