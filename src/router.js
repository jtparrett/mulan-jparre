export default (routes) => () => {
  const {pathname} = window.location
  let parts = [...pathname.split('/')]
  parts.shift()
  return routes[parts[0]] || routes['404']
}