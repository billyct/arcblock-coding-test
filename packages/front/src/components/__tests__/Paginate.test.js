import {render} from '@testing-library/react'

jest.mock('../../hooks/useBlock')
const useBlock = require('../../hooks/useBlock')

jest.mock('../../hooks/useBlockRouteParams')
const useBlockRouteParams = require('../../hooks/useBlockRouteParams')

jest.mock('../PrevButton', () => 'prev-button-component')
jest.mock('../NextButton', () => 'next-button-component')

const Paginate = require('../Paginate').default

describe.each([
  [
    {block:{transactionsCount: 8}},
    {page: 10},
  ],
  [
    {block:{transactionsCount: 2000}},
    {page: 10},
  ]
])('test Paginate Component with useBlock(%o)', (block, blockRouteParams) => {
  beforeAll(() => {
    useBlock.__setMockData(block)
    useBlockRouteParams.__setMockData(blockRouteParams)
  })

  it('should render correct', function () {
    const {container} = render(<Paginate/>)
    expect(container).toMatchSnapshot()
  })
})
