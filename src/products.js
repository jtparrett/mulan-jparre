import Client from 'shopify-buy'
import {renderNode} from './mulan'
import Stylesheet from './stylesheet'
import createRouter from './router'
import ErrorPage from './error-page'
import Grid from './grid'
import Loader from './loader'

const client = Client.buildClient({
  domain: 'j-parre.myshopify.com',
  storefrontAccessToken: '097bcf0fe0a8fd7acf38969a1dbc2038',
  appId: '6'
})

const styles = Stylesheet({
  product: `
    display: block;
    background: #fafafa;
    position: relative;
    padding-top: 100%;
  `,
  image: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: block;
    max-width: 75%;
    max-height: 75%;
  `
})

const renderProducts = (products) => products.map(product => `
  <a href="/products/${product.handle}" class="${styles.product}">
    <img src="${product.images[0].src}" class="${styles.image}" />
  </a>
`)

const renderProduct = (product) => () => `
  <h1>${product.title}</h1>
`

export default (root) => {
  const {pathname} = window.location
  const parts = pathname.split('/')
  parts.shift()
  
  if(parts[1]){
    client.product.fetchByHandle(parts[1]).then(product => {
      renderNode(document.getElementById('product'), renderProduct(product))
    }).catch(() => {
      renderNode(document.getElementById('product'), ErrorPage)
    })
    return `<div id="product">${Loader()}</div>`
  }

  client.collection.fetchByHandle('all').then(({products} = {}) => {
    renderNode(document.getElementById('products'), Grid(renderProducts(products)))
  })

  return `<div id="products">${Loader()}</div>`
}