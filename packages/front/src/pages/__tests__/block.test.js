import {render} from '@testing-library/react'

jest.mock('../../hooks/useBlockRouteParams')
const useBlockRouteParams = require('../../hooks/useBlockRouteParams')

jest.mock('../../components/Block', () => 'block-component')
jest.mock('../../components/Search', () => 'search-component')

afterAll(() => {
  jest.resetModules()
})

test('BlockPage Component', () => {
  useBlockRouteParams.__setMockData({})

  const BlockPage = require('../block').default
  const {container} = render(<BlockPage/>)
  expect(container).toMatchSnapshot()
})
