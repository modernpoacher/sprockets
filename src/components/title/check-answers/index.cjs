require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/title/check-answers')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
