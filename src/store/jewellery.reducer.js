const initialState = {
 jewellery:[]
}
const jewelleryReducer = (state=initialState,action)=>{
  if(action.type==='UPDATEJEWELLERY'){
    return {...state,jewellery:[...state.jewellery,action.payload]}
  }
  return state;
}
export default jewelleryReducer;