import { useState, useEffect, useContext } from 'react';
import context from '../../context';
import Item from './item';
import Total from './total';
import Order from './order';

const Cart = () => {
  const [order, setOrder] = useState(null);
  const [total, setTotal] = useState(0);
  const [state, dispatch] = useContext(context);

  // Count total value of all products in shopping cart
  useEffect(() => {
    let sum = Object.values(state).map(a => a.price * a.quantity);
    let totalSum = sum.reduce((a, b) => a + b, 0);
    setTotal(totalSum);
  }, [state]);

  return (
    <div className="flex column w-100">
      <h1>Shopping Cart</h1>

      <div className="flex cartItem cartItem__header">
        <h1>Product</h1>
        <h2>Price Per Unit</h2>
        <h2>Quantity</h2>
        <h2>Total Amount</h2>
        <h5>{''}</h5>
      </div>

      <div className="flex column w-75">
        {Object.keys(state).length ? Object.values(state).map((a, b) => (
          <Item key={a.keyName} id={a.keyName} product={a} />
        )) : <h4>There is no any product in cart</h4>}
      </div>

      {Object.keys(state).length ? (
        <Total price={total} setOrder={setOrder} dispatch={dispatch} />
      ) : ''}

      {order ? <Order order={order} setOrder={setOrder} /> : ''}
    </div>
  )
}

export default Cart;
