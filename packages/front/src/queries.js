export const blockQuery = (hash) => `
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
  }
}
`

export const transactionsQuery = (hash, page) => `
{
  block(hash: ${JSON.stringify(hash)}) {
    transactions(page: ${page}) {
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
