import React, { useContext } from 'react';
import context from '../../context';
const Item = ({ id, product }) => {
  let [disable, setDisable] = React.useState(false);
  let [state, dispatch] = useContext(context);

  React.useEffect(() => {
    if(product.quantity > 1) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [product.quantity])

  const addMore = (key) => {
    let quantity = ++state[key].quantity;
    dispatch({ type: 'UPDATE_ITEM', payload: state[key] })
  }

  const removeOne = (key) => {
    let quantity = --state[key].quantity;
    dispatch({ type: 'UPDATE_ITEM', payload: state[key] });
  }

  const removeItem = (a) => {
    dispatch({ type: 'REMOVE_ITEM', payload: a })
  }

  return (
    <div className="flex w-100 cartItem">
      <h1>{product.product}</h1>
      <h2>{product.price.toFixed(2)} $</h2>
      <div className="flex quant">
        {!disable ? <button onClick={() => removeOne(id)}>-</button> : (
          <button onClick={() => removeItem(id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        )}
        <h4>{product.quantity}</h4>
        <button onClick={() => addMore(id)}>+</button>
      </div>
      <h2>{(product.quantity * product.price).toFixed(2)} $</h2>
      <p onClick={() => removeItem(id)}>&times;</p>
    </div>
  )
}

export default Item;
