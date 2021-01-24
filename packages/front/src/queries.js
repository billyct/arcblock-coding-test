export const blockQuery = (hash, txPage = 1) => `
{
  block(hash: ${JSON.stringify(hash)}) {
    hash
    height
    size
    weight
    time
    bits
    fee
    reward
    nonce
    mrklRoot
    version
    transactionsCount
    transactions(page: ${txPage}) {
      hash
      time
      fee
      inputsCount
      inputsValueCount
      inputs {
        ... on TransactionInput {
          addr
          value
          spent
        }
        
        ... on CoinbaseInput {
          isCoinbaseInput
        }
      }
      outputsCount
      outputsValueCount
      outputs {
        ... on TransactionOutput {
          addr
          value
          spent
        }
        
        ... on OpReturnOutput {
          isOpReturnOutput
        }
      }
    }
  }
}
`

// export const txQuery = ()
