import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../context';

const Item = ({ id, product, price, quantity, rb, itemCart }) => {
  let [currentItem, setCurrentItem] = useState({});
  let [state, dispatch] = useContext(context);

  const addItem = (obj) => {
    dispatch({ type: 'ADD_ITEM', payload: obj })
  }

  const addMore = (key) => {
    let quantity = ++state[key].quantity;
    dispatch({ type: 'UPDATE_ITEM', payload: state[key] })
  }

  useEffect(() => {
    // console.log(state[itemCart].quantity);
  }, [state]);

  return (
    <div className="flex column item">
      <img src={`../assets/${itemCart}.jpg`} alt={itemCart} className="img" />
      <Link to={`/product/${itemCart}`}><h1>{product}</h1></Link>
      <span>{price.toFixed(2)} $</span>
      {Object.keys(state).indexOf(itemCart) !== -1 ? (
        <div className="flex w-100 btn-container">
          <button
            onClick={() => addMore(itemCart)}>
            Add more than one
            <i className="fas fa-shopping-cart"></i>
          </button>
          <p>{state[itemCart].quantity}</p>
        </div>
      ) : (
        <button
          onClick={() => addItem({ keyName: itemCart, product, price, quantity: 1, totalPrice: 1 * price })}>
          Add to cart <i className="fas fa-shopping-cart"></i>
        </button>
      )}
      {quantity <= 0 ? <p>Out of Stock</p> : ''}
    </div>
  )
}


export default Item;
