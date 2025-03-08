require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/components/common/text-content')

log('`sprockets` is awake')

const {
  default: TextContent
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = TextContent
