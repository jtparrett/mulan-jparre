import {renderNode} from './mulan'
import Stylesheet from './stylesheet'
import createRouter from './router'
import Products from './products'
import ErrorPage from './error-page'

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
  wrapper: `
    margin: 0 auto 100px;
    width: 1200px;
    max-width: 100%;
    overflow: hidden;
  `,
  '@global': {
    body: `
      margin: 0;
    `
  }
})

const Home = () => (`
  <h1>Home</h1>
  <a href="/products">Shop the collection</a>
`)

const Router = createRouter({
  '': Home,
  '404': ErrorPage,
  'products': Products
})

const App = (root) => (`
  <header class="${styles.header}">
    <a href="/" class="${styles.link}">
      <img src="/assets/box-logo.svg" class="${styles.logo}" />
    </a>
  </header>
  <div class="${styles.wrapper}">
    ${Router()(root)}
  </div>
`)


renderNode(document.getElementById('root'), App)