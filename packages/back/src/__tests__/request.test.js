jest.mock('https')
const https = require('https')

const {request} = require('../request')

afterAll(() => {
  jest.restoreAllMocks()
})

describe(`test request`, () => {

  it('should reject with {statusCode: 500}',  () => {
    const url = 'url'
    https.__setMockUrls({
      [url]: {statusCode: 500},
    })
    return request(url).catch(e => expect(e.statusCode).toBe(500))
  })

  it('should resolve json',  () => {
    const url = 'url'
    https.__setMockUrls({
      [url]: '{"ver": 1}',
    })
    return request(url).then(res => expect(res).toEqual({"ver": 1}))
  })
})
