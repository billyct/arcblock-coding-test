const {Base} = require('./base')

class Input extends Base{

  get __typename() {
    return this.isCoinbaseInput ? 'CoinbaseInput' : 'TransactionInput'
  }

  get isCoinbaseInput() {
    return this.getAttribute('prev_out') === null
  }

  get spent() {
    return this.getAttribute('prev_out.spent')
  }

  get value() {
    return this.getAttribute('prev_out.value', 0).toString()
  }

  get addr() {
    return this.getAttribute('prev_out.addr')
  }
}

module.exports = {
  Input,
}
