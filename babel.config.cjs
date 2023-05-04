const debug = require('debug')

const log = debug('shinkansen-sprockets')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`shinkansen` is awake')

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
      root: [
        '.'
      ],
      alias: {
        'shinkansen-sprockets/sprockets/check-answers': './src/sprockets/check-answers/index.jsx',
        'shinkansen-sprockets/sprockets/error-summary': './src/sprockets/error-summary/index.jsx',
        'shinkansen-sprockets/sprockets/fieldset': './src/sprockets/fieldset/index.jsx',
        'shinkansen-sprockets/sprockets': './src/sprockets/index.jsx',
        'shinkansen-sprockets/components/common/text-content': './src/components/common/text-content/index.jsx',
        'shinkansen-sprockets/components/description/fieldset': './src/components/description/fieldset/index.jsx',
        'shinkansen-sprockets/components/description': './src/components/description/index.jsx',
        'shinkansen-sprockets/components/error-message/fieldset': './src/components/error-message/fieldset/index.jsx',
        'shinkansen-sprockets/components/error-message': './src/components/error-message/index.jsx',
        'shinkansen-sprockets/components/group/check-answers/answer-title': './src/components/group/check-answers/answer-title.jsx',
        'shinkansen-sprockets/components/group/check-answers/answer-value': './src/components/group/check-answers/answer-value.jsx',
        'shinkansen-sprockets/components/group/check-answers/change-answer': './src/components/group/check-answers/change-answer.jsx',
        'shinkansen-sprockets/components/group/check-answers/visually-hidden-text': './src/components/group/check-answers/visually-hidden-text.jsx',
        'shinkansen-sprockets/components/group/check-answers': './src/components/group/check-answers/index.jsx',
        'shinkansen-sprockets/components/group/error-summary': './src/components/group/error-summary/index.jsx',
        'shinkansen-sprockets/components/group/fieldset': './src/components/group/fieldset/index.jsx',
        'shinkansen-sprockets/components/group': './src/components/group/index.jsx',
        'shinkansen-sprockets/components/title/check-answers': './src/components/title/check-answers/index.jsx',
        'shinkansen-sprockets/components/title/error-summary': './src/components/title/error-summary/index.jsx',
        'shinkansen-sprockets/components/title/fieldset': './src/components/title/fieldset/index.jsx',
        'shinkansen-sprockets/components/title': './src/components/title/index.jsx',
        'shinkansen-sprockets/transformers/check-answers': './src/transformers/check-answers/index.mjs',
        'shinkansen-sprockets/transformers/common': './src/transformers/common/index.mjs',
        'shinkansen-sprockets/transformers/error-message': './src/transformers/error-message/index.mjs',
        'shinkansen-sprockets/transformers/error-summary': './src/transformers/error-summary/index.mjs',
        build: './build',
        stories: './stories'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins
  }
}
