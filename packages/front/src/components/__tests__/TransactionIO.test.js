import {render} from '@testing-library/react'

jest.mock('../TransactionSpent', () => 'transaction-spent-component')
jest.mock('../Hash', () => 'hash-component')

const TransactionIO = require('../TransactionIO').default

describe.each([
  [
    {
      spent: true,
      addr: 'address 1',
      value:'500000000000'
    }
  ],
  [
    {
      spent: false,
      addr: 'address 2',
      value:'500000000000'
    }
  ]
])('test TransactionIO Component case %#', data => {
  it('should render correct', function () {
    const {container} = render(<TransactionIO data={data}/>)
    expect(container).toMatchSnapshot()
  })
})
