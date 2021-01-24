const {Base} = require('./base')
const {Transaction} = require('./transaction')

class Block extends Base{

  get hash() {
    return this.getAttribute('hash')
  }

  get height() {
    return this.getAttribute('height')
  }

  get weight() {
    return this.getAttribute('weight')
  }

  get size() {
    return this.getAttribute('size')
  }

  get time() {
    return this.getAttribute('time')
  }

  get bits() {
    return this.getAttribute('bits')
  }

  get fee() {
    return this.getAttribute('fee').toString()
  }

  /**
   * @returns {string}
   */
  get reward() {
    return this.getAttribute('tx.0.out.0.value', '').toString()
  }

  get nonce() {
    return this.getAttribute('nonce')
  }

  get mrklRoot() {
    return this.getAttribute('mrkl_root')
  }

  get version() {
    return this.getAttribute('ver')
  }

  get transactionsCount() {
    return this.getAttribute('n_tx')
  }

  transactions({page = 1}) {
    const perPage = 10

    const start = (page - 1) * perPage
    let end = start + perPage

    const tx = this.getAttribute('tx', [])

    if (start > tx.length) {
      return []
    }

    if (end > tx.length) {
      end = tx.length
    }

    let res = []

    for (let transaction of tx.slice(start, end)) {
      res.push(new Transaction(transaction))
    }

    return res
  }
}

module.exports = {
  Block
}
