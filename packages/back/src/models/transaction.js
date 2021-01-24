const sumBy = require('lodash/sumBy')

const {Base} = require('./base')
const {Input} = require('./input')
const {Output} = require('./output')

class Transaction extends Base {

  get hash() {
    return this.getAttribute('hash')
  }

  get time() {
    return this.getAttribute('time')
  }

  get fee() {
    return this.getAttribute('fee').toString()
  }

  get inputsCount() {
    return this.inputs.length
  }

  get inputsValueCount() {
    return sumBy(this.inputs, i => parseFloat(i.value)).toString()
  }

  get inputs() {
    let res = []

    for (let input of this.getAttribute('inputs', [])) {
      res.push(new Input(input))
    }

    return res
  }

  get outputsCount() {
    return this.outputs.length
  }

  get outputsValueCount() {
    return sumBy(this.outputs, i => parseFloat(i.value)).toString()
  }

  get outputs() {
    let res = []

    for (let output of this.getAttribute('out', [])) {
      res.push(new Output(output))
    }

    return res
  }
}

module.exports = {
  Transaction,
}
