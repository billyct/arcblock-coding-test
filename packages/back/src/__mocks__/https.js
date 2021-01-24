const {Readable} = require('stream')
const https = jest.createMockFromModule('https')

let mockUrls = Object.create(null)

https.__setMockUrls = (urls) => {
  mockUrls = urls
}

https.get = (url, cb) => {
  const data = mockUrls[url]

  let stream = Readable.from('')
  stream.statusCode = 200

  if (data.statusCode) {
    stream.statusCode = data.statusCode
  }

  if (typeof data === 'string') {
    stream.push(data)
  }

  if (data instanceof Error) {
    stream.emit('error', data)
  }

  cb(stream)
}

module.exports = https
