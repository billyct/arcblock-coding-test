import {fireEvent, render} from '@testing-library/react'
import SummaryItem from '../SummaryItem'

describe('test SummaryItem Component', () => {
  test('snapshot should correctly', () => {
    const {container} = render(
      <SummaryItem title='a title' tip='a tip'>
        a children
      </SummaryItem>
    )

    expect(container).toMatchSnapshot()
  })

  test(`tip's visibility should correctly`, () => {
    const {getByTestId} = render(
      <SummaryItem title='Hash' tip='a tip'/>
    )

    const title = getByTestId('SummaryItem__title')
    const tip = getByTestId('SummaryItem__tip')

    fireEvent.mouseEnter(title)
    expect(tip).toHaveClass('block')

    fireEvent.mouseLeave(title)
    expect(tip).toHaveClass('hidden')
  })

  test(`tip should hidden when tip is empty`, () => {
    const {getByTestId} = render(
      <SummaryItem title='Hash'/>
    )

    const title = getByTestId('SummaryItem__title')
    const tip = getByTestId('SummaryItem__tip')

    fireEvent.mouseEnter(title)
    expect(tip).not.toHaveClass('block')
  })
})
