require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/sprockets/check-answers')

log('`sprockets` is awake')

const {
  default: CheckAnswers
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = CheckAnswers
