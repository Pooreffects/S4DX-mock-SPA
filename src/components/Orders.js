import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

/* Orders API url: https://616d5f766dacbb001794c9c0.mockapi.io/orders */

const fetchOrders = async () => {
  const response = await fetch(
    'https://616d5f766dacbb001794c9c0.mockapi.io/orders'
  );
  return response.json();
};

function Orders() {
  const { data, status } = useQuery('orders', fetchOrders);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container">
      <h1 className="text-gray-800 font-primary font-medium text-2xl text-center">
        Current Lab Orders
      </h1>
      <div className="wrapper">
        {data?.map((order) => (
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
    </div>
  );
}

export default Orders;
