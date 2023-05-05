require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/title/check-answers')

log('`shinkansen` is awake')

module.exports = require('./index.jsx')
