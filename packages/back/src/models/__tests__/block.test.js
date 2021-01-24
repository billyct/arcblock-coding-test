const {Block} = require('../block')

describe('test Block class', () => {

  describe.each([
    ['hash'],
    ['height'],
    ['weight'],
    ['size'],
    ['time'],
    ['bits'],
    ['fee'],
    ['nonce'],
    ['mrklRoot', 'mrkl_root'],
    ['version', 'ver'],
    ['transactionsCount', 'n_tx'],
  ])(`%s attribute`,(key, keyOrigin) => {
    it(`should return correctly`, () => {
      const value = 'some value'
      const block = new Block({
        [keyOrigin || key]: value,
      })
      expect(block[key]).toEqual(value)
    })

    if (key === 'fee') {
      it('should return string', function () {
        expect(new Block({fee: 5000000}).fee).toEqual('5000000')
      })
    }
  })

  test('reward attribute should return correctly', () => {
    const value = 5000000
    const block = new Block({
      tx: [
        {
          out: [
            {
              value,
            }
          ]
        }
      ]
    })

    expect(block.reward).toEqual(value.toString())
  })

  describe('test transactions(page) function', () => {
    it('should return []', function () {
      const block = new Block({})
      expect(block.transactions({})).toEqual([])
      expect(block.transactions({page: 2})).toEqual([])
    })

    it('should return [] with large number page', function () {
      const block = new Block({tx: []})
      expect(block.transactions({page: 2})).toEqual([])
    })

    it('should return [] with negative number page', function () {
      const block = new Block({})
      expect(block.transactions({page: -1})).toEqual([])
    })

    it('should return correctly', function () {
      const block = new Block({
        tx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2]
      })
      expect(block.transactions({}).length).toEqual(10)
      expect(block.transactions({page: 2}).length).toEqual(2)
    })
  })
})
