require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/sprockets/check-answers/group')

log('`sprockets` is awake')

const {
  default: Group
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Group
