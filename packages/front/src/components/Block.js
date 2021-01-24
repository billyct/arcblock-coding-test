import BlockHash from './BlockHash'
import BlockSummary from './BlockSummary'
import BlockTransactions from './BlockTransactions'
import Error from './Error'
import Loading from './Loading'
import useBlock from '../hooks/useBlock'

const Block = () => {

  const {block, error} = useBlock()

  if (error) {
    return <Error>{error.message}</Error>
  }

  if (!block) {
    return <Loading/>
  }

  return (
    <>
      <BlockHash/>
      <BlockSummary/>
      <BlockTransactions/>
    </>
  )
}

export default Block
