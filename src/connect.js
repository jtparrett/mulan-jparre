import store from './store'

let unsubscribe

export default (mapStateToProps, mapPropsOnStateChange, mapDispatchToProps) => (component) => (props) => (root) => {
  if(unsubscribe){ unsubscribe() }

  const dispatchProps = mapDispatchToProps(store.dispatch, props)

  unsubscribe = store.subscribe(() => {
    const state = store.getState()
    const stateProps = mapStateToProps(state)
    mapPropsOnStateChange({...props, ...dispatchProps, ...stateProps})
  })

  const state = store.getState()
  const stateProps = mapStateToProps(state)
  return component({...props, ...dispatchProps, ...stateProps})(root)
} 