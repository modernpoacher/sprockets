require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/description')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
