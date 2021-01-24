import Card from './Card'
import Hash from './Hash'
import SummaryItem from './SummaryItem'
import useBlock from '../hooks/useBlock'
import {btcString, formatTime} from '../utils'

const BlockSummary = () => {
  const {block} = useBlock()

  if (!block) {
    return null
  }

  return (
    <Card title='Summary' className='-mx-6 flex'>

      <div className='w-1/3 border-r border-gray-200'>
        <SummaryItem
          title='Height'
          tip='Number of blocks connected on the blockchain'
        >
          {block.height.toLocaleString()}
        </SummaryItem>

        <SummaryItem
          title='Block Size'
          tip='Total size of the block'
        >
          {block.size.toLocaleString()} Bytes
        </SummaryItem>

        <SummaryItem
          title='Weight'
          tip='A measurement to compare the size of different transactions to each other in proportion to the block size limit'
        >
          {block.weight.toLocaleString()} WU
        </SummaryItem>

        <SummaryItem title='Time'>
          {formatTime(block.time)}
        </SummaryItem>

        <SummaryItem
          title='Bits'
          tip='A sub-unit of BTC, equal to 0.000001 BTC'
        >
          {block.bits.toLocaleString()}
        </SummaryItem>
      </div>

      <div className='flex-1'>
        <SummaryItem
          title='Fee Reward'
          tip='Amount of transaction fees rewarded to the miner for calculating the hash for this block'
        >
          {btcString(block.fee)}
        </SummaryItem>

        <SummaryItem
          title='Block Reward'
          tip='Static reward for the miner who calculated the hash for this block'
        >
          {btcString(block.reward)}
        </SummaryItem>

        <SummaryItem
          title='Nonce'
          tip='Random value that can be adjusted to satisfy the proof of work'
        >
          {block.nonce.toLocaleString()}
        </SummaryItem>

        <SummaryItem
          title='Merkle root'
          tip='The root node of a merkle tree, a descendant of all the hashed pairs in the tree'
        >
          <Hash>{block.mrklRoot}</Hash>
        </SummaryItem>

        <SummaryItem
          title='Version'
          tip='Block version related to protocol proposals underway'
        >
        <span>
          {block.version}
          <sub>10</sub>
        </span>

          <span className='ml-2'>
            0x{block.version.toString(16)}
            <sub>16</sub>
          </span>
        </SummaryItem>
      </div>

    </Card>
  )
}

export default BlockSummary
