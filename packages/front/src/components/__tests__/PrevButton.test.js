import {fireEvent, render} from '@testing-library/react'

jest.mock('../../hooks/useBlockRouteParams')
const useBlockRouteParams = require('../../hooks/useBlockRouteParams')

jest.mock('wouter')
const wouter = require('wouter')

const PrevButton = require('../PrevButton').default

afterAll(() => {
  jest.resetModules()
})

describe('test PrevButton Component useBlockRouteParams({page: 1})', () => {
  beforeAll(() => {
    useBlockRouteParams.__setMockData({page: 1})
  })

  it('should have attribute disabled', function () {
    const {getByTestId} = render(<PrevButton/>)
    expect(getByTestId('PrevButton__button')).toHaveAttribute('disabled')
  })

  it('should not trigger setLocation when clicked button', () => {
    const mockSetLocation = jest.fn()
    wouter.__mockSetLocation(mockSetLocation)

    const {getByTestId} = render(<PrevButton/>)

    fireEvent.click(getByTestId('PrevButton__button'))
    expect(mockSetLocation).not.toBeCalled()
  })
})


describe('test PrevButton Component useBlockRouteParams({page: 2})', () => {
  beforeAll(() => {
    useBlockRouteParams.__setMockData({page: 2})
  })

  it('should not have attribute disabled', function () {
    const {getByTestId} = render(<PrevButton/>)
    expect(getByTestId('PrevButton__button')).not.toHaveAttribute('disabled')
  })

  it('should trigger setLocation when clicked button', () => {
    const mockSetLocation = jest.fn()
    wouter.__mockSetLocation(mockSetLocation)

    const {getByTestId} = render(<PrevButton/>)

    fireEvent.click(getByTestId('PrevButton__button'))
    expect(mockSetLocation).toBeCalled()
    expect(mockSetLocation).toBeCalledWith(`/block/undefined/tx/page/1`)
  })
})
