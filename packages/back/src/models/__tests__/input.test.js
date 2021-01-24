const {Input} = require('../input')

describe(`test Input class`, () => {

  test('__typename attribute should be CoinbaseInput', () => {
    const input = new Input({})
    jest.spyOn(input, 'isCoinbaseInput', 'get').mockImplementationOnce(() => true)
    expect(input.__typename).toBe('CoinbaseInput')
  })

  test('__typename attribute should be TransactionInput', () => {
    const input = new Input({})
    jest.spyOn(input, 'isCoinbaseInput', 'get').mockImplementationOnce(() => false)
    expect(input.__typename).toBe('TransactionInput')
  })

  test('isCoinbaseInput attribute should correctly', () => {
    expect(new Input({}).isCoinbaseInput).toBeTruthy()
    expect(new Input({prev_out: null}).isCoinbaseInput).toBeTruthy()
    expect(new Input({prev_out: ''}).isCoinbaseInput).toBeFalsy()
  })

  describe.each([
    ['spent'],
    ['addr']
  ])(`%s attribute`, key => {
    it('should return correctly',  () => {
      const value = 'some value'
      const prevOut = {
        [key]: value
      }

      const input = new Input({prev_out: prevOut})

      expect(input[key]).toBe(value)
    })
  })

  test('value attribute should correctly', () => {
    expect(new Input().value).toBe('0')
    expect(new Input({}).value).toBe('0')
    expect(new Input({prev_out:{value: 500000}}).value).toBe('500000')
  })
})
