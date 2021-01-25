import {render} from '@testing-library/react'

import Card from '../Card'

describe.each([
  [
    {
    title: 'title',
    className: 'classname',
    children: 'children',
    }
  ],
  [
    {title: 'title'}
  ],
])('test Card Component with %o', attribute => {
  it('should render correct', function () {
    const {container} = render(<Card {...attribute}/>)
    expect(container).toMatchSnapshot()
  })
})

