import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Button from './Button';
import Card from './Card';
import Loading from './Loading';

const fetchOrders = async () => {
  const response = await fetch(
    'https://616d5f766dacbb001794c9c0.mockapi.io/orders'
  );
  return response.json();
};

function Orders() {
  const [cardsLimit, setCardsLimit] = useState(12);
  const { data, status } = useQuery('orders', fetchOrders); // We neither need useEffect to fetch data nor useState to register the data using useQuery, Magical right! 😁

  const slicedData = data?.slice(0, cardsLimit);
  /* This could be implemented in various ways, yet due to knowing the size and settings of the returned data:
    - Slice helps return a shollow copy of the returned data 
    - I would fetch data once and populate it by limit functionality 
  */

  function loadMore() {
    if (slicedData?.length > 0) setCardsLimit(cardsLimit + cardsLimit);
  }

  function hideSome() {
    if (slicedData?.length === 49) setCardsLimit(12);
  }

  return (
    <div className="container">
      <h1 className="text-gray-800 font-primary font-medium text-2xl text-center">
        Active Lab Orders
      </h1>
      {status === 'loading' && <Loading />}
      {status === 'error' && <div>Error fetching data!</div>}
      {status === 'success' && (
        <div className="wrapper">
          {slicedData?.map((order) => (
            <Card key={order.id} order={order} />
          ))}
        </div>
      )}
      {slicedData?.length < 49 && (
        <Button name="Load more..." onClick={loadMore} />
      )}
      {slicedData?.length === 49 && (
        <Button name="Hide some" onClick={hideSome} />
      )}
    </div>
  );
}

export default Orders;
