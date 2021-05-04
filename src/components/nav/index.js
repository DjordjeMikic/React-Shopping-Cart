import { useState, useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import context from '../../context';

const Nav = () => {
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [state] = useContext(context);

  // Sum of all items in cart
  const count = useCallback(() => {
    let arr = Object.values(state).map(a => a.quantity).reduce((a, b) => a + b, 0);
    setNumberOfProducts(arr);
  }, [state]);

  // Count all items in cart when state is changed
  useEffect(() => {
    count();
  }, [count]);

  return (
    <div className="nav">
      <Link to="/"><h1>Smartphone Store</h1></Link>
      <Link to="/cart"
        className={`btn ${Object.keys(state).length ? 'btn__active' : ''}`}>
        <i className="fas fa-shopping-cart"></i> {' '}
        <h4 style={{ display: 'inline' }}>
          {numberOfProducts}
        </h4>
      </Link>
    </div>
  )
}

export default Nav;
