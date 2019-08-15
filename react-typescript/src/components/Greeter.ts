class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet(value: number): string {
    return `Hello, ${this.greeting}, ${value}`
  }
}

export default Greeter
