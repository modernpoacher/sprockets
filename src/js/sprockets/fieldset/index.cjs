require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/sprockets/fieldset')

log('`sprockets` is awake')

const {
  default: Fieldset
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Fieldset
