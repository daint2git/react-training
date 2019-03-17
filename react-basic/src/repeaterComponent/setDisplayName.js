const setDisplayName = displayName => BaseComponent => {
  BaseComponent.displayName = displayName
  return BaseComponent
}

export default setDisplayName
