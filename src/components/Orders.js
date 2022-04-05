import React, { useState } from 'react';
import { useQuery } from 'react-query';

/* Orders API url: https://616d5f766dacbb001794c9c0.mockapi.io/orders */

const fetchOrders = async () => {
  const response = await fetch(
    'https://616d5f766dacbb001794c9c0.mockapi.io/orders'
  );
  return response.json();
};

function Orders() {
  const [cardsLimit, setCardsLimit] = useState(12);
  const { data, status } = useQuery('orders', fetchOrders); // create loading state

  const slicedData = data?.slice(0, cardsLimit);

  const loadMore = () => {
    if (slicedData?.length > 0) setCardsLimit(cardsLimit + cardsLimit);
  };

  return (
    <div className="container">
      <h1 className="text-gray-800 font-primary font-medium text-2xl text-center">
        Active Lab Orders
      </h1>
      <div className="wrapper">
        {slicedData?.map((order) => (
          <div key={order.id} className="card">
            <h3 className="text-gray-800 font-semibold font-primary">
              <span className="text-pink-700 font-semibold font-primary">
                Name:
              </span>{' '}
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
                <span className="text-pink-700 font-semibold font-body">
                  City:{' '}
                </span>
                {order.laboratory.city}
              </li>
              <li className="text-gray-800 font-semibold font-primary">
                <span className="text-pink-700 font-semibold font-body">
                  Zip:{' '}
                </span>
                {order.laboratory.zipCode}
              </li>
              <li className="text-gray-800 font-semibold font-primary">
                <span className="text-pink-700 font-semibold font-body">
                  Country:{' '}
                </span>
                {order.laboratory.country}
              </li>
              <li className="text-gray-800 font-semibold font-primary">
                <span className="text-pink-700 font-semibold font-body">
                  Phone:{' '}
                </span>
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
        ))}
      </div>
      {slicedData?.length > 0 && (
        <div className="load">
          <button
            onClick={() => loadMore()}
            className=" bg-slate-300 p-2 rounded font-primary font-medium  text-gray-800 hover:bg-pink-700 hover:text-gray-200"
          >
            Load more...
          </button>
        </div>
      )}
    </div>
  );
}

export default Orders;
