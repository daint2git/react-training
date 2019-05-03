import { observable, action, computed } from 'mobx'

class Bird {
  @observable id
  @observable name
  @observable color

  constructor(bird) {
    this.id = Date.now()
    this.name = bird.name
    this.color = bird.color
  }
}

class BirdStore {
  @observable birds = []

  @action.bound
  addBird(bird) {
    this.birds.push(new Bird(bird))
  }

  @computed
  get birdCount() {
    return this.birds.length
  }
}

export default new BirdStore()
