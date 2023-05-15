require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/group/check-answers/change-answer')

log('`shinkansen` is awake')

module.exports = require('./change-answer.jsx')
