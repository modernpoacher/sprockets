require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/sprockets/error-summary')

log('`sprockets` is awake')

const {
  default: ErrorSummary
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = ErrorSummary
