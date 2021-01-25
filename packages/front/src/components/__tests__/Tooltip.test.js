import {render} from '@testing-library/react'
import Tooltip from '../Tooltip'

describe('test Tooltip Component', () => {
  test('snapshot should correctly',() => {
    const {container} = render(<Tooltip content={'a content'}/>)
    expect(container).toMatchSnapshot()
  })

  describe.each([
    [false, 'invisible'],
    [true, 'visible'],
  ])('test show attribute case %#', (show, classname) => {
    it(`should have class ${classname}`, function () {
      const {getByTestId} = render(<Tooltip content={''} show={show}/>)
      expect(getByTestId('Tooltip__tooltip')).toHaveClass(classname)
    })
  })
})
