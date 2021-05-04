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
    default:
      throw new Error();
  }
}
