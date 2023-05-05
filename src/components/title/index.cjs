require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/title')

log('`shinkansen` is awake')

module.exports = require('./index.jsx')
