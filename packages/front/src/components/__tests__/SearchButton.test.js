import {render} from '@testing-library/react'

import SearchButton from '../SearchButton'

test('SearchButton Component', () => {
  const {container} = render(<SearchButton/>)
  expect(container).toMatchSnapshot()
})
