import jss from './jss-setup'

const styles = jss.createStyleSheet({
  main: {
    fontFamily: ['Old Standard TT', 'serif'],
    fontSize: 20,
    margin: 0,
    paddingBottom: 10,
    fontWeight: 400
  }
}).attach()

export default (title) => (`
  <h1 class="${styles.classes.main}">${title}</h1>
`)