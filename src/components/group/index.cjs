require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/group')

log('`shinkansen` is awake')

module.exports = require('./index.jsx')
