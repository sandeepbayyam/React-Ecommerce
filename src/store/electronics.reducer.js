const initialState = {
  electronics:[]
}
const electronicsReducer = (state=initialState,action)=>{
  if(action.type==='UPDATEELECTRONICS'){
    return {...state,electronics:[...state.electronics,action.payload]}
  }
  return state;
}
export default electronicsReducer;