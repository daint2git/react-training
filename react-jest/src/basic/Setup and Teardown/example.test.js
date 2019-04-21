// Applies to all tests in this file
import { initializeCityDatabase, initializePositionDatabase } from './data'

let cityDatabase = []

beforeEach(() => {
  cityDatabase = initializeCityDatabase()
})

afterEach(() => {
  cityDatabase = []
})

describe('city database', () => {
  test('city database has "da nang"', () => {
    expect(cityDatabase).toContain('da nang')
  })

  test('city database has not "hue"', () => {
    expect(cityDatabase).not.toContain('hue')
  })
})

describe('position database', () => {
  let positionDatabase = []

  beforeEach(() => {
    positionDatabase = initializePositionDatabase()
  })

  afterEach(() => {
    positionDatabase = []
  })

  test('position database has "developer"', () => {
    expect(positionDatabase).toContain('developer')
  })

  test('position database has "pilot"', () => {
    expect(positionDatabase).not.toContain('pilot')
  })
})
