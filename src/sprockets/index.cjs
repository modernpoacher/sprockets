require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets')

log('`shinkansen` is awake')

/**
 *  Has only default export
 */
const {
  default: component
} = require('./index.jsx')

module.exports = component
