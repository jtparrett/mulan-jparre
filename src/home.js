import delegate from 'delegate-events'
import jss from './jss-setup'
import Button from './button'

const styles = jss.createStyleSheet({
  banner: {
    overflow: 'hidden'
  },
  track: {
    width: '100%',
    display: 'flex',
    overflow: 'visible',
    transition: 'transform .3s cubic-bezier(.77,0,.175,1)'
  },
  item: {
    flex: 'none',
    width: '100%'
  }
})

const View = () => `
  <div>
    <div class="${styles.classes.banner}">
      <div class="${styles.classes.track}" id="track">
        <div class="${styles.classes.item}">
          <img src="/assets/banner-3.jpg" class="${styles.classes.image}" />
        </div>

        <div class="${styles.classes.item}">
          <img src="/assets/banner-4.jpg" class="${styles.classes.image}" />
        </div>

        <div class="${styles.classes.item}">
          <img src="/assets/banner-5.jpg" class="${styles.classes.image}" />
        </div>
      </div>
    </div>

    <button id="next">Next</button>

    <div class="${styles.classes.actions}">
      ${Button({ title: 'Shop the collection &rarr;', href: '/products' })}
    </div>
  </div>
`

export default () => (render, root) => {
  let index = 0

  styles.attach()

  render(View())

  const track = document.getElementById('track')
  document.getElementById('next').addEventListener('click', () => {
    index = ++index % 3
    console.log('go')
    track.style.transform = `translateX(-${index * 100}%)`
  })
}