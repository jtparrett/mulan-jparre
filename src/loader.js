import Stylesheet from './stylesheet'

const styles = Stylesheet({
  main: `
    width: 30px;
    height: 30px;
    border: 2px solid transparent;
    border-top-color: #000;
    margin: 0 auto;
    border-radius: 100%;
    animation: spin .6s infinite linear;
  `,
  '@global': {
    '@keyframes spin': `
      100% { transform: rotate(360deg) }
    `
  }
})

export default () => (`
  <div class="${styles.main}"></div>
`)