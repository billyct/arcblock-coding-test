import {fireEvent, render} from '@testing-library/react'

jest.mock('../../hooks/useBlock')
const useBlock = require('../../hooks/useBlock')
jest.mock('../../hooks/useBlockRouteParams')
const useBlockRouteParams = require('../../hooks/useBlockRouteParams')
const wouter = require('wouter')

const NextButton = require('../NextButton').default

afterAll(() => {
  jest.resetModules()
})

describe('test NextButton Component useBlockRouteParams({page: 20})', () => {
  beforeAll(() => {
    useBlockRouteParams.__setMockData({page: 20})
    useBlock.__setMockData({block:{transactionsCount: 199}})
  })

  it(`should have disabled attribute`, function () {
    const {getByTestId} = render(<NextButton/>)
    expect(getByTestId('NextButton__button')).toHaveAttribute('disabled')
  })

  it('should not trigger setLocation when clicked button', () => {
    const mockSetLocation = jest.fn()
    wouter.__mockSetLocation(mockSetLocation)

    const {getByTestId} = render(<NextButton/>)

    fireEvent.click(getByTestId('NextButton__button'))
    expect(mockSetLocation).not.toBeCalled()
  })
})

describe('test NextButton Component useBlockRouteParams({page: 2})', () => {
  beforeAll(() => {
    useBlockRouteParams.__setMockData({page: 2})
    useBlock.__setMockData({block:{transactionsCount: 199}})
  })

  it(`should not have disabled attribute`, function () {
    const {getByTestId} = render(<NextButton/>)
    expect(getByTestId('NextButton__button')).not.toHaveAttribute('disabled')
  })

  it('should trigger setLocation when clicked button', () => {
    const mockSetLocation = jest.fn()
    wouter.__mockSetLocation(mockSetLocation)

    const {getByTestId} = render(<NextButton/>)

    fireEvent.click(getByTestId('NextButton__button'))
    expect(mockSetLocation).toBeCalled()
    expect(mockSetLocation).toBeCalledWith(`/block/undefined/tx/page/3`)
  })
})
