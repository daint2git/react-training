export default (value, tester = testValue => !!testValue) => orElse =>
  tester(value) ? value : orElse
