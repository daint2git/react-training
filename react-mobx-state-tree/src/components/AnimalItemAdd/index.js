import React, { useState, useCallback } from 'react'
import { observer } from 'mobx-react'

import AnimalItemEdit from 'components/AnimalItemEdit'
import { AnimalItem } from 'models/AnimalList'

const AnimalItemAdd = ({ add }) => {
  const [state, setState] = useState({
    entry: AnimalItem.create({
      id: Date.now(),
      name: '',
      price: 0,
      image: '',
    }),
  })

  const onAdd = useCallback(() => {
    add(state.entry)
    setState({
      entry: AnimalItem.create({
        id: Date.now(),
        name: '',
        price: 0,
        image: '',
      }),
    })
  }, [add, state.entry])

  return (
    <div>
      <AnimalItemEdit item={state.entry} />
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  )
}

export default observer(AnimalItemAdd)
