import {renderNode} from 'mulan'
import client from './shopify-client'
import jss from './jss-setup'
import Grid from './grid'
import Loader from './loader'
import Product from './product-item'

const styles = jss.createStyleSheet({
  wrapper: {
    margin: [0, 'auto'],
    width: 1200,
    maxWidth: '100%',
    overflow: 'hidden'
  }
}).attach()

const renderProducts = (products) => products.map(Product)

let programmesCache
export default () => (root) => {
  client.collection.fetchByHandle('all').then(({products} = {}) => {
    const content = () => Grid(renderProducts(products))
    renderNode(document.getElementById('products'), content)
    programmesCache = content
  })

  return `
    <div class="${styles.classes.wrapper}">
      <div id="products">${programmesCache ? programmesCache() : Loader()}</div>
    </div>
  `
}