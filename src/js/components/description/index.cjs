require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/components/description')

log('`sprockets` is awake')

const {
  default: Description
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Description
