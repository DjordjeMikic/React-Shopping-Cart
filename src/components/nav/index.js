import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../../context';

const Nav = () => {
  let [numberOfProducts, setNumberOfProducts] = React.useState(0);
  let [state, dispatch] = useContext(context);

  const count = () => {
    let arr = Object.values(state).map(a => a.quantity).reduce((a, b) => a + b, 0);
    setNumberOfProducts(arr);
  }

  React.useEffect(() => {
    count();
  }, [state]);

  return (
    <div className="nav">
      <Link to="/"><h1>Smartphone Store</h1></Link>
      <Link to="/cart" className={`btn ${Object.keys(state).length ? 'btn__active' : ''}`}>
        <i className="fas fa-shopping-cart"></i> <h4 style={{ display: 'inline' }}>{numberOfProducts}</h4>
      </Link>
    </div>
  )
}

export default Nav;
