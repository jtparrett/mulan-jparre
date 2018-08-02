import store from './store'

export default (mapStateToProps, mapDispatchToProps, updateOnStateChange) => (component) => (props) => (render, root) => {
  const dispatchProps = mapDispatchToProps(store.dispatch, props)

  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    const stateProps = mapStateToProps(state, props)
    updateOnStateChange({...props, ...dispatchProps, ...stateProps, unsubscribe})(render, root)
  })

  const state = store.getState()
  const stateProps = mapStateToProps(state, props)
  return component({...props, ...dispatchProps, ...stateProps, unsubscribe})(render, root)
} 