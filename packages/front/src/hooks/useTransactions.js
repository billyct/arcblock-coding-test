import useSWR from 'swr'

import {transactionsQuery} from '../queries'
import useBlockRouteParams from './useBlockRouteParams'
import useBlock from './useBlock'

const useTransactions = () => {
  const {block} = useBlock()
  const {page} = useBlockRouteParams()

  const {data, ...rest} = useSWR(() => transactionsQuery(block.hash, page))

  let transactions = undefined
  if (data) {
    transactions = data.block.transactions
  }

  return {
    transactions,
    ...rest,
  }
}

export default useTransactions
