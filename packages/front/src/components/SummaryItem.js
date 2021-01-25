import {useState} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const SummaryItem = ({title, tip, children}) => {

  const [show, setShow] = useState(false)

  return (
    <div className='flex justify-between items-start text-sm leading-loose px-6 py-2 hover:bg-gray-200'>

      <div
        data-testid='SummaryItem__title'
        className='text-gray-600 w-24 flex-shrink-0 relative'
        onMouseEnter={() => setShow(!!tip)}
        onMouseLeave={() => setShow(false)}
      >
        <span>
          {title}
        </span>

        <div
          data-testid='SummaryItem__tip'
          className={cn('px-2 py-1 bg-black rounded text-white left-0 absolute whitespace-nowrap z-10', {
            'hidden': !show,
            'block': show,
          })}
        >
          {tip}
        </div>
      </div>
      <div className='break-all'>{children}</div>
    </div>
  )
}

SummaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  tip: PropTypes.string,
}

SummaryItem.defaultProps = {
  tip: '',
}

export default SummaryItem
