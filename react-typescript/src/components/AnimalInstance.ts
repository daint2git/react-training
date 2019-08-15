import Animal from './Animal'

class Snake extends Animal {
  constructor(name: string, numberOfLegs: number) {
    super(name, numberOfLegs, true)
    console.log('constructor Snake') // eslint-disable-line
  }

  move(distanceInMeters = 5): void {
    console.log('Slithering...') // eslint-disable-line
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string, numberOfLegs: number) {
    super(name, numberOfLegs)
    console.log('constructor Horse') // eslint-disable-line
  }

  move(distanceInMeters = 45): void {
    console.log('Galloping...') // eslint-disable-line
    super.move(distanceInMeters)
  }
}

export { Snake, Horse }
