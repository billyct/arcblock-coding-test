import {render} from '@testing-library/react'

jest.mock('../../hooks/useBlock')
const useBlock = require('../../hooks/useBlock')

jest.mock('../Error', () => 'error-component')
jest.mock('../Loading', () => 'loading-component')
jest.mock('../BlockHash', () => 'block-hash-component')
jest.mock('../BlockSummary', () => 'block-summary-component')
jest.mock('../BlockTransactions', () => 'block-transactions-component')

const Block = require('../Block').default

afterAll(() => {
  jest.resetModules()
})

describe.each([
  [
    {
      error: {
        message: 'a error message'
      }
    }
  ],
  [
    {block: undefined}
  ],
  [
    {block: 'a block'}
  ]
])(`test Block Component with useBlock(%o)`, data => {

  beforeAll(() => {
    useBlock.__setMockData(data)
  })

  it('should render correct', function () {
    const {container} = render(<Block/>)
    expect(container).toMatchSnapshot()
  })
})
