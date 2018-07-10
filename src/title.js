import Stylesheet from './stylesheet'

const styles = Stylesheet({
  main: `
    font-family: 'Old Standard TT', serif;
    font-size: 20px;
    margin: 0;
    padding-bottom: 10px;
    font-weight: 400;
  `
})

export default (title) => (`
  <h1 class="${styles.main}">${title}</h1>
`)