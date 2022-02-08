export const getProducts = () => {
  return (dispatch) => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        dispatch({ type: 'UPDATEPRODUCTS', payload: products });
      });
  };
};

export const getCategories = () => {
  return (dispatch) => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => {
        return res.json();
      })
      .then((categories) => {
        dispatch({ type: 'UPDATECATEGORIES', payload:categories });
      });
  };
};
export const addToCart = (p)=>{
  return {type:'ADDTOCART',payload:p}
}
export const getElectronics = () => {
  return (dispatch) => {
    fetch('https://fakestoreapi.com/products/electronics')
      .then((res) => {
        return res.json();
      })
      .then((electronics) => {
        dispatch({ type: 'UPDATEELECTRONICS', payload:electronics });
      });
  };
};
export const getJewelery = () => {
  return (dispatch) => {
    fetch('https://fakestoreapi.com/products/jewelery')
      .then((res) => {
        return res.json();
      })
      .then((jewelery) => {
        dispatch({ type: 'UPDATEJEWELLERY', payload:jewelery });
      });
  };
};

export const getMenClothings = () => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products/men's clothing")
      .then((res) => {
        return res.json();
      })
      .then((menClothes) => {
        dispatch({ type: 'UPDATEMENCLOTHES', payload:menClothes });
      });
  };
};
export const getWomenClothings = () => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products/women's clothing")
      .then((res) => {
        return res.json();
      })
      .then((womenClothes) => {
        dispatch({ type: 'UPDATEWOMENCLOTHES', payload:womenClothes });
      });
  };
};


