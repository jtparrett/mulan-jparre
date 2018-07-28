import Title from './title'
import jss from './jss-setup'

const styles = jss.createStyleSheet({
  main: {
    textAlign: 'center'
  },
  copy: {
    fontSize: 12,
    margin: 0
  }
}).attach()

export default () => () => (`
  <div class="${styles.classes.main}">
    ${Title('Contact Us')}
    <p class="${styles.classes.copy}">Require a refund or wish to be a stockist?<br />
    Email us at: <a href="mailto:Business@jparre.com">Business@jparre.com</a></p>
  </div>
`)