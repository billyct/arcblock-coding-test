const {Base} = require('./base')

class Output extends Base {

  get __typename() {
    return this.isOpReturnOutput ? 'OpReturnOutput' : 'TransactionOutput'
  }

  get isOpReturnOutput() {
    return this.addr === null || this.addr === 'null'
  }

  get spent() {
    return this.getAttribute('spent')
  }

  get value() {
    return this.getAttribute('value', 0).toString()
  }

  get addr() {
    return this.getAttribute('addr')
  }
}

module.exports = {
  Output,
}
