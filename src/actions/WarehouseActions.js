import * as types from './types';
export function fetchProducts(update) {

  return async function (dispatch) {
    const products =  await import('../assets/products.json');
    // products bus is json gaunama info
    dispatch({
      type:types.FETCH_PRODUCTS,
      payload:products
    })
  }
 
}

export function filterProducts(filter) {

  return{
    type:types.FILTER_PRODUCTS,
    payload:filter
  }
  

}
export function sortProducts(sort) {

  return{
    type:types.SORT_PRODUCTS,
    payload:sort
  }
  

}
