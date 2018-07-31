import jss from './jss-setup'
import Title from './title'

const styles = jss.createStyleSheet({
  main: {
    textAlign: 'center'
  }
})

export default () => () => {
  styles.attach()

  return `
    <div class="${styles.classes.main}">
      ${Title('404. Page not Found. Soz')}
    </div>
  `
}