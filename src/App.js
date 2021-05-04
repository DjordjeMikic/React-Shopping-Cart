import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Context from './context';
import Nav from './components/nav';
import Shop from './routes';
import ItemView from './routes/itemView';
import Cart from './routes/cart';
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  let [state, dispatch] = React.useContext(Context);
  const getData = () => {
    console.log(state);
  }

  React.useEffect(() => {
    getData();
  }, [])
  return (
    <div className="flex column">
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
