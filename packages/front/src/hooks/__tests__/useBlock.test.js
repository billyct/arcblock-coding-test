import {blockQuery} from '../../queries'

jest.mock('../useBlockRouteParams')
const useBlockRouteParams = require('../useBlockRouteParams')

afterAll(() => {
  jest.resetModules()
})

test('useBlock function', () => {
  const mockFn = jest.fn(() => ({
    data: undefined
  }))

  jest.mock('swr', () => mockFn)

  const useBlock = require('../useBlock').default

  useBlockRouteParams.__setMockData({hash: 'a_hash'})

  useBlock()

  expect(mockFn).toBeCalled()
  expect(mockFn).toBeCalledWith(blockQuery('a_hash'))
})
