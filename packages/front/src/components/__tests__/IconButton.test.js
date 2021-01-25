import {render} from '@testing-library/react'

import IconButton from '../IconButton'

describe.each([
  [
    {
      icon: 'icon',
      iconPlacement: 'left',
      children: 'button'
    },
    'iconbutton',
  ],

  [
    {
      icon: 'icon',
      children: 'button'
    },
    'buttonicon',
  ],
])('test IconButton Component with %o', (attribute, textContent) => {
  it(`should haveTextContent(${textContent})`, function () {
    const {container} = render(<IconButton {...attribute}/>)
    expect(container).toHaveTextContent(textContent)
  })

  it('should render correct', function () {
    const {container} = render(<IconButton {...attribute}/>)
    expect(container).toMatchSnapshot()
  })
})
