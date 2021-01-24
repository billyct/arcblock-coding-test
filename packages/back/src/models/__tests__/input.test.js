const {Input} = require('../input')

describe(`test Input`, () => {
  it('should be as coinbase', () => {
    const input = new Input({})

    expect(input.isCoinbaseInput).toBeTruthy()
  })
  it('should correct',  () => {
    const input = new Input({
      "prev_out": {
        "spent":true,
        "value":125244,
        "addr":"bc1q7nprs75jju40r9ryykf9msz5gy4x6eg2h03jkh",
      }
    })

    expect(input.isCoinbaseInput).toBeFalsy()
    expect(input.spent).toBeTruthy()
    expect(input.value).toBe('125244')
    expect(input.addr).toBe('bc1q7nprs75jju40r9ryykf9msz5gy4x6eg2h03jkh')
  })
})
