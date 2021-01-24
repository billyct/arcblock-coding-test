const https = require('https')

const request = url => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {

      const {statusCode} = res
      if (statusCode !== 200) {
        return reject(res)
      }

      let result = ''

      res.on('data', chunk => result += chunk)
      res.on('error', err => reject(err))
      res.on('end', () => resolve(JSON.parse(result)))
    })
  })
}

module.exports = {
  request,
}
