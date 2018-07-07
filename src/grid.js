import Stylesheet from './stylesheet'

const styles = Stylesheet({
  main: `
    display: flex;
    flex-wrap: wrap;
    margin: -5px -5px 0 0;
  `,
  item: `
    width: calc(33.33333% - 5px);
    margin: 5px 5px 0 0;
    flex: none;
  `
})

Stylesheet({
  '@global': {
    '@media all and (max-width: 767px)': `
      .${styles.item} {
        width: calc(50% - 5px);
      }
    `
  }
})

export default (items) => () => {
  const content = items.map(item => (`<div class="${styles.item}">${item}</div>`)).join('')
  return `<div class="${styles.main}">${content}</div>`
}