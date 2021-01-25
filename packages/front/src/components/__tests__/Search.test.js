import {waitFor, fireEvent, render} from '@testing-library/react'

jest.mock('wouter')
const wouter = require('wouter')

afterAll(() => {
  jest.resetModules()
})

describe('test Search Component', () => {

  beforeEach(() => {
    jest.mock('../SearchButton', () => 'search-button-component')
    jest.mock('../SearchInput', () => 'search-input-component')
    jest.mock('../ClearButton', () => 'clear-button-component')
  })

  test('snapshot should correct', () => {
    jest.isolateModules(() => {
      const Search = require('../Search').default
      const {container} = render(<Search className='search_classname'/>)
      expect(container).toMatchSnapshot()
    })
  })

  test('handleChange method should correct', () => {
    jest.unmock('../SearchInput')
    jest.isolateModules(() => {
      const Search = require('../Search').default
      const {getByTestId} = render(<Search/>)

      const input = getByTestId('Search__SearchInput')
      fireEvent.change(input, {
        target: {
          value: '0'
        }
      })

      expect(input).toHaveValue('0')
    })
  })

  test('handleKeyUp method should correct', () => {
    jest.unmock('../SearchInput')
    jest.isolateModules(() => {
      const setLocation = jest.fn()
      wouter.__mockSetLocation(setLocation)

      const Search = require('../Search').default
      const {getByTestId} = render(<Search/>)

      const input = getByTestId('Search__SearchInput')
      fireEvent.keyUp(input, {
        key: 'Enter',
      })

      expect(setLocation).toBeCalledTimes(1)
      expect(setLocation).toBeCalledWith('/block/')
    })
  })

  test(`SearchButton's className should correct`, () => {
    jest.unmock('../SearchInput')
    jest.unmock('../SearchButton')

    jest.isolateModules(async () => {

      const Search = require('../Search').default
      const {getByTestId} = render(<Search/>)

      const input = getByTestId('Search__SearchInput')
      const button = getByTestId('Search__SearchButton')

      fireEvent.change(input, {target: {value: 'not empty'}})
      expect(button).toHaveClass('bg-black text-white')
    })
  })

  test('handleSearch method should correct', () => {
    jest.unmock('../SearchButton')

    jest.isolateModules(() => {
      const setLocation = jest.fn()
      wouter.__mockSetLocation(setLocation)

      const Search = require('../Search').default
      const {getByTestId} = render(<Search/>)

      const button = getByTestId('Search__SearchButton')
      fireEvent.click(button)

      expect(setLocation).toBeCalledTimes(1)
      expect(setLocation).toBeCalledWith('/block/')
    })
  })

  test(`ClearButton's className should correct`, () => {
    jest.unmock('../SearchInput')
    jest.unmock('../ClearButton')

    jest.isolateModules(async () => {

      const Search = require('../Search').default
      const {getByTestId} = render(<Search/>)

      const input = getByTestId('Search__SearchInput')
      const button = getByTestId('Search__ClearButton')

      fireEvent.change(input, {target: {value: 'not empty'}})
      expect(button).toHaveClass('block')

      fireEvent.change(input, {target: {value: ''}})
      expect(button).toHaveClass('hidden')
    })
  })

  test('handleClear method should correct', () => {
    jest.unmock('../SearchInput')
    jest.unmock('../ClearButton')

    jest.isolateModules(async () => {

      const Search = require('../Search').default
      const {getByTestId} = render(<Search/>)

      const input = getByTestId('Search__SearchInput')
      input.value = 'something'

      expect(input).toHaveValue('something')

      fireEvent.click(getByTestId('Search__ClearButton'))

      await waitFor(() => {
        expect(input).toHaveValue('')
        expect(input).toHaveFocus()
      })
    })
  })
})

