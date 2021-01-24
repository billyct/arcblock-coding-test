const fs = require('fs')

const {cache, FileCache} = require('../cache')

describe(`test cache`, () => {

  afterEach(() => {
    cache.reset()
  })

  it('should load data from file', () => {
    const k = 'k'
    const v = 'v'

    expect(cache.get(k)).toBeUndefined()
    cache.set(k, v)

    const cacheInstanceNew = new FileCache()
    expect(cacheInstanceNew.get(k)).toBe(v)
  })

  it('should write cache.dump() to file', () => {
    cache.set('k', 'v')
    expect(fs.existsSync(cache.cacheFile)).toBeTruthy()
    expect(fs.readFileSync(cache.cacheFile).toString()).toEqual(JSON.stringify(cache.dump()))
  })

  it('should remove the file', () => {
    cache.set('k', 'v')
    expect(fs.existsSync(cache.cacheFile)).toBeTruthy()
    cache.reset()
    expect(fs.existsSync(cache.cacheFile)).toBeFalsy()
  })
})
