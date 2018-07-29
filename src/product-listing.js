import {renderNode} from 'mulan'
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
}).attach()

const getProducts = (state) => state.products

const getSortedProducts = createSelector(getProducts, (products) => {
  return Object.values(products).sort((a, b) => a.position - b.position)
})

const renderProducts = (products) => products.map(Product)

const renderMain = (products) => () => Grid(renderProducts(products))

const View = ({products, getProducts}) => (root) => {
  getProducts('all')

  return `
    <div class="${styles.classes.wrapper}">
      <div id="products">${Object.keys(products).length > 0 ? renderMain(products)(root) : Loader()}</div>
    </div>
  `
}

const mapStateToProps = (state) => ({
  products: getSortedProducts(state)
})

const mapPropsOnStateChange = ({products}) => {
  const el = document.getElementById('products')
  if(el){
    renderNode(el, renderMain(products))
  }
} 

const mapDispatchToProps = (dispatch) => ({
  getProducts: (handle) => dispatch(getProductsFromCollection(handle))
})

export default connect(mapStateToProps, mapPropsOnStateChange, mapDispatchToProps)(View)