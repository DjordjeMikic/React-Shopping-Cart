export const initialState = {};

export function reducer(state, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.keyName]: action.payload
      }
    case 'UPDATE_ITEM':
      return {
        ...state,
        [action.payload.keyName]: action.payload
      }
    case 'REMOVE_ITEM':
      delete state[action.payload];
      return {
        ...state
      }
    case 'SET_ALL':
      return action.payload;
    case 'REMOVE_ALL':
      return {};
    default:
      throw new Error();
  }
}
