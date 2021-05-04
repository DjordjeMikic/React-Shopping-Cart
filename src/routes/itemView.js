import { useState, useEffect, useCallback, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { productsid } from '../store/data';
import context from '../context';

const ItemView = () => {
  const [info, setInfo] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);
  const [state, dispatch] = useContext(context);
  const { params: { model: smartphone } } = useRouteMatch();

  // Disable add to cart button if item is already in cart
  const setDisabled = useCallback(() => {
    if(info) {
      if(!Object.keys(state).length && !info && !info.id) return;
      let item = Object.keys(state).filter(a => a === info.id)[0];
      if(item) {
        setDisabledButton(true);
      }
    }
  }, [state, info]);

  // Add item to Cart
  const addItem = () => {
    let { id, ...rest } = info;
    dispatch({ type: 'ADD_ITEM', payload: { keyName: id, ...rest, quantity: 1 } });
  }

  // Set info state when component is mount and clean it when is unmounted
  // Check if add to cart button should be disabled
  useEffect(() => {
    let obj = productsid.filter(a => a.id === smartphone)[0];
    setInfo(obj);
    setDisabled();
    return () => setInfo(null);
  }, [smartphone, setDisabled]);

  if(info) {
    return (
      <div className="flex itemView">
        <div className="img-container">
          <img
            src={`../assets/${info.id}.jpg`}
            alt={`../assets/${info.id}.jpg`}
            lazy="true"
          />
        </div>
        <div className="flex column info-container">
          <div className="flex column">
            <h1>{info.product}</h1>
            <h4>Price: {info.price} $</h4>
          </div>
          {!disabledButton ? (
            <button className="btn-add" onClick={addItem}>
              Add to cart <i className="fas fa-shopping-cart"></i>
            </button>
          ) : (
            <button className="btn-add btn-add__disabled" disabled>Item is added to cart</button>
          )}
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default ItemView;
