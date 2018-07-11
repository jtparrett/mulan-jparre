import Client from 'shopify-buy'
import {renderNode} from 'mulan'
import Stylesheet from './stylesheet'
import createRouter from './router'
import ErrorPage from './error-page'
import Grid from './grid'
import Loader from './loader'
import Button from './button'
import delegate from 'delegate-events'
import Title from './title'

const client = Client.buildClient({
  domain: 'j-parre.myshopify.com',
  storefrontAccessToken: '097bcf0fe0a8fd7acf38969a1dbc2038',
  appId: '6'
})

let checkoutId
client.checkout.create().then((checkout) => {
  checkoutId = checkout.id
})

const styles = Stylesheet({
  product: `
    display: block;
    background: #fafafa;
    position: relative;
    padding-top: 100%;
  `,
  detail: `
    padding: 30px 20px;
  `,
  description: `
    font-size: 12px;
  `,
  wrapper: `
    margin: 0 auto;
    width: 1200px;
    max-width: 100%;
    overflow: hidden;
  `,
  wrapper__slim: `
    width: 700px;
  `,
  image: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: block;
    max-width: 75%;
    max-height: 75%;
  `,
  nav: `
    text-align: center;
    padding-top: 30px;
  `,
  returnLink: `
    color: #000;
    text-decoration: none;
    font-size: 12px;
  `,
  price: `
    font-size: 12px;
    font-style: italic;
    margin: 10px 0;
  `,
  soldOut: `
    color: red;
    font-size: 12px;
    margin: 0;
  `
})

Stylesheet({
  '@global': {
    [`.${styles.description} p`]: `
      margin: 0 0 5px;
    `
  }
})

const buyForm = (root, product) => {
  delegate.bind(root, '#checkout-form', 'submit', (e) => {
    e.preventDefault()
    const item = { variantId: e.target.elements['variant'].value, quantity: 1 }
    client.checkout.addLineItems(checkoutId, [item]).then((checkout) => {
      window.location.href = checkout.webUrl
    })
  })

  const variants = product.variants
    .filter(v => v.available)
    .map(v => `<option value="${v.id}">${v.title}</option>`)

  return `
    <form id="checkout-form">
      <select name="variant">
        ${variants}
      </select>
      ${Button({ title: 'Purchase' }, 'button')}
    </form>
  `
}

const renderProduct = (product) => (`
  <a href="/products/${product.handle}" data-router-link class="${styles.product}">
    <img src="${product.images[0].src}" class="${styles.image}" />
  </a>
`)

const renderProducts = (products) => products.map(renderProduct)

const renderProductDetail = (product) => (root) => {
  const available = product.variants.some(v => v.available)

  return `
    <div class="${styles.wrapper} ${styles.wrapper__slim}">
      ${renderProduct(product)}
      <div class="${styles.detail}">
        ${Title(product.title)}
        <div class="${styles.description}">${product.descriptionHtml}</div>
        <p class="${styles.price}">&pound;${product.variants[0].price}</p>
        ${!available ? `<p class="${styles.soldOut}">Sold Out</p>` : buyForm(root, product)}
      </div>

      <div class="${styles.nav}">
        <a href="/products" data-router-link class="${styles.returnLink}">&larr; Return to the collection</a>
      </div>
    </div>
  `
}

let programmesCache
export default (root) => {
  const {pathname} = window.location
  const parts = pathname.split('/')
  parts.shift()
  
  if(parts[1]){
    client.product.fetchByHandle(parts[1]).then(product => {
      renderNode(document.getElementById('product'), renderProductDetail(product))
    }).catch(() => {
      renderNode(document.getElementById('product'), ErrorPage)
    })
    return `<div id="product">${Loader()}</div>`
  }

  client.collection.fetchByHandle('all').then(({products} = {}) => {
    const content = () => Grid(renderProducts(products))
    renderNode(document.getElementById('products'), content)
    programmesCache = content
  })

  return `
    <div class="${styles.wrapper}">
      <div id="products">${programmesCache ? programmesCache() : Loader()}</div>
    </div>
  `
}