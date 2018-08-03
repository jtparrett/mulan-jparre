import {createRenderer} from 'mulan'
import {createRouter} from 'mulan-router'
import Nav from './nav'
import Home from './home'
import ProductListing from './product-listing'
import ProductDetail from './product-detail'
import ErrorPage from './error-page'
import Contact from './contact'
import Logo from './logo'
import jss from './jss-setup'

const styles = jss.createStyleSheet({
  page: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  stretch: {
    margin: ['auto', 0],
    flex: 'none'
  },
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
  '@global': {
    body: {
      margin: 0,
      lineHeight: 1.2,
      fontFamily: ['Open Sans', 'sans-serif'],
      '-webkit-font-smoothing': 'antialiased'
    }
  }
})

const Router = createRouter({
  '/': Home,
  '/products': ProductListing,
  '/products/:slug': ProductDetail,
  '/contact': Contact,
  '/404': ErrorPage
})

const App = (render, root) => {
  styles.attach()

  render(`
    <div class="${styles.classes.page}">
      ${Nav()}
      <header class="${styles.classes.header}">
        <a href="/" data-router-link class="${styles.classes.link}">
          ${Logo()}
        </a>
      </header>
      <div id="router" class="${styles.classes.stretch}"></div>
      <footer class="${styles.classes.footer}">
        <p class="${styles.classes.copyright}">&copy;2018 J.Parré Apparel Co.</p>
      </footer>
    </div>
  `)

  createRenderer(document.getElementById('router'), Router)

  window.addEventListener('pushstate', () => {
    window.scrollTo(0, 0)
  })
}


createRenderer(document.getElementById('root'), App)

