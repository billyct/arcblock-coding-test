import {createRef} from 'react'
import {render} from '@testing-library/react'

import SearchInput from '../SearchInput'

describe('test SearchInput Component', () => {
  it('should render correct', function () {
    const {container} = render(<SearchInput/>)
    expect(container).toMatchSnapshot()
  })

  it('should ref with the input', function () {
    let ref = createRef()
    const {getByRole} = render(<SearchInput ref={ref}/>)
    expect(ref.current).toEqual(getByRole('textbox'))
  })
})

