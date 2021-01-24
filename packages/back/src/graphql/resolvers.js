const {getBlockWithCache} = require('../models/database')
const {Block} = require('../models/block')

const resolvers = {
  block: async ({hash}) => {
    const data = await getBlockWithCache(hash)
    return new Block(data)
  },
}

module.exports = {
  resolvers,
}
