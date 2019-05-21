import React from 'react'
import { observer } from 'mobx-react'

const AnimalItemEdit = ({ item }) => {
  const onNameChange = e => {
    item.changeName(e.target.value)
  }
  const onPriceChange = e => {
    const price = parseInt(e.target.value, 10)
    if (!Number.isNaN(price)) item.changePrice(price)
  }
  const onImageChange = e => {
    item.changeImage(e.target.value)
  }

  return (
    <div>
      Name: <input type="text" value={item.name} onChange={onNameChange} />
      <br />
      Price: <input type="text" value={item.price} onChange={onPriceChange} />
      <br />
      Image: <input type="text" value={item.image} onChange={onImageChange} />
      <br />
    </div>
  )
}

export default observer(AnimalItemEdit)
