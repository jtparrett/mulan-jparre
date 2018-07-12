import jss from './jss-setup'

const styles = jss.createStyleSheet({
  main: {
    background: '#fafafa',
    fontSize: 0
  },
  link: {
    fontSize: 10,
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: [5, 10]
  }
}).attach()

export default () => (`
  <nav class="${styles.classes.main}">
    <a data-router-link href="/products" class="${styles.classes.link}">Products</a>
    <a data-router-link href="/contact" class="${styles.classes.link}">Contact</a>
    <a data-router-link href="/archive" class="${styles.classes.link}">Archive</a>
  </nav>
`)