export const noop = () => {}

export const either = (value, tester = arg => !!arg) => orElse =>
  tester(value) ? value : orElse
