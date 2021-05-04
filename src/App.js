import { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Context from './context';
import Nav from './components/nav';
import Shop from './routes';
import ItemView from './routes/itemView';
import Cart from './routes/cart';
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  let [state, dispatch] = useContext(Context);

  // Get cart from localstorage if it is defines
  // and put that data to the reducer
  useEffect(() => {
    if(localStorage.getItem('cart')) {
      let obj = localStorage.getItem('cart');
      dispatch({ type: 'SET_ALL', payload: JSON.parse(obj) });
    }
  }, [dispatch]);

  // If state is changed set locaStorage cart
  useEffect(() => {
    if(Object.keys(state).length) {
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }, [state]);

  return (
    <div className="flex column relative">
      <Nav />
      <Switch>
        <Route path="/" exact component={Shop} />
        <Route path="/product/:model" exact component={ItemView} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </div>
  )
}
export default App;
