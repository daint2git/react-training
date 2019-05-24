import createErrorAction from './createErrorAction'

const createErrorActionWithPrefix = prefix => type => createErrorAction(`${prefix}/${type}`)

export default createErrorActionWithPrefix
