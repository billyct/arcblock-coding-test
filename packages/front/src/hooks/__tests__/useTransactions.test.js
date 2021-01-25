jest.mock('../useBlockRouteParams')
jest.mock('../useBlock')

afterAll(() => {
  jest.resetModules()
})

test('useTransactions function', () => {
  const mockFn = jest.fn(() => ({
    data: undefined
  }))

  jest.mock('swr', () => mockFn)

  const useTransactions = require('../useTransactions').default

  useTransactions()

  expect(mockFn).toBeCalled()
})
