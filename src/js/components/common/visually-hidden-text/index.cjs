require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/components/common/visually-hidden-text')

log('`sprockets` is awake')

const {
  default: VisuallyHiddenText
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = VisuallyHiddenText
