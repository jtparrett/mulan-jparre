import jss from './jss-setup'
import Title from './title'
import Button from './button'

const styles = jss.createStyleSheet({
  main: {
    textAlign: 'center'
  }
})

export default () => (render) => {
  styles.attach()

  render(`
    <div class="${styles.classes.main}">
      ${Title('Page Not Found')}
      ${Button({ title: '&larr; Back Home', href: '/' })}
    </div>
  `)
}