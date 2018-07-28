import jss from './jss-setup'

const styles = jss.createStyleSheet({
  main: {
    width: 30,
    height: 30,
    border: '3px solid #fafafa',
    borderTopColor: '#000',
    margin: [0, 'auto'],
    borderRadius: '100%',
    animation: 'spin .6s infinite linear'
  },
  '@global': {
    '@keyframes spin': {
      '100%': 'transform: rotate(360deg)'
    }
  }
}).attach()

export default () => (`
  <div class="${styles.classes.main}"></div>
`)