import jss from './jss-setup'

const styles = jss.createStyleSheet({
  main: {
    overflow: 'hidden',
    margin: [-5, -5, 0, 0]
  },
  item: {
    width: 'calc(33.33333% - 5px)',
    margin: [5, 5, 0, 0],
    float: 'left',
    '@media all and (max-width: 767px)': {
      width: 'calc(50% - 5px)'
    }
  }
}).attach()

export default (items) => {
  const content = items.map(item => (`<div class="${styles.classes.item}">${item}</div>`)).join('')
  return `<div class="${styles.classes.main}">${content}</div>`
}