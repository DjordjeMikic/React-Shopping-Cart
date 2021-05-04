import React from 'react';
import Item from '../components/item';
import { productsid } from '../store/data';

const Shop = () => {
  return (
    <div className="flex column w-100" style={{ height: 'auto' }}>
      <h1>Items</h1>
      <div className="itemsContainer w-75">
      {productsid.length ? productsid.map((a, b) => (
          <Item key={a + b}
            id={a.product + b}
            product={a.product}
            price={a.price}
            quantity={a.quantity}
            rb={b}
            itemCart={a.id} />
      )) : 'There is no any product'}
      </div>
    </div>
  )
}

export default Shop;
