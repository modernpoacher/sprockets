require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/sprockets')

log('`sprockets` is awake')

/**
 *  Has only default export
 */
const {
  default: component
} = require('./index.jsx')

module.exports = component
