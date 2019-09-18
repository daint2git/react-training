class Animal {
  name: string

  readonly numberOfLegs: number

  private hasBite?: boolean

  constructor(name: string, numberOfLegs: number, hasBite = false) {
    this.name = name
    this.numberOfLegs = numberOfLegs
    this.hasBite = hasBite
  }

  move(distanceInMeters = 0): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`) // eslint-disable-line
  }
}

export default Animal
