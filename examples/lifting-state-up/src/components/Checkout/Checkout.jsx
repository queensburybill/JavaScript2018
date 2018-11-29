import React from 'react';
import './Checkout.css';
const Checkout = ({ total, orders }) => {
  return (
    <div>
      <ul>
        {orders.map((order, idx) => {
          return <li>{order}</li>;
        })}
      </ul>
      <fieldset>
        Your order total is:
        {total}
        <br />
        <button>Pay Now</button>
      </fieldset>
    </div>
  );
};

export default Checkout;
