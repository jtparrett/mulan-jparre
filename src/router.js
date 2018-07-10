import {renderNode} from './mulan'
import delegate from 'delegate-events'

const getPathname = (pathname) => {
  let parts = [...pathname.split('/')]
  parts.shift()
  return parts
}

export const createRouter = (routes) => (routeIndex) => {
  const parts = getPathname(window.location.pathname)
  const initalComp = routes[parts[routeIndex]] || routes['404']

  window.addEventListener('pushstate', () => {
    const parts = getPathname(window.location.pathname)
    const comp = routes[parts[routeIndex]] || routes['404']
    renderNode(document.getElementById('router'), comp)
  })

  window.addEventListener('popstate', () => {
    const parts = getPathname(window.location.pathname)
    const comp = routes[parts[routeIndex]] || routes['404']
    renderNode(document.getElementById('router'), comp)
  })

  return (root) => `<div id="router">${initalComp(root)}</div>`
}

delegate.bind(document.body, `[data-router-link]`, 'click', (e) => {
  const {href} = e.delegateTarget
  e.preventDefault()
  history.pushState(null, null, href)
  const event = new CustomEvent('pushstate')
  window.dispatchEvent(event)
})