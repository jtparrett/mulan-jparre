import {renderNode} from 'mulan'
import {createSelector} from 'reselect'
import jss from './jss-setup'
import Grid from './grid'
import Loader from './loader'
import Product from './product-item'
import store from './store'
import {getProductsFromCollection} from './product-actions'

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

export default () => (root) => {
  const products = getSortedProducts(store.getState())

  const unsubscribe = store.subscribe(() => {
    const products = getSortedProducts(store.getState())
    renderNode(document.getElementById('products'), renderMain(products))
    unsubscribe()
  })

  store.dispatch(getProductsFromCollection('all'))

  return `
    <div class="${styles.classes.wrapper}">
      <div id="products">${Object.keys(products).length > 0 ? renderMain(products)(root) : Loader()}</div>
    </div>
  `
}