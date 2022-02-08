const initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  if (action.type === 'ADDTOCART') {
    return { ...state, cart: [...state.cart, action.payload] };
  }
  return state;
};
export default cartReducer;
