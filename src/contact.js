import Title from './title'
import Stylesheet from './stylesheet'

const styles = Stylesheet({
  main: `
    text-align: center;
  `,
  copy: `
    font-size: 12px;
    margin: 0;
    line-height: 1.2;
  `
})

export default () => (`
  <div class="${styles.main}">
    ${Title('Contact Us')}
    <p class="${styles.copy}">Require a refund or wish to be a stockist?<br />
    Email us at: <a href="mailto:Business@jparre.com">Business@jparre.com</a></p>
  </div>
`)