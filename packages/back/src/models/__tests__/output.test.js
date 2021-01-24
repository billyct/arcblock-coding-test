const {Output} = require('../output')

describe(`test Output class`, () => {

  test('__typename attribute should be OpReturnOutput', () => {
    const output = new Output({})
    jest.spyOn(output, 'isOpReturnOutput', 'get').mockImplementationOnce(() => true)
    expect(output.__typename).toBe('OpReturnOutput')
  })

  test('__typename attribute should be TransactionOutput', () => {
    const output = new Output({})
    jest.spyOn(output, 'isOpReturnOutput', 'get').mockImplementationOnce(() => false)
    expect(output.__typename).toBe('TransactionOutput')
  })

  test('isOpReturnOutput attribute should correctly', () => {
    expect(new Output({}).isOpReturnOutput).toBeTruthy()
    expect(new Output({addr: null}).isOpReturnOutput).toBeTruthy()
    expect(new Output({addr: 'null'}).isOpReturnOutput).toBeTruthy()
    expect(new Output({addr: ''}).isCoinbaseInput).toBeFalsy()
  })

  describe.each([
    ['spent'],
    ['addr']
  ])(`%s attribute`, key => {
    it('should return correctly',  () => {
      const value = 'some value'
      const output = new Output({
        [key]: value
      })

      expect(output[key]).toBe(value)
    })
  })

  test('value attribute should correctly', () => {
    expect(new Output().value).toBe('0')
    expect(new Output({}).value).toBe('0')
    expect(new Output({value: 500000}).value).toBe('500000')
  })
})
