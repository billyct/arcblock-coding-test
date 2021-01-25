import {btcString, copyText, formatTime} from '../utils'

describe.each([
  ['5000000000', `50.00000000 BTC`],
  ['78809014', '0.78809014 BTC'],
  ['0', '0 BTC'],
  ['0.0000', '0 BTC'],
  ['', '0 BTC']
])(`test btcString(%s) function`, (str, expected) => {
  it(`should return ${expected}`, () => {
    expect(btcString(str)).toBe(expected)
  })
})

describe.each([
  [1611217553, `2021-01-21 16:25:53`],
])(`test formatTime(%i) function`, (time, expected) => {
  it(`should return ${expected}`, () => {
    expect(formatTime(time)).toBe(expected)
  })
})

test('copyText function should correct', () => {
  document.execCommand = jest.fn()

  copyText('')

  expect(document.execCommand).toBeCalledTimes(1)
  expect(document.execCommand).toBeCalledWith('copy')
})

