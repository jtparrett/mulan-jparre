import jss from './jss-setup'
import client from './shopify-client'

const styles = jss.createStyleSheet({
  product: {
    display: 'block',
    background: '#fafafa',
    position: 'relative',
    paddingTop: '100%'
  },
  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'block',
    maxWidth: '75%',
    maxHeight: '75%'
  }
})

export default (product) => {
  styles.attach()

  return `
    <a href="/products/${product.handle}" data-router-link class="${styles.classes.product}">
      <img src="${client.image.helpers.imageForSize(product.images[0], {maxWidth: 600, maxHeight: 600})}" class="${styles.classes.image}" />
    </a>
  `
}