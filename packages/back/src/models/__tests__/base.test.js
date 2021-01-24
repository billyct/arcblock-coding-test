const {Base} = require('../base')

describe(`test Base class`, () => {

  test('constructor function', () => {
    const data = 'some data'
    const base = new Base(data)

    expect(base.data).toEqual(data)
  })

  describe('test getAttribute function', () => {
    it('should return defaultValue', () => {
      const defaultValue = 'value'
      const key = 'a key'
      const base = new Base('not an object')

      expect(base.getAttribute(key, defaultValue)).toEqual(defaultValue)
    })

    it('should return defaultValue with key not exist', function () {
      const defaultValue = 'value'
      const key = 'a key not exist'
      const base = new Base({})

      expect(base.getAttribute(key, defaultValue)).toEqual(defaultValue)
    })

    it('should return attribute from data correctly',  () => {
      const base = new Base({
        a: {
          b: [
            'c',
            'd',
            {
              e: 'f'
            }
          ]
        }
      })

      expect(base.getAttribute('a.b.0')).toEqual('c')
      expect(base.getAttribute('a.b.1')).toEqual('d')
      expect(base.getAttribute('a.b.2.e')).toEqual('f')
    })
  })
})
