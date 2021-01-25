import {render} from '@testing-library/react'

import OpReturnOutput from '../OpReturnOutput'

test('OpReturnOutput Component', () => {
  const {container} = render(<OpReturnOutput/>)
  expect(container).toMatchSnapshot()
})
