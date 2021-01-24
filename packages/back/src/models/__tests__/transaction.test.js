const {Transaction} = require('../transaction')

describe('test Transaction class', () => {
  describe.each([
    ['hash'],
    ['time'],
    ['fee'],
  ])(`%s attribute`,(key) => {
    it(`should return correctly`, () => {
      const value = 'some value'
      const transaction = new Transaction({
        [key]: value,
      })
      expect(transaction[key]).toEqual(value)
    })

    if (key === 'fee') {
      it('should return string', function () {
        expect(new Transaction({fee: 5000000}).fee).toBe('5000000')
      })
    }
  })

  test('inputsCount attribute should return correctly', () => {
    const transaction = new Transaction()
    jest.spyOn(transaction, 'inputs', 'get').mockImplementationOnce(() => [])
    expect(transaction.inputsCount).toBe(0)

    jest.spyOn(transaction, 'inputs', 'get').mockImplementationOnce(() => [1])
    expect(transaction.inputsCount).toBe(1)
  })

  test('inputsValueCount attribute should return correctly', () => {
    const transaction = new Transaction()
    jest.spyOn(transaction, 'inputs', 'get').mockImplementationOnce(() => [
      {value: 0},
      {value: 1},
      {value: 2},
    ])

    expect(transaction.inputsValueCount).toBe('3')
  })

  test('inputs attribute should return correctly', () => {
    expect(new Transaction().inputs.length).toBe(0)
    expect(new Transaction({inputs: []}).inputs.length).toBe(0)
    expect(new Transaction({inputs: [1]}).inputs.length).toBe(1)
  })

  test('outputsCount attribute should return correctly', () => {
    const transaction = new Transaction()
    jest.spyOn(transaction, 'outputs', 'get').mockImplementationOnce(() => [])
    expect(transaction.outputsCount).toBe(0)

    jest.spyOn(transaction, 'outputs', 'get').mockImplementationOnce(() => [1])
    expect(transaction.outputsCount).toBe(1)
  })

  test('outputsValueCount attribute should return correctly', () => {
    const transaction = new Transaction()
    jest.spyOn(transaction, 'outputs', 'get').mockImplementationOnce(() => [
      {value: 0},
      {value: 1},
      {value: 2},
    ])

    expect(transaction.outputsValueCount).toBe('3')
  })

  test('outputs attribute should return correctly', () => {
    expect(new Transaction().outputs.length).toBe(0)
    expect(new Transaction({out: []}).outputs.length).toBe(0)
    expect(new Transaction({out: [1]}).outputs.length).toBe(1)
  })
})
