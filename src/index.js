import {renderNode} from './mulan'
import Stylesheet from './stylesheet'
import {createRouter, Link} from './router'
import Products from './products'
import ErrorPage from './error-page'
import Button from './button'
import Contact from './contact'

const styles = Stylesheet({
  header: `
    padding: 100px 0 60px;
  `,
  link: `
    display: block;
    margin: 0 auto;
    width: 140px;
  `,
  logo: `
    width: 100%;
    display: block;
  `,
  footer: `
    text-align: center;
    padding: 60px 0 100px;
  `,
  copyright: `
    font-size: 12px;
  `,
  '@global': {
    body: `
      margin: 0;
      line-height: 1;
      font-family: 'Open Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
    `
  }
})

const Home = () => (`
  <h1>Home</h1>
  ${Button({ title: 'Shop the collection &rarr;', href: '/products' })}
`)

const Router = createRouter({
  '': Home,
  '404': ErrorPage,
  'products': Products,
  'contact': Contact
})

const App = (root) => (`
  <header class="${styles.header}">
    <a href="/" data-router-link class="${styles.link}">
      <img src="/assets/box-logo.svg" class="${styles.logo}" />
    </a>
  </header>
  ${Router(0)(root)}
  <footer class="${styles.footer}">
    <p class="${styles.copyright}">&copy; J.Parré Apparel Co.</p>
  </footer>
`)


renderNode(document.getElementById('root'), App)