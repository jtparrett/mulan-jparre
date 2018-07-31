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
    animation: ['draw-stroke 1s forwards', 'fill .5s 1s forwards']
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
})

export default () => {
  styles.attach()

  return `
    <svg viewBox="0 0 140 29.1" class="${styles.classes.main}">
      <rect class="${styles.classes.background}" x="0.2" y="0.2" class="st0" width="139.5" height="28.6"/>
      <path class="${styles.classes.stroke}" d="M84.9,14.1l0-3.5h1c0.8,0,1.4,0.1,1.8,0.4c0.4,0.3,0.7,0.7,0.7,1.3c0,0.6-0.2,1.1-0.6,1.4c-0.4,0.3-1,0.4-1.8,0.4H84.9z"/>
      <path class="${styles.classes.stroke}" d="M64.3,15.7l0.1-0.3c0.7-2.4,1.3-4.1,1.4-4.8l0.3-1l0.2,1c0,0.2,0.1,0.4,0.2,0.7c0.1,0.3,0.5,1.7,1.3,4l0.1,0.3H64.3z"/>
      <path class="${styles.classes.stroke}" d="M44.5,14.4l0-3.8h1.3c0.7,0,1.2,0.2,1.6,0.5c0.4,0.3,0.5,0.8,0.5,1.4c0,0.6-0.2,1.1-0.6,1.4c-0.4,0.3-1,0.5-1.8,0.5H44.5z"/>
      <path class="${styles.classes.stroke}" d="M105.2,14.1l0-3.5h1c0.8,0,1.4,0.1,1.8,0.4c0.4,0.3,0.7,0.7,0.7,1.3c0,0.6-0.2,1.1-0.6,1.4c-0.4,0.3-1,0.4-1.8,0.4H105.2z"/>
      <path class="${styles.classes.stroke}" d="M1.3,27.8V1.3h137.3v26.4H1.3z M10.5,22.9c0.3,0.1,0.7,0.1,1.1,0.1c1.1,0,1.9-0.3,2.5-0.9
        c0.5-0.6,0.8-1.6,0.8-2.8V9.2H13v10.1c0,0.7-0.1,1.3-0.4,1.6c-0.2,0.3-0.6,0.6-1.3,0.6c-0.3,0-0.6,0-0.9-0.1V22.9z M28.8,17.9
        c-0.4,0-0.7,0.1-0.8,0.3c-0.2,0.2-0.3,0.4-0.3,0.8c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3
        c0.2-0.2,0.3-0.4,0.3-0.8c0-0.3-0.1-0.6-0.3-0.8C29.4,18,29.1,17.9,28.8,17.9z M44.5,19.8v-3.9h1.3c1.3,0,2.3-0.3,3-0.9
        c0.7-0.6,1-1.4,1-2.5c0-1.1-0.3-1.8-1-2.4c-0.7-0.5-1.6-0.8-2.9-0.8h-3.3v10.5H44.5z M129.5,19.8v-1.4h-4V15h3.8v-1.4h-3.8v-2.9h4
        V9.2h-5.9v10.5H129.5z M105.2,19.8v-4.2l1.6,0l2.7,4.2h2c-0.4-0.6-1-1.4-1.7-2.5l-1.5-2.1l0.3-0.1c0.6-0.3,1.1-0.6,1.4-1.1
        c0.3-0.5,0.5-1,0.5-1.6c0-1-0.3-1.8-1-2.3c-0.7-0.5-1.8-0.8-3.2-0.8h-3v10.5H105.2z M84.9,19.8v-4.2l1.6,0l2.7,4.2h2
        c-0.4-0.6-1-1.4-1.7-2.5l-1.5-2.1l0.3-0.1c0.6-0.3,1.1-0.6,1.4-1.1c0.3-0.5,0.5-1,0.5-1.6c0-1-0.3-1.8-1-2.3
        c-0.7-0.5-1.8-0.8-3.2-0.8h-3v10.5H84.9z M63.1,19.8l0.8-2.6h4.4l0.8,2.6l2,0L67.3,9.2h-2.5l-3.8,10.6H63.1z M126.7,7.9
        c0.3-0.2,0.8-0.6,1.4-1.1c0.5-0.4,0.8-0.7,1-0.9h-2c-0.3,0.5-0.8,1.1-1.5,2L126.7,7.9z"/>
    </svg>
  `
}