import Stylesheet from './stylesheet'
import {Link} from './router'

const styles = Stylesheet({
  main: `
    background: #000;
    font-size: 12px;
    line-height: 1.2;
    border: 1px solid #000;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    outline: none;
    overflow: hidden;
    padding: 3px 15px;
    text-decoration: none;
    text-transform: uppercase;
  `
})

Stylesheet({
  '@global': {
    [`.${styles.main}:hover`]: `
      color: #000;
      background: #fff;
    `
  }
})

export default ({title, href}, tag = 'a') => {
  return `<${tag} ${href && `href="${href}" data-router-link`} ${tag === 'button' && 'type="submit"'} class="${styles.main}">${title}</${tag}>`
}