const LRU = require('lru-cache')
const fs = require('fs')
const path = require('path')

const CACHE_FILE = Symbol('cacheFile')

class FileCache extends LRU {

  constructor(options) {
    super(options)

    this[CACHE_FILE] = path.resolve(__dirname, '.cache')

    if (fs.existsSync(this[CACHE_FILE])) {
      const data = fs.readFileSync(this[CACHE_FILE])
      this.load(JSON.parse(data.toString()))
    }
  }

  get cacheFile() {
    return this[CACHE_FILE]
  }

  set(key, value, maxAge) {
    const res = super.set(key, value, maxAge)
    fs.writeFileSync(this[CACHE_FILE], JSON.stringify(this.dump()))
    return res
  }

  reset() {
    super.reset()
    if (this[CACHE_FILE] && fs.existsSync(this[CACHE_FILE])) {
      fs.unlinkSync(this[CACHE_FILE])
    }
  }
}

const cache = new FileCache(100)

module.exports = {
  cache,
  FileCache,
}
