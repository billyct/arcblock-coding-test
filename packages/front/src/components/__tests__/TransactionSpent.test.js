import {fireEvent, render} from '@testing-library/react'

import TransactionSpent from '../TransactionSpent'

jest.mock('../Tooltip', () => 'tooltip-component')

afterAll(() => {
  jest.resetModules()
})

describe('test TransactionSpent Component', () => {
  test('snapshot should correct', () => {
    const {container} = render(<TransactionSpent/>)
    expect(container).toMatchSnapshot()
  })

  test(`tooltip's show attribute should correct`, () => {
    const {getByTestId} = render(<TransactionSpent/>)

    const div = getByTestId('TransactionSpent__div')
    const tooltip = getByTestId('TransactionSpent__tooltip')

    fireEvent.mouseEnter(div)
    expect(tooltip).toHaveAttribute('show', 'true')

    fireEvent.mouseLeave(div)
    expect(tooltip).toHaveAttribute('show', 'false')
  })

  describe.each([
    [true, 'Spent', 'bg-green-500'],
    [false, 'Unspent', 'bg-red-500'],
  ])(`test attribute spent === %b`, (spent, expectedContent, expectedClassname) => {

    it(`should return ${expectedContent}`, function () {
      const {getByTestId} = render(<TransactionSpent spent={spent}/>)
      expect(getByTestId('TransactionSpent__tooltip')).toHaveAttribute('content', expectedContent)
    })

    it(`should return ${expectedClassname}`, function () {
      const {getByTestId} = render(<TransactionSpent spent={spent}/>)
      expect(getByTestId('TransactionSpent__div')).toHaveClass(expectedClassname)
    })
  })

})
