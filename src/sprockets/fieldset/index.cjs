require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/fieldset')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
