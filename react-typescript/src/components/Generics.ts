function identity<T>(arg: T): T {
  return arg
}

function noop(): void {} // eslint-disable-line

export { identity, noop }
