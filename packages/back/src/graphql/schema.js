const {buildSchema} = require('graphql')
const fs = require('fs')
const path = require('path')

const schema = buildSchema(
  fs.readFileSync(path.resolve(__dirname, 'schema.graphql')).toString()
)

module.exports = {
  schema,
}
