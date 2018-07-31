import store from './store'

export default (mapStateToProps, mapPropsOnStateChange, mapDispatchToProps) => (component) => (props) => {
  const dispatchProps = mapDispatchToProps(store.dispatch, props)

  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    const stateProps = mapStateToProps(state)
    mapPropsOnStateChange({...props, ...dispatchProps, ...stateProps}, unsubscribe)
  })

  const state = store.getState()
  const stateProps = mapStateToProps(state)
  return component({...props, ...dispatchProps, ...stateProps})
} 