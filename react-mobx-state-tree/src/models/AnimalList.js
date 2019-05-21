import { types, getParent, destroy } from 'mobx-state-tree'

export const data = [
  {
    id: 1,
    name: 'amimal 1',
    price: 69.69,
    image: 'https://picsum.photos/id/1003/1181/1772',
  },
  {
    id: 2,
    name: 'amimal 2',
    price: 55.55,
    image: 'https://picsum.photos/id/1024/1920/1280',
  },
]

export const AnimalItem = types
  .model({
    id: types.number,
    name: types.string,
    price: types.number,
    image: types.string,
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName
    },
    changePrice(newPrice) {
      self.price = newPrice
    },
    changeImage(newImage) {
      self.image = newImage
    },
    remove() {
      getParent(self, 2).remove(self)
    },
  }))

export const AnimalList = types
  .model({
    items: types.optional(types.array(AnimalItem), []),
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    },
    remove(item) {
      destroy(item)
    },
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum, item) => sum + item.price, 0)
    },
  }))
