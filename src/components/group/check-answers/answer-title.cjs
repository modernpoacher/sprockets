require('@babel/register')({ configFile: require.resolve('../../../../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/group/check-answers/answer-title')

log('`shinkansen` is awake')

module.exports = require('./answer-title.jsx')
