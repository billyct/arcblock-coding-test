jest.mock('wouter')
const wouter = require('wouter')

afterAll(() => {
  jest.resetModules()
})

test('useBlockRouteParams function', () => {
  const mockFn = jest.fn(() => ([
    jest.fn(), {},
  ]))
  wouter.__mockUseRoute(mockFn)

  const useBlockRouteParams = require('../useBlockRouteParams').default

  useBlockRouteParams()

  expect(mockFn).toBeCalled()
  expect(mockFn).toBeCalledWith('/block/:hash/tx/page/:page')
})
