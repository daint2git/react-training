import createAction from './createAction'

const createActionWithPrefix = prefix => type => createAction(`${prefix}/${type}`)

export default createActionWithPrefix
