require('@babel/register')({ configFile: require.resolve('../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-sprockets')

log('`shinkansen` is awake')

const { default: CheckAnswersSprocket } = require('./sprockets/check-answers')
const { default: ErrorSummarySprocket } = require('./sprockets/error-summary')
const { default: FieldsetSprocket } = require('./sprockets/fieldset')

module.exports.CheckAnswersSprocket = CheckAnswersSprocket
module.exports.ErrorSummarySprocket = ErrorSummarySprocket
module.exports.FieldsetSprocket = FieldsetSprocket
