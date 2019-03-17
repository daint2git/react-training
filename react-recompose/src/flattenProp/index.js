import React from 'react'
import { flattenProp } from 'recompose'

const PersonInfo = props => <h2>props is {JSON.stringify(props, null, 2)}</h2>

const EnhancePersonInfo = flattenProp('person')(PersonInfo)

export default () => <EnhancePersonInfo person={{ name: 'Dai', age: 25 }} />
