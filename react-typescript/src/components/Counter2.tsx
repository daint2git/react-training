import React from 'react'

import Greeter from './Greeter'
import { Snake, Horse } from './AnimalInstance'
import Animal from './Animal'
import { identity } from './Generics'

type Props = {
  initialCount: number
}

type State = {
  count: number
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

// enum Color2 {
//   Red,
//   Green,
//   Blue,
// }

// enum Color3 {
//   Red = 1,
//   Green = 2,
//   Blue = 4,
// }

enum Fontsize {
  Small = 14,
  Medium = 18,
  Large = 24,
}

const greeterInstance = new Greeter('World')
const snakeInstance: Snake = new Animal('Snake 1', 0)
const horseInstance: Horse = new Animal('Horse 1', 4)
const snakeInstance2 = new Snake('Snake 2', 0)
const horseInstance2 = new Horse('Horse 2', 4)

const getCurrentDate = (): string => {
  return new Date().toString()
}

const isBigger = (val1: number, val2: number): boolean => val1 > val2

class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { count: props.initialCount || 0 }
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
  }

  onIncrement(): void {
    const { count } = this.state
    this.updateCount(count + 1)
  }

  onDecrement(): void {
    const { count } = this.state
    this.updateCount(count - 1)
  }

  static getStylesByCount(count: number): { color: string; fontSize: number } {
    return count % 2
      ? { color: Color.Red, fontSize: Fontsize.Large }
      : { color: Color.Blue, fontSize: Fontsize.Large }
  }

  updateCount(count: number): void {
    this.setState({ count })
  }

  render(): React.ReactElement {
    const { count } = this.state
    snakeInstance.name = 'Snake 111'
    snakeInstance.move()
    horseInstance.move(99)
    console.log('---------') // eslint-disable-line
    snakeInstance2.name = 'Snake 2222'
    snakeInstance2.move()
    horseInstance2.move(99)
    console.log('---------') // eslint-disable-line
    const identityString = identity<string>('myString')
    const identityString2 = identity('myString')
    const identityNumber = identity<number>(25)
    console.log(identityString, identityString2, identityNumber) // eslint-disable-line
    return (
      <div>
        <h2 style={Counter.getStylesByCount(count)}>COUNT {count}</h2>
        <h3>{greeterInstance.greet(count)}</h3>
        <h3>{getCurrentDate()}</h3>
        <h3>{String(isBigger(100, 99))}</h3>
        <div>
          <button
            type="button"
            onClick={this.onIncrement}
            style={{ color: Color.Green, fontSize: Fontsize.Large }}
          >
            +
          </button>
          <button
            type="button"
            onClick={this.onDecrement}
            style={{ color: Color.Blue, fontSize: Fontsize.Large }}
          >
            -
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
