import {renderNode} from 'mulan'
import delegate from 'delegate-events'
import jss from './jss-setup'
import client from './shopify-client'
import Loader from './loader'
import Title from './title'
import Button from './button'
import Product from './product-item'
import {getProductByHandle} from './product-actions'
import ErrorPage from './error-page'
import connect from './connect'

const styles = jss.createStyleSheet({
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
    width: 700,
    maxWidth: '100%'
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
    fontStyle: 'italic',
    margin: 0
  }
}).attach()

let checkoutId
client.checkout.create().then((checkout) => {
  checkoutId = checkout.id
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

  if(variants.length <= 0){
    return `<p class="${styles.classes.soldOut}">Sold Out</p>`
  }

  return `
    <form id="checkout-form">
      <select name="variant">${variants}</select>
      ${Button({ title: 'Purchase' }, 'button')}
    </form>
  `
}

const renderDetail = (product) => (root) => (`
  ${Product(product)}
  <div class="${styles.classes.detail}">
    ${Title(product.title)}
    <div class="${styles.classes.description}">${product.descriptionHtml}</div>
    <p class="${styles.classes.price}">&pound;${product.variants[0].price}</p>
    ${buyForm(root, product)}
  </div>

  <div class="${styles.classes.nav}">
    <a href="/products" data-router-link class="${styles.classes.returnLink}">&larr; Return to the collection</a>
  </div>
`)

const View = ({params, products, getProducts}) => (root) => {
  getProducts()

  return `
    <div class="${styles.classes.wrapper}">
      <div id="product">${products[params.slug] ? renderDetail(products[params.slug])(root) : Loader()}</div>
    </div>
  `
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapPropsOnStateChange = ({params, products}) => {
  const el = document.getElementById('product')
  if(el && products[params.slug]){
    renderNode(el, renderDetail(products[params.slug]))
  }
}

const mapDispatchToProps = (dispatch, {params}) => ({
  getProducts: () => dispatch(getProductByHandle(params.slug))
})

export default connect(mapStateToProps, mapPropsOnStateChange, mapDispatchToProps)(View)