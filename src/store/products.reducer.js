const initialState = {
  products:[]
 }
 const productReducer = (state=initialState,action)=>{
   if(action.type==='UPDATEPRODUCTS'){
     return {...state,products:[...state.products,action.payload]}
   }
   return state;
 }
 export default productReducer;