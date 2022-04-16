import React from 'react';

function Card({ order }) {
  return (
    <div key={order.id} className="card">
      <h3 className="text-gray-800 font-semibold font-primary">
        <span className="text-pink-700 font-semibold font-primary">Name:</span>{' '}
        {order.laboratory.name.split(',')[0]}
      </h3>
      <ul>
        <li className="text-gray-800 font-semibold font-primary">
          <span className="text-pink-700 font-semibold font-body">
            Address:{' '}
          </span>
          {order.laboratory.address}
        </li>
        <li className="text-gray-800 font-semibold font-primary">
          <span className="text-pink-700 font-semibold font-body">City: </span>
          {order.laboratory.city}
        </li>
        <li className="text-gray-800 font-semibold font-primary">
          <span className="text-pink-700 font-semibold font-body">Zip: </span>
          {order.laboratory.zipCode}
        </li>
        <li className="text-gray-800 font-semibold font-primary">
          <span className="text-pink-700 font-semibold font-body">
            Country:{' '}
          </span>
          {order.laboratory.country}
        </li>
        <li className="text-gray-800 font-semibold font-primary">
          <span className="text-pink-700 font-semibold font-body">Phone: </span>
          {order.laboratory.phone}
        </li>
        <li className="text-gray-800 font-semibold font-primary">
          <span className="text-pink-700 font-semibold font-body">
            Contact:{' '}
          </span>
          {order.laboratory.contact}
        </li>
      </ul>
    </div>
  );
}

export default Card;
