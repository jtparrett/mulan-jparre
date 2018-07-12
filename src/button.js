import jss from './jss-setup'

const styles = jss.createStyleSheet({
  main: {
    background: '#000',
    fontSize: 12,
    border: '1px solid #000',
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: 700,
    outline: 'none',
    overflow: 'hidden',
    padding: [3, 15],
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      color: '#000',
      background: '#fff'
    }
  }
}).attach()

export default ({title, href}, tag = 'a') => {
  return `<${tag} ${href && `href="${href}" data-router-link`} ${tag === 'button' && 'type="submit"'} class="${styles.classes.main}">${title}</${tag}>`
}