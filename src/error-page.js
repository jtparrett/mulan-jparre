import jss from './jss-setup'
import Title from './title'

const styles = jss.createStyleSheet({
  main: {
    textAlign: 'center'
  }
})

export default () => (render) => {
  styles.attach()

  render(`
    <div class="${styles.classes.main}">
      ${Title('404. Page not Found. Soz')}
    </div>
  `)
}