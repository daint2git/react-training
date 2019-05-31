export default function slowImport(value, ms = 300) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms)
  })
}
