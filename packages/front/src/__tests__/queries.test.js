import {transactionsQuery, blockQuery} from '../queries'

describe('test queries', () => {
  test('blockQuery', () => {
    expect(blockQuery(0)).toMatchSnapshot()
  })

  test('transactionsQuery', () => {
    expect(transactionsQuery(0, 1)).toMatchSnapshot()
  })
})
