const either = (value, tester = testValue => !!testValue) => orElse =>
  tester(value) ? value : orElse

export default either
