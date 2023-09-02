require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/sprockets/check-answers/group/visually-hidden-text')

log('`sprockets` is awake')

module.exports = require('./visually-hidden-text.jsx')
