import { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../context';

const Item = ({ id, product, price, rb, itemCart }) => {
  const [state, dispatch] = useContext(context);

  // Add item to cart
  const addItem = (obj) => {
    dispatch({ type: 'ADD_ITEM', payload: obj })
  }

  // Increase quantity of certain item in cart
  const addMore = (key) => {
    ++state[key].quantity;
    dispatch({ type: 'UPDATE_ITEM', payload: state[key] })
  }

  return (
    <div className="flex column item">
      <div className="img-cont">
        <img src={`../assets/${itemCart}.jpg`} alt={itemCart} className="img" />
      </div>
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
    </div>
  )
}

export default Item;
