import {render, fireEvent, act} from '@testing-library/react'

jest.mock('../Tooltip', () =>'tooltip-component')

const mockCopyText = jest.fn()

jest.mock('../../utils', () => ({
  copyText: mockCopyText,
}))

const CopyButton = require('../CopyButton').default

afterAll(() => {
  jest.resetModules()
  jest.clearAllTimers()
})

describe('test CopyButton Component', () => {

  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should render correct', function () {
    const {container} = render(<CopyButton/>)
    expect(container).toMatchSnapshot()
  })

  it('should unmount correct', function () {
    const {unmount} = render(<CopyButton/>)
    unmount()
  })

  it('should call copyText when button clicked', function () {
    const {getByTestId} = render(<CopyButton/>)
    fireEvent.click(getByTestId('CopyButton__button'))

    expect(mockCopyText).toBeCalledTimes(1)
  })

  it('should have correct mouse event', function () {
    const {getByTestId} = render(<CopyButton/>)

    const button =getByTestId('CopyButton__button')
    const tooltip = getByTestId('CopyButton__Tooltip')

    fireEvent.mouseEnter(button)
    expect(tooltip).toHaveAttribute('show', 'true')

    fireEvent.mouseLeave(button)
    expect(tooltip).toHaveAttribute('show', 'false')
  })

  it('should handleClick correct with setTimeout', function () {
    const {getByTestId} = render(<CopyButton/>)

    const button = getByTestId('CopyButton__button')
    const tooltip = getByTestId('CopyButton__Tooltip')

    fireEvent.click(button)

    expect(tooltip).toHaveAttribute('show', 'true')
    expect(tooltip).toHaveAttribute('content', 'Copied')

    act(() => {
      jest.advanceTimersByTime(3000)
    })

    expect(tooltip).toHaveAttribute('show', 'false')
    expect(tooltip).toHaveAttribute('content', 'Copy Hash')
  })
})
