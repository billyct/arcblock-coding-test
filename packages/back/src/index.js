// @warning if you want deploy with BlockLet you should add it!
require('../../../index')

const http = require('http')

const app = require('./app')

const server = http.createServer(app)

server.listen(process.env.BLOCKLET_PORT || process.env.PORT || '4000')

server.on('error', (err) => {
  console.error(`ERROR: ${err.message}`)
})

server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log('Listening on ' + bind)
})
