import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { clone, applySnapshot, getSnapshot } from 'mobx-state-tree'

import AnimalItemEdit from 'components/AnimalItemEdit'

import styles from './styles.scss'

const AnimalItem = ({ item }) => {
  const [state, setState] = useState({
    isEdit: false,
    itemClone: null,
  })

  return (
    <li className={styles.item}>
      {state.isEdit ? (
        <>
          <AnimalItemEdit item={state.itemClone} />
          <button
            type="button"
            onClick={() => {
              applySnapshot(item, getSnapshot(state.itemClone))
              setState({ isEdit: false, itemClone: null })
            }}
          >
            Save Edit
          </button>
          <button type="button" onClick={() => setState({ ...state, isEdit: false })}>
            Cancel Edit
          </button>
          <button type="button" onClick={item.remove}>
            Remove
          </button>
        </>
      ) : (
        <>
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              width="200px"
              height="200px"
              className={styles.img}
            />
          )}
          <h3>{item.name}</h3>
          <h3>{item.price}</h3>
          <button type="button" onClick={() => setState({ isEdit: true, itemClone: clone(item) })}>
            Edit
          </button>
        </>
      )}
    </li>
  )
}

export default observer(AnimalItem)
