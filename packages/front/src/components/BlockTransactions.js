import Card from './Card'
import TransactionItem from './TransactionItem'
import Loading from './Loading'
import Paginate from './Paginate'
import useBlock from '../hooks/useBlock'
import useTransactions from '../hooks/useTransactions'

const BlockTransactions = () => {
  const {block} = useBlock()
  const {transactions} = useTransactions()

  if (!block) {
    return null
  }

  return (
    <Card
      title={`Transactions (${block.transactionsCount})`}
      className='-mx-6'
    >
      {
        transactions
        ? (
            transactions.map(transaction => (
              <TransactionItem
                key={`transactions_${transaction.hash}`}
                transaction={transaction}
              />
            ))
          )
        : <Loading/>
      }

      <Paginate/>
    </Card>
  )
}

export default BlockTransactions
