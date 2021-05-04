import React, { useState, useEffect, useContext } from 'react';
import context from '../../context';
import Item from './item';
import Total from './total';

const Cart = () => {
  let [total, setTotal] = useState(0);
  let [state, dispatch] = useContext(context);
  useEffect(() => {
    let sum = Object.values(state).map(a => a.price * a.quantity);
    let totalSum = sum.reduce((a, b) => a + b, 0);
    setTotal(totalSum);

    console.log(totalSum);
  }, [state]);
  return (
    <div className="flex column w-100">
      <h1>Cart</h1>
      <div className="flex cartItem cartItem__header">
        <h1>Product</h1>
        <h2>Price Per Unit</h2>
        <h2>Quantity</h2>
        <h2>Total Amount</h2>
        <h5></h5>
      </div>

      <div className="flex column w-75">
        {Object.keys(state).length ? Object.values(state).map((a, b) => (
          <Item key={a.keyName} id={a.keyName} product={a} />
        )) : <h4>There is no any product in cart</h4>}
      </div>
      {Object.keys(state).length ? <Total price={total} /> : ''}
    </div>
  )
}

export default Cart;
