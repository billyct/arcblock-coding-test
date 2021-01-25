import {render} from '@testing-library/react'

import Hash from '../Hash'

test('Hash Component', () => {
  const {container} = render(<Hash>29d6a3540acfa0a950bef2bfdc75cd51c24390fd</Hash>)
  expect(container).toMatchSnapshot()
})
