import {render} from '@testing-library/react'

import ClearButton from '../ClearButton'

describe.each([
  [
    {}
  ],
  [
    {className: 'a_classname'}
  ]
])('ClearButton Component with %o', attribute => {
  it('should render correct', function () {
    const {container} =render(<ClearButton {...attribute}/>)
    expect(container).toMatchSnapshot()
  })
})
