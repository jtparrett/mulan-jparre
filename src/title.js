import jss from './jss-setup'

const styles = jss.createStyleSheet({
  main: {
    fontFamily: ['Old Standard TT', 'serif'],
    fontSize: 20,
    margin: 0,
    paddingBottom: 10,
    fontWeight: 400
  }
})

export default (title) => {
  styles.attach()

  return `<h1 class="${styles.classes.main}">${title}</h1>`
}