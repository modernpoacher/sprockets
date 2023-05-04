require('@babel/register')({ configFile: require.resolve('../../../../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/group/check-answers/change-answer')

log('`shinkansen` is awake')

module.exports = require('./change-answer.jsx')
