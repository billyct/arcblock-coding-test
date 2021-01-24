import Card from './Card'
import CopyButton from './CopyButton'
import useBlock from '../hooks/useBlock'

const BlockHash = () => {

  const {block} = useBlock()

  if (!block) {
    return null
  }

  return (
    <Card title='Block Hash'>
      <div className='flex items-center'>
        <span className='text-sm mr-2 break-all' data-testid='BlockHash__span'>{block.hash}</span>
        <CopyButton text={block.hash}/>
      </div>
    </Card>
  )
}

export default BlockHash
