require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/sprockets/check-answers/group/answer-title')

log('`sprockets` is awake')

// @ts-ignore
module.exports = require('./answer-title.jsx')
