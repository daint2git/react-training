const setDisplayName = displayName => BaseComponent => {
  /* eslint-disable no-param-reassign */
  BaseComponent.displayName = displayName
  /* eslint-enable no-param-reassign */
  return BaseComponent
}

export default setDisplayName
