import React from 'react';
import './style.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import ProductsList from './ProductsList';
import CategoryProducts from './CategoryProducts.js';
import Cart from './Cart.js';
import store from './store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="betterview">
        <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/categories">Categories</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;
        <Cart/>
        <Routes>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="categories" element={<Categories></Categories>}>
                <Route path="categoriesProducts" element={<CategoryProducts/>}></Route>    
          </Route>
          <Route path="products" element={<ProductsList/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}
