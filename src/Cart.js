import React from 'react';
import './style.css';
import {connect} from 'react-redux';

const Cart = (props)=>{
  return(
    <div>
    <h2>MyCart:{props.cart.cart.length}</h2>
    </div>
  )
}
export default connect(store=>store)(Cart);