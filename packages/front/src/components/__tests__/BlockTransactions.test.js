import {render} from '@testing-library/react'

jest.mock('../../hooks/useBlock')
jest.mock('../../hooks/useTransactions')
const useBlock = require('../../hooks/useBlock')
const useTransactions = require('../../hooks/useTransactions')

jest.mock('../Card', () => 'card-component')
jest.mock('../Loading', () => 'loading-component')
jest.mock('../Paginate', () => 'paginate-component')
jest.mock('../TransactionItem', () => 'transaction-item-component')

const BlockTransactions = require('../BlockTransactions').default

afterAll(() => {
  jest.resetModules()
})

describe.each([
  [
    {block: undefined},
    {transactions: []},
  ],
  [
    {block: {transactionsCount: 2000}},
    {transactions: undefined},
  ],
  [
    {block: {transactionsCount: 2000}},
    {
      transactions: [
        {hash: 'hash 1'},
        {hash: 'hash 2'},
      ]
    },
  ]
])('test BlockTransactions Component with useBlock(%o) useTransactions(%o)', (block, transactions) => {
  beforeAll(() => {
    useBlock.__setMockData(block)
    useTransactions.__setMockData(transactions)
  })

  it('should render correct', function () {
    const {container} = render(<BlockTransactions/>)
    expect(container).toMatchSnapshot()
  })
})
