import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import {getCategories} from './store/actions'
import{connect} from 'react-redux';
const Categories = (props) => {
  const [categories,setCategories] = React.useState([]);
  React.useEffect(()=>{
    props.dispatch(getCategories());
  },[])
  React.useEffect(()=>{
    setCategories(...props.categories.categories);
  },[props.categories])
  return (
    <div className="betterview">
      <h1>Categories</h1>
      <div className='flex-container'>
        {
          categories&&categories.map((c,i)=>{
            return(
              <>
            <Link to='categoriesProducts'><div className='thumb'>
                {c}
              </div></Link>
              </>
            )
          })
        }
      </div>
      <Outlet/>
      <button onClick={()=>{history.back()}}>Back</button>
    </div>
  );
};
export default connect(store=>store)(Categories);
