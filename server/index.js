
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')
const pe = require('parse-error')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const v1 = require('./routes/v1')

// Initialize express
const app = express()

// Apps config placed here will make env later connection and etc
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// setup logger and body parser
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('port', port)
// Settings backend routes
app.use('/api/v1', v1)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // code splitting later guys haha for now i just want
  // to see my database connected connected
  const models = require('./models')

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

process.on('unhandledRejection', error => {
  consola.fatal('Uncaught Error', pe(error))
})
