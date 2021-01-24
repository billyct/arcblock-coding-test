import PropTypes from 'prop-types'

import TransactionSpent from './TransactionSpent'
import {btcString} from '../utils'
import Hash from './Hash'

const TransactionIO = ({data}) => (
  <div className='flex justify-between py-2'>
    <Hash>{data.addr}</Hash>
    <div className='flex'>
      <div className='mr-2'>{btcString(data.value)}</div>
      <TransactionSpent
        spent={data.spent}
      />
    </div>
  </div>
)

TransactionIO.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TransactionIO
