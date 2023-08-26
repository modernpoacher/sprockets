require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets')

log('`sprockets` is awake')

const CheckAnswersSprocket = require('./sprockets/check-answers/index.cjs')
const ErrorSummarySprocket = require('./sprockets/error-summary/index.cjs')
const FieldsetSprocket = require('./sprockets/fieldset/index.cjs')

module.exports.CheckAnswersSprocket = CheckAnswersSprocket
module.exports.ErrorSummarySprocket = ErrorSummarySprocket
module.exports.FieldsetSprocket = FieldsetSprocket
