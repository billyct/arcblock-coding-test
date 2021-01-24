import PropTypes from 'prop-types'

import TransactionIO from './TransactionIO'
import CoinbaseInput from './CoinbaseInput'
import OpReturnOutput from './OpReturnOutput'
import Hash from './Hash'
import {ReactComponent as RightIcon} from '../assets/right.svg'
import {btcString, formatTime} from '../utils'

const TransactionItem = ({transaction}) => (
  <div className='w-full leading-loose mb-4'>
    <div className='flex justify-between items-center bg-gray-100 px-6 py-2'>
      <Hash className='text-base flex-1'>{transaction.hash}</Hash>
      <div>Fee: {btcString(transaction.fee)}</div>
    </div>
    <div className='flex text-sm'>
      <div className='flex-1'>
        <div className='flex justify-between pl-6 pr-10 py-4 font-bold border-b border-gray-200'>
          <div>Input ({transaction.inputsCount})</div>
          <div>{btcString(transaction.inputsValueCount)}</div>
        </div>
        <div className='px-6 py-2'>
          {transaction.inputs.map((input, idx) => (
            <div key={`${transaction.hash}_inputs_${idx}`}>
              {
                input.isCoinbaseInput
                  ? <CoinbaseInput/>
                  : <TransactionIO data={input}/>
              }
            </div>
          ))}
        </div>
      </div>
      <div className='w-20 flex flex-col justify-center items-center'>
        <RightIcon
          className='text-blue-500 bg-blue-50 rounded-full p-1 box-content'
          width={20}
          height={20}
        />
      </div>
      <div className='flex-1'>
        <div className='flex justify-between pl-6 pr-10 py-4 font-bold border-b border-gray-200'>
          <div>Output ({transaction.outputsCount})</div>
          <div>{btcString(transaction.outputsValueCount)}</div>
        </div>
        <div className='px-6 py-2'>
        {transaction.outputs.map((output, idx) => (
          <div key={`${transaction.hash}_outputs_${idx}`}>
            {
              output.isOpReturnOutput
                ? <OpReturnOutput/>
                : <TransactionIO data={output}/>
            }
          </div>
        ))}
        </div>
      </div>
    </div>

    <div className='italic text-xs text-gray-500 px-6 py-2'>{formatTime(transaction.time)}</div>
  </div>
)

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
}

export default TransactionItem
