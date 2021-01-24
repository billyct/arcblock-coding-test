const {request} = require('../request')
const {cache} = require('../cache')

const getBlockWithCache = block => {

  if (cache.has(block)) {
    return Promise.resolve(cache.get(block))
  }

  return getBlock(block)
    .then(data => {
      cache.set(block, data)
      return data
    })
}

const getBlock = block => {
  return new Promise((resolve, reject) => {
    request(`https://blockchain.info/rawblock/${block}`)
      .then(data => resolve(data))
      .catch(e => {
        if (e.statusCode === 500) {
          return reject(Error('Invalid Block Hash'))
        }

        return reject(Error('Server Error'))
      })
  })
}

exports.getBlock = getBlock
exports.getBlockWithCache = getBlockWithCache
