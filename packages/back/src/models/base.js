const get = require('lodash/get')

class Base {
  constructor(data = {}) {
    this.data = data
  }

  getAttribute(key, defaultValue = null) {
    if (typeof this.data === 'object') {
      return get(this.data, key, defaultValue)
    }

    return defaultValue
  }
}

module.exports = {
  Base,
}
