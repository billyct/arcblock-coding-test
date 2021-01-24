const express = require('express')
const path = require('path')
const {graphqlHTTP} = require('express-graphql')

const {schema} = require('./graphql/schema')
const {resolvers} = require('./graphql/resolvers')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}))

const isProduction = process.env.NODE_ENV === 'production'
if (isProduction) {
  const buildPath = path.resolve(__dirname, '../../front/build')
  const indexHtml = path.join(buildPath, 'index.html')

  app.use(express.static(buildPath))
  app.get('*', (req, res) => res.sendFile(indexHtml))
}

module.exports = app

