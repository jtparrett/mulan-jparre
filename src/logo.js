import jss from './jss-setup'

const borderDashLength = 340

const styles = jss.createStyleSheet({
  main: {
    width: '100%',
    display: 'block'
  },
  background: {
    fill: 'transparent',
    stroke: '#000',
    strokeWidth: 0.5,
    strokeDasharray: borderDashLength,
    strokeDashoffset: -borderDashLength,
    animation: ['draw-stroke 1s forwards', 'fill .3s 1s forwards']
  },
  stroke: {
    fill: '#fff',
    stroke: '#000',
    strokeWidth: 0.5,
    strokeDasharray: borderDashLength,
    strokeDashoffset: -borderDashLength,
    animation: 'draw-stroke 1s forwards'
  },
  '@global': {
    '@keyframes draw-stroke': {
      '100%': {
        strokeDashoffset: -borderDashLength * 2
      }
    },
    '@keyframes fill': {
      '100%': {
        fill: '#000'
      }
    }
  }
}).attach()

export default () => (`
  <svg viewBox="0 0 140.5 29.6" class="${styles.classes.main}">
    <rect class="${styles.classes.background}" x="0.2" y="0.2" width="140" height="29.1"/>
    <path class="${styles.classes.stroke}" d="M66.5,11.6c-0.1-0.3-0.2-0.6-0.2-0.7c-0.2,0.6-0.7,2.2-1.4,4.8h2.9C67.1,13.3,66.6,12,66.5,11.6z"/>
    <path class="${styles.classes.stroke}" d="M106.5,14.1c0.7,0,1.3-0.1,1.6-0.4c0.4-0.2,0.5-0.6,0.5-1.2c0-0.5-0.2-0.9-0.5-1.1c-0.4-0.2-0.9-0.3-1.7-0.3h-0.7l0,3H106.5z"/>
    <path class="${styles.classes.stroke}" d="M86.2,14.1c0.7,0,1.3-0.1,1.6-0.4c0.4-0.2,0.5-0.6,0.5-1.2c0-0.5-0.2-0.9-0.5-1.1c-0.4-0.2-0.9-0.3-1.7-0.3h-0.7l0,3H86.2z"/>
    <path class="${styles.classes.stroke}" d="M47.4,14c0.4-0.3,0.5-0.7,0.5-1.2c0-0.5-0.2-1-0.5-1.2c-0.3-0.3-0.8-0.4-1.4-0.4h-1.1l0,3.3h0.8C46.5,14.4,47,14.3,47.4,14z"/>
    <path class="${styles.classes.stroke}" d="M1.8,27.8h136.8V1.8H1.8V27.8z M125.4,8.1c0.9-1,1.5-1.8,1.8-2.3h2.6V6c-0.3,0.3-0.7,0.7-1.3,1.2
      c-0.6,0.5-1.1,0.9-1.5,1.1l-1.6,0V8.1z M123.6,9.2h6.4v1.9h-4v2.4h3.8v1.9H126v2.9h4v1.9h-6.4V9.2z M103.3,9.2h3.2
      c1.5,0,2.6,0.3,3.4,0.8c0.7,0.5,1.1,1.4,1.1,2.5c0,0.6-0.2,1.2-0.5,1.7c-0.4,0.5-0.9,0.9-1.5,1.2c1.7,2.5,2.8,4.1,3.3,4.8h-2.6
      l-2.7-4.2l-1.2,0v4.2h-2.4V9.2z M83.1,9.2h3.2c1.5,0,2.6,0.3,3.4,0.8c0.7,0.5,1.1,1.4,1.1,2.5c0,0.6-0.2,1.2-0.5,1.7
      c-0.4,0.5-0.9,0.9-1.5,1.2c1.7,2.5,2.8,4.1,3.3,4.8h-2.6L86.7,16l-1.2,0v4.2h-2.4V9.2z M64.9,9.2h2.9l3.9,11.1l-2.5,0l-0.8-2.6
      h-4.1l-0.8,2.6H61L64.9,9.2z M42.6,9.2h3.5c1.3,0,2.4,0.3,3.1,0.9c0.7,0.6,1.1,1.4,1.1,2.6c0,1.2-0.4,2.1-1.1,2.7
      c-0.7,0.6-1.8,0.9-3.2,0.9h-1v3.9h-2.4V9.2z M28,18.2c0.2-0.2,0.6-0.3,1-0.3c0.4,0,0.7,0.1,1,0.3c0.2,0.2,0.3,0.5,0.3,1
      c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.6,0.4-1,0.4c-0.4,0-0.8-0.1-1-0.3c-0.2-0.2-0.4-0.5-0.4-1C27.7,18.8,27.8,18.4,28,18.2z
       M10.5,21.4c0.4,0.1,0.8,0.2,1.1,0.2c0.5,0,0.9-0.2,1.1-0.5s0.3-0.8,0.3-1.5V9.2h2.4v10.3c0,1.3-0.3,2.3-0.9,2.9
      c-0.6,0.7-1.5,1-2.6,1c-0.5,0-1-0.1-1.4-0.2V21.4z"/>
  </svg>
`)