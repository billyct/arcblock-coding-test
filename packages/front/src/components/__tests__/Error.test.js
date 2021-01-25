import {render} from '@testing-library/react'

import Error from '../Error'

test('Error Component', () => {
  const {container} = render(
    <Error>
      an error message
    </Error>
  )

  expect(container).toMatchSnapshot()
})
