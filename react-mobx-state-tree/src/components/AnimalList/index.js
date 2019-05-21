import React from 'react'
import { observer } from 'mobx-react'

import AnimalItem from 'components/AnimalItem'
import AnimalItemAdd from 'components/AnimalItemAdd'

import styles from './styles.scss'

const AnimalList = ({ animalList: { items, totalPrice, add } }) => {
  return (
    <>
      <div className={styles.list}>
        <h2>Animals</h2>
        <ul>
          {items.map(item => (
            <AnimalItem key={item.id} item={item} />
          ))}
        </ul>
        <span>total price: {totalPrice}</span>
      </div>
      <AnimalItemAdd add={add} />
    </>
  )
}

export default observer(AnimalList)
