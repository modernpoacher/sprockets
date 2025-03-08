require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/sprockets/check-answers/group/answer-item')

log('`sprockets` is awake')

module.exports = require('./answer-item.jsx')
