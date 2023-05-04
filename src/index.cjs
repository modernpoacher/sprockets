require('@babel/register')({ ignore: [/node_modules/], configFile: require.resolve('../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-sprockets')

log('`shinkansen` is awake')

const { default: CheckAnswersSprocket } = require('./sprockets/check-answers/index.cjs')
const { default: ErrorSummarySprocket } = require('./sprockets/error-summary/index.cjs')
const { default: FieldsetSprocket } = require('./sprockets/fieldset/index.cjs')

module.exports.CheckAnswersSprocket = CheckAnswersSprocket
module.exports.ErrorSummarySprocket = ErrorSummarySprocket
module.exports.FieldsetSprocket = FieldsetSprocket
