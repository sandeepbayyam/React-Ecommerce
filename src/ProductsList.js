import React from 'react';
import {connect} from 'react-redux';
import {getProducts,addToCart} from './store/actions'
const ProductsList = (props) => {
  const [products,setProducts] = React.useState([]);
  React.useEffect(()=>{
    props.dispatch(getProducts());
  },[]);
  React.useEffect(()=>{
    setProducts(...props.products.products)
  },[props.products])
  console.log(props,products)
  return (
    <div className="betterview">
      <h3>Products</h3>
      <div className="flex-container">
      {
       products && products.map((p,i)=>{
          return(
            <div className='thumb'>
              <h4>{p.title}</h4>
              <img src ={p.image} alt='productimage' width='150px' height="150px"/>
              <h3>Price:${p.price}</h3>
              <button onClick ={()=>{
               props.dispatch(addToCart(p))
              }}>Add To Cart</button>
            </div>
          )
        })
      }
      </div>
      <hr/>
       <button onClick={()=>{history.back()}}>Back</button>
    </div>
  );
};
export default connect(store=>store)(ProductsList);
