import {useState} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Tooltip from './Tooltip'

const TransactionSpent = ({spent}) => {
  const [show, setShow] = useState(false)

  return (
    <Tooltip
      data-testid='TransactionSpent__tooltip'
      show={show}
      content={spent? 'Spent': 'Unspent'}
    >
      <div
        data-testid='TransactionSpent__div'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={cn('w-2 h-2 rounded-full', {
          'bg-green-500': spent,
          'bg-red-500': !spent,
        })}
      />
    </Tooltip>
  )
}

TransactionSpent.propTypes = {
  spent: PropTypes.bool,
}

TransactionSpent.defaultProps = {
  spent: false,
}

export default TransactionSpent
