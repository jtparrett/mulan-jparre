import {createSelector} from 'reselect'
import jss from './jss-setup'
import Grid from './grid'
import Loader from './loader'
import Product from './product-item'
import {getProductsFromCollection} from './product-actions'
import connect from './connect'

const styles = jss.createStyleSheet({
  wrapper: {
    margin: [0, 'auto'],
    width: 1200,
    maxWidth: '100%',
    overflow: 'hidden'
  }
})

const renderProducts = (products) => products.map(Product)

const renderMain = (products) => `
  <div class="${styles.classes.wrapper}">
    ${Grid(renderProducts(products))}
  </div>
`

const View = ({products, getProducts}) => (render) => {
  styles.attach()
  getProducts('all')

  render(Object.keys(products).length > 0 ? renderMain(products) : Loader())
}

const getProducts = (state) => state.products

const getSortedProducts = createSelector(getProducts, (products) => {
  return Object.values(products).sort((a, b) => a.position - b.position)
})

const mapStateToProps = (state) => ({
  products: getSortedProducts(state)
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: (handle) => dispatch(getProductsFromCollection(handle))
})

const updateOnStateChange = ({products, unsubscribe}) => (render, root) => {
  const didRender = render(renderMain(products))
  if(!didRender) unsubscribe()
} 

export default connect(mapStateToProps, mapDispatchToProps, updateOnStateChange)(View)