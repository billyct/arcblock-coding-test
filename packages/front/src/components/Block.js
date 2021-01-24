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

  // const {loading, error, data} = useQuery(`
  // getBlock(hash: $hash) {
  //   hash
  //
  // }
  // `)

}

export default Block
