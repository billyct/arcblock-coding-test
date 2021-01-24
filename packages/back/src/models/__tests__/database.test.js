jest.mock('https')
const https = require('https')

const {getBlock, getBlockWithCache} = require('../database')
const {cache} = require('../../cache')

afterAll(() => {
  jest.restoreAllMocks()
})

describe(`test database's getBlockWithCache function`, () => {

  afterEach(() => {
    cache.reset()
  })

  it('should return data from cache', () => {
    const k = 'k'
    const v = 'v'

    cache.set(k, v)

    return getBlockWithCache(k).then(data => expect(data).toBe(v))
  })

  it('should return data from getBlock function', function () {
    const v = '{"v": 1}'
    https.__setMockUrls({
      'https://blockchain.info/rawblock/0': v,
    })

    return getBlockWithCache(0).then(data => expect(data).toEqual(JSON.parse(v)))
  })

  it('should reject with Error: Invalid Block Hash',  () => {
    https.__setMockUrls({
      'https://blockchain.info/rawblock/0': {statusCode: 500},
    })

    return getBlockWithCache(0).catch(e => expect(e).toEqual(Error('Invalid Block Hash')))
  })
})
describe(`test database's getBlock function`, () => {

  it('should reject with Error: Invalid Block Hash',  () => {
    https.__setMockUrls({
      'https://blockchain.info/rawblock/0': {statusCode: 500},
    })

    return getBlock(0).catch(e => expect(e).toEqual(Error('Invalid Block Hash')))
  })

  it('should reject with Error: Server Error',  () => {
    https.__setMockUrls({
      'https://blockchain.info/rawblock/0': Error('error'),
    })

    return getBlock(0).catch(e => expect(e).toEqual(Error('Server Error')))
  })

  it('should resolve json',  () => {
    https.__setMockUrls({
      'https://blockchain.info/rawblock/0': '{"ver": 1}',
    })
    return getBlock(0).then(res => expect(res).toEqual({ver: 1}))
  })
})
