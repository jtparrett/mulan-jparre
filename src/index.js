import {renderNode} from 'mulan'
import {createRouter} from 'mulan-router'
import Nav from './nav'
import ProductListing from './product-listing'
import ProductDetail from './product-detail'
import ErrorPage from './error-page'
import Button from './button'
import Contact from './contact'
import Logo from './logo'
import jss from './jss-setup'

const styles = jss.createStyleSheet({
  header: {
    padding: [100, 0, 60]
  },
  link: {
    display: 'block',
    margin: [0, 'auto'],
    width: 140
  },
  footer: {
    textAlign: 'center',
    padding: [60, 0, 100]
  },
  copyright: {
    fontSize: 12
  },
  banner: {
    fontSize: 0,
    maxWidth: 800,
    margin: [0, 'auto']
  },
  image: {
    width: '33.333333%'
  },
  actions: {
    textAlign: 'center',
    paddingTop: 60
  },
  '@global': {
    body: {
      margin: 0,
      lineHeight: 1.2,
      fontFamily: ['Open Sans', 'sans-serif'],
      '-webkit-font-smoothing': 'antialiased'
    }
  }
}).attach()


const Home = () => () => (`
  <div class="${styles.classes.banner}">
    <img src="/assets/banner-3.jpg" class="${styles.classes.image}" />
    <img src="/assets/banner-4.jpg" class="${styles.classes.image}" />
    <img src="/assets/banner-5.jpg" class="${styles.classes.image}" />
  </div>
  <div class="${styles.classes.actions}">
    ${Button({ title: 'Shop the collection &rarr;', href: '/products' })}
  </div>
`)

const Router = createRouter({
  '/': Home,
  '/products': ProductListing,
  '/products/:slug': ProductDetail,
  '/contact': Contact,
  '/404': ErrorPage
})

const App = (root) => (`
  ${Nav()}
  <header class="${styles.classes.header}">
    <a href="/" data-router-link class="${styles.classes.link}">
      ${Logo()}
    </a>
  </header>
  ${Router(root)}
  <footer class="${styles.classes.footer}">
    <p class="${styles.classes.copyright}">&copy; J.Parré Apparel Co.</p>
  </footer>
`)


renderNode(document.getElementById('root'), App)

