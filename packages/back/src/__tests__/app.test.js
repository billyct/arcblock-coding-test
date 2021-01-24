jest.mock('https')
const https = require('https')
const supertest = require('supertest')

const app = require('../app')
const {cache} = require('../cache')

const request = supertest(app)

afterAll(() => {
  jest.restoreAllMocks()
})

describe('test /graphql', () => {

  beforeAll(() => {
    cache.set('hash', {
      ver: 1,
      tx: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    })
  })

  afterAll(() => {
    cache.reset()
  })

  it('should getBlock correct', async () => {
    const res = await request.post('/graphql')
      .send({
        query: `{block(hash: "hash"){ver, tx(page: 1){__typename}}}`,
      })

    expect(res.statusCode).toBe(200)
    expect(res.body.data.block.ver).toBe(1)
    expect(res.body.data.block.tx.length).toBe(10)
  })

  it('should tx pagination correct', async () => {
    const res = await request.post('/graphql')
      .send({
        query: `{block(hash: "hash"){tx(page: 2){__typename}}}`,
      })

    expect(res.statusCode).toBe(200)
    expect(res.body.data.block.tx.length).toBe(3)
  })

  it('should return error message: Invalid Block Hash', async ()=> {
    https.__setMockUrls({
      'https://blockchain.info/rawblock/0': {statusCode: 500},
    })

    const res = await request.get('/graphql')
      .send({
        query: `{block(hash: "0"){ver}}`,
      })

    expect(res.statusCode).toBe(200)
    expect(res.body.errors[0].message).toBe('Invalid Block Hash')
  })
})
