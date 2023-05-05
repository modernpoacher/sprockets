require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/group/check-answers/answer-value')

log('`shinkansen` is awake')

module.exports = require('./answer-value.jsx')
