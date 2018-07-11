import Stylesheet from './stylesheet'

const styles = Stylesheet({
  main: `
    background: #fafafa;
    font-size: 0;
  `,
  link: `
    font-size: 10px;
    display: inline-block;
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
    padding: 5px 10px;
  `
})

export default () => (`
  <nav class="${styles.main}">
    <a data-router-link href="/products" class="${styles.link}">Products</a>
    <a data-router-link href="/contact" class="${styles.link}">Contact</a>
    <a data-router-link href="/archive" class="${styles.link}">Archive</a>
  </nav>
`)