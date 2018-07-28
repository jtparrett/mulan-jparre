export default (state = {}, action) => {
  if(action.type === 'ADD_PRODUCTS'){
    const update = action.products.reduce((state, product, position) => {
      state[product.handle] = {
        ...product,
        position
      }
      return state
    }, {})

    return {
      ...state,
      ...update
    }
  }

  return state
}