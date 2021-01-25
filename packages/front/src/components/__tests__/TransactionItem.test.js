import {render} from '@testing-library/react'

jest.mock('../TransactionIO', () => 'transaction-io-component')
jest.mock('../CoinbaseInput', () => 'coinbase-input-component')
jest.mock('../OpReturnOutput', () => 'op-return-output-component')
jest.mock('../Hash', () => 'hash-component')

const TransactionItem = require('../TransactionItem').default

afterAll(() => {
  jest.resetModules()
})

describe.each([
  [
    {
      fee: "0",
      hash: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      inputs: [{isCoinbaseInput: true}],
      inputsCount: 1,
      inputsValueCount: "0",
      outputs: [{addr: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", value: "5000000000", spent: false}],
      outputsCount: 1,
      outputsValueCount: "5000000000",
      time: 1231006505,
    }
  ],
  [
    {
      "hash": "9eb415caf7924327507aae440be9b47ea24acdb5c3e8a2d1cbe04430bab2f396",
      "time": 1611217482,
      "inputs": [
        {
          "addr": "19wyxrJWhDsDtkGMBxe3JGJ75rkrx9kKFf",
          "value": "546",
          "spent": true
        },
        {
          "addr": "1WnotWnmDHfihogsjgWS1uzCGbhUeSNZ4",
          "value": "80270672",
          "spent": true
        }
      ],
      "outputsCount": 3,
      "outputsValueCount": "80142458",
      "outputs": [
        {
          "addr": "1WnotWnmDHfihogsjgWS1uzCGbhUeSNZ4",
          "value": "80141912",
          "spent": true
        },
        {
          "isOpReturnOutput": true
        },
        {
          "addr": "1WnotWnmDHfihogsjgWS1uzCGbhUeSNZ4",
          "value": "546",
          "spent": false
        }
      ]
    }
  ],
])('test TransactionItem Component case %#', transaction => {
  it('should render correct', function () {
    const {container} = render(<TransactionItem transaction={transaction}/>)
    expect(container).toMatchSnapshot()
  })
})

