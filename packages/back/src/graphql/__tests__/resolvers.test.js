jest.mock('https')

const https = require('https')
const {resolvers} = require('../resolvers')
const {Block} = require('../../models/block')
const {cache} = require('../../cache')

afterAll(() => {
  jest.restoreAllMocks()
  cache.reset()
})

describe('test resolvers', () => {
  it('should return block instance', () => {
    const hash = '0'
    https.__setMockUrls({
      [`https://blockchain.info/rawblock/${hash}`]: '{"k": "v"}',
    })

    return resolvers.block({hash}).then(block => expect(block).toBeInstanceOf(Block))
  })
})
