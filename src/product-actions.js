import client from './shopify-client'

export const getProductsFromCollection = (handle) => (dispatch) => {
  return client.collection.fetchByHandle(handle).then(({products}) => {
    dispatch({
      type: 'ADD_PRODUCTS',
      products
    })
  })
}

export const getProductByHandle = (handle) => (dispatch) => {
  return client.product.fetchByHandle(handle).then(product => {
    dispatch({
      type: 'ADD_PRODUCTS',
      products: [product]
    })
  })
}