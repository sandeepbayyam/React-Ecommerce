const initialState = {
  womenClothes: [],
};
const womenReducer = (state = initialState, action) => {
  if (action.type === 'UPDATEWOMENCLOTHES') {
    return { ...state, womenClothes: [...state.womenClothes, action.payload] };
  }
  return state;
};
export default womenReducer;
