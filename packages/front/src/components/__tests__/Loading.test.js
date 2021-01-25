import {render} from '@testing-library/react'

import Loading from '../Loading'

test('Loading Component', () => {
  const {container} = render(<Loading/>)
  expect(container).toMatchSnapshot()
})
