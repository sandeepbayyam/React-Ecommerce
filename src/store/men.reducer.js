const initialState = {
  menClothes:[]
}
const menReducer = (state=initialState,action)=>{
  if(action.type==='UPDATEMENCLOTHES'){
    return {...state,menClothes:[...state.menClothes,action.payload]}
  }
  return state;
}
export default menReducer;