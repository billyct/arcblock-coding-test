import {render} from '@testing-library/react'

jest.mock('../../components/Search', () => 'search-component')

afterAll(() => {
  jest.resetModules()
})

test('IndexPage Component', () => {
  const IndexPage = require('../index').default
  const {container} = render(<IndexPage/>)
  expect(container).toMatchSnapshot()
})
