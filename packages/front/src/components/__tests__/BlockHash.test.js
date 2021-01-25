import {render} from '@testing-library/react'

jest.mock('../../hooks/useBlock')
const useBlock = require('../../hooks/useBlock')

jest.mock('../CopyButton', () => 'copy-button-component')
const BlockHash = require('../BlockHash').default

afterAll(() => {
  jest.resetModules()
})

describe.each([
  [
    {
      block: {hash: 'a3e2bcc9a5f776112497a32b05f4b9e5b2405ed9'},
    }
  ],
  [
    {block: undefined}
  ]
])('test BlockHash Component with useBlock(%o)', data => {
  beforeAll(() => {
    useBlock.__setMockData(data)
  })

  it('should render correct', function () {
    const {container} = render(<BlockHash/>)
    expect(container).toMatchSnapshot()
  })

  if (data.block) {
    test(`BlockHash__span should have text: ${data.block.hash}`, function () {
      const {getByTestId} = render(<BlockHash/>)
      expect(getByTestId('BlockHash__span')).toHaveTextContent(data.block.hash)
    })
  }
})





