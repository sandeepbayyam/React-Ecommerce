import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './cart.reducer.js';
import menReducer from './men.reducer.js';
import womenReducer from './women.reducer.js';
import electronicsReducer from './electronics.reducer.js';
import jewelleryReducer from './jewellery.reducer.js';
import productReducer from './products.reducer.js';
import categoriesReducer from './categories.reducer.js'

const reducer = combineReducers({
  cart:cartReducer,
  products:productReducer,
  categories:categoriesReducer,
  men:menReducer,
  women:womenReducer,
  electronics:electronicsReducer,
  jewellwery:jewelleryReducer
})
const store = new createStore(reducer,applyMiddleware(thunk));
export default store;