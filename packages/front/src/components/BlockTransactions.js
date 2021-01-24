import Card from './Card'
import TransactionItem from './TransactionItem'
import useBlock from '../hooks/useBlock'

const BlockTransactions = () => {
  const {block} = useBlock()

  if (!block) {
    return null
  }

  return (
    <Card
      title={`Transactions (${block.transactionsCount})`}
      className='-mx-6'
    >
      {block.transactions.map(transaction => (
        <TransactionItem
          key={`transactions_${transaction.hash}`}
          transaction={transaction}
        />
      ))}
    </Card>
  )
}

export default BlockTransactions
