import React from 'react'
import ReactDOM from 'react-dom'

import Root from 'components/Root'
import { AnimalList, data } from 'models/AnimalList'

const animalList = AnimalList.create({ items: data })

ReactDOM.render(<Root animalList={animalList} />, document.getElementById('root'))
