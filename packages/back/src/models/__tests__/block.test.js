const {Block} = require('../block')

describe('test Block', () => {
  it('should init correct', () => {

    const data = {
      k1: 'v1',
      k2: 'v2',
    }

    const block = new Block(data)

    expect(block.data).toEqual(data)
    expect(block.k1).toBe(data.k1)
    expect(block.k2).toBe(data.k2)
    expect(block.perPage).toBe(10)
  })

  describe('tx(page)', () => {
    it('should return []', function () {
      const block = new Block({})
      expect(block.tx({})).toEqual([])
      expect(block.tx({page: 2})).toEqual([])
    })

    it('should return [] too', function () {
      const block = new Block({
        tx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      })
      expect(block.tx({page: 2})).toEqual([])
    })

    it('should return [1,2]', function () {
      const block = new Block({
        tx: [1, 2]
      })
      expect(block.tx({page: 1})).toEqual([1, 2])
    })

    it('should return [1,2]', function () {
      const block = new Block({
        tx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2]
      })
      expect(block.tx({page: 2})).toEqual([1, 2])
    })
  })
})
