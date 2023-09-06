const debug = require('debug')

const log = debug('@modernpoacher/sprockets')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`sprockets` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: 'current',
        browsers: [
          'last 4 versions',
          'safari >= 9',
          'ios >= 8',
          'ie >= 9',
          '> 2%'
        ]
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ],
  '@babel/react'
]

const plugins = [
  '@babel/syntax-jsx',
  '@babel/proposal-export-default-from',
  '@babel/proposal-export-namespace-from',
  [
    '@babel/proposal-class-properties',
    {
      loose: false
    }
  ],
  [
    'module-resolver', {
      alias: {
        /**
         *  Storybook
         */
        '@modernpoacher/sprockets/sprockets/check-answers/group/answer-item': './src/sprockets/check-answers/group/answer-item.jsx',
        '@modernpoacher/sprockets/sprockets/check-answers/group/answer-title': './src/sprockets/check-answers/group/answer-title.jsx',
        '@modernpoacher/sprockets/sprockets/check-answers/group/answer-value': './src/sprockets/check-answers/group/answer-value.jsx',
        '@modernpoacher/sprockets/sprockets/check-answers/group/change-answer': './src/sprockets/check-answers/group/change-answer.jsx',
        '@modernpoacher/sprockets/sprockets/check-answers/group/visually-hidden-text': './src/sprockets/check-answers/group/visually-hidden-text.jsx',
        '@modernpoacher/sprockets/sprockets/check-answers/group': './src/sprockets/check-answers/group/index.jsx',
        '@modernpoacher/sprockets/sprockets/check-answers/title': './src/sprockets/check-answers/title/index.jsx',
        '@modernpoacher/sprockets/sprockets/check-answers': './src/sprockets/check-answers/index.jsx',
        '@modernpoacher/sprockets/sprockets/error-summary/group/error-item': './src/sprockets/error-summary/group/error-item.jsx',
        '@modernpoacher/sprockets/sprockets/error-summary/group': './src/sprockets/error-summary/group/index.jsx',
        '@modernpoacher/sprockets/sprockets/error-summary/title': './src/sprockets/error-summary/title/index.jsx',
        '@modernpoacher/sprockets/sprockets/error-summary': './src/sprockets/error-summary/index.jsx',
        '@modernpoacher/sprockets/sprockets/fieldset/description': './src/sprockets/fieldset/description/index.jsx',
        '@modernpoacher/sprockets/sprockets/fieldset/error-message': './src/sprockets/fieldset/error-message/index.jsx',
        '@modernpoacher/sprockets/sprockets/fieldset/group': './src/sprockets/fieldset/group/index.jsx',
        '@modernpoacher/sprockets/sprockets/fieldset/title': './src/sprockets/fieldset/title/index.jsx',
        '@modernpoacher/sprockets/sprockets/fieldset': './src/sprockets/fieldset/index.jsx',
        '@modernpoacher/sprockets/sprockets': './src/sprockets/index.jsx',
        '@modernpoacher/sprockets/components/common/text-content': './src/components/common/text-content/index.jsx',
        '@modernpoacher/sprockets/components/description': './src/components/description/index.jsx',
        '@modernpoacher/sprockets/components/error-message': './src/components/error-message/index.jsx',
        '@modernpoacher/sprockets/components/title': './src/components/title/index.jsx',
        '@modernpoacher/sprockets/components/group': './src/components/group/index.jsx',
        '#stories': './stories'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins,
    ignore: [
      /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets)/
    ]
  }
}
