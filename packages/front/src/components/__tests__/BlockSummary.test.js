import {render} from '@testing-library/react'

jest.mock('../../hooks/useBlock')
const useBlock = require('../../hooks/useBlock')

jest.mock('../Card', () => 'card-component')
jest.mock('../SummaryItem', () => 'summary-item-component')

const BlockSummary = require('../BlockSummary').default

afterAll(() => {
  jest.resetModules()
})

describe.each([
  [
    {block: undefined}
  ],
  [
    {
      block: {
        bits: 486604799,
        fee: '0',
        hash: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
        height: 0,
        mrklRoot: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
        nonce: 2083236893,
        reward: '5000000000',
        size: 285,
        time: 1231006505,
        transactionsCount: 1,
        version: 1,
        weight: 1140,
      },
    }
  ]
])(`test BlockSummary Component with useBlock(%o)`, data => {
  beforeAll(() => {
    useBlock.__setMockData(data)
  })

  it('should render correct', function () {
    const {container} = render(<BlockSummary/>)
    expect(container).toMatchSnapshot()
  })
})
