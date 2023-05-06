require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/error-message/fieldset')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
