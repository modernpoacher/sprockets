require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/group/error-summary')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
