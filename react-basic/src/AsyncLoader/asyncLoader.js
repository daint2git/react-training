import React from 'react'

class LoaderProvider extends React.Component {
  state = { loaded: false }

  runTask() {
    this.props
      .task()
      .then(() => this.setState({ loaded: true }))
      .catch(err => {
        throw err
      })
  }

  shouldComponentUpdate(_, nextState) {
    return this.state.loaded || this.state.loaded !== nextState.loaded
  }

  componentDidMount() {
    if (!this.state.loaded) this.runTask()
  }

  render() {
    const { Provider, children } = this.props
    return <Provider value={this.state}>{children}</Provider>
  }
}

const asyncLoader = task => {
  const { Provider, Consumer } = React.createContext()
  return Component => props => (
    <LoaderProvider task={() => task(props)} Provider={Provider}>
      <Consumer>{({ loaded }) => loaded && <Component {...props} />}</Consumer>
    </LoaderProvider>
  )
}

export default asyncLoader
