import { useReducer } from 'react';
import Context from './context';
import { initialState, reducer } from './store';

const Provide = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Provide;
