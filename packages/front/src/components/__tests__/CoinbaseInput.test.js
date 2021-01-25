import {render} from '@testing-library/react'

import CoinbaseInput from '../CoinbaseInput'

test('CoinbaseInput Component', () => {
  const {container} = render(<CoinbaseInput/>)
  expect(container).toMatchSnapshot()
})
