import Client from 'shopify-buy'
import {renderNode} from 'mulan'
import jss from './jss-setup'
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

const styles = jss.createStyleSheet({
  product: {
    display: 'block',
    background: '#fafafa',
    position: 'relative',
    paddingTop: '100%'
  },
  detail: {
    padding: [30, 20]
  },
  description: {
    fontSize: 12,
    '& p': {
      margin: [0, 0, 5]
    }
  },
  wrapper: {
    margin: [0, 'auto'],
    width: 1200,
    maxWidth: '100%',
    overflow: 'hidden'
  },
  wrapper__slim: {
    width: 700
  },
  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'block',
    maxWidth: '75%',
    maxHeight: '75%'
  },
  nav: {
    textAlign: 'center',
    paddingTop: 30
  },
  returnLink: {
    color: '#000',
    textDecoration: 'none',
    fontSize: 12
  },
  price: {
    fontSize: 12,
    fontStyle: 'italic',
    margin: [10, 0]
  },
  soldOut: {
    color: 'red',
    fontSize: 12,
    margin: 0
  }
}).attach()

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
  <a href="/products/${product.handle}" data-router-link class="${styles.classes.product}">
    <img src="${client.image.helpers.imageForSize(product.images[0], {maxWidth: 300, maxHeight: 300})}" class="${styles.classes.image}" />
  </a>
`)

const renderProducts = (products) => products.map(renderProduct)

const renderProductDetail = (product) => (root) => {
  const available = product.variants.some(v => v.available)

  return `
    <div class="${styles.classes.wrapper} ${styles.classes.wrapper__slim}">
      ${renderProduct(product)}
      <div class="${styles.classes.detail}">
        ${Title(product.title)}
        <div class="${styles.classes.description}">${product.descriptionHtml}</div>
        <p class="${styles.classes.price}">&pound;${product.variants[0].price}</p>
        ${!available ? `<p class="${styles.classes.soldOut}">Sold Out</p>` : buyForm(root, product)}
      </div>

      <div class="${styles.classes.nav}">
        <a href="/products" data-router-link class="${styles.classes.returnLink}">&larr; Return to the collection</a>
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
    <div class="${styles.classes.wrapper}">
      <div id="products">${programmesCache ? programmesCache() : Loader()}</div>
    </div>
  `
}