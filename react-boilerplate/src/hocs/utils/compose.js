// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js

const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg)

export default compose
