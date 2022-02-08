const initialState = {
 categories:[]
}
const categoriesReducer = (state=initialState,action)=>{
  if(action.type==='UPDATECATEGORIES'){
    return {...state,categories:[...state.categories,action.payload]}
  }
  return state;
}
export default categoriesReducer;