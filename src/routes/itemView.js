import React, { useState, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { productsid } from '../store/data';
import context from '../context';

const ItemView = () => {
  let [info, setInfo] = useState(null);
  let [disabledButton, setDisabledButton] = useState(false);
  let [state, dispatch] = useContext(context);
  const { params: { model: smartphone } } = useRouteMatch();

  const addItem = () => {
    let { id, ...rest } = info;
    dispatch({ type: 'ADD_ITEM', payload: { keyName: id, ...rest, quantity: 1 } });
  }

  const setDisabled = () => {
    let item = Object.keys(state).filter(a => a === info.id);
    setDisabledButton(true);
  }

  React.useEffect(() => {
    let obj = productsid.filter(a => a.id === smartphone)[0];
    setInfo(obj);
  }, []);

  React.useEffect(() => {
    if(!info) return;
    setDisabled();
    // console.log(item);
  }, [state]);

  if(info) {
    return (
      <div className="flex itemView">
        <div className="img-container">
          <img
            src={`../assets/${info.id}.jpg`}
            alt={`../assets/${info.id}.jpg`}
            lazy={true}
          />
        </div>
        <div className="flex column info-container">
          <div className="flex column">
            <h1>{info.product}</h1>
            <h4>Price: {info.price} $</h4>
          </div>
          {!disabledButton ? (
            <button onClick={addItem}>Add to cart</button>
          ) : (
            <button className="disabled" disabled>Item is added in cart</button>
          )}
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default ItemView;
