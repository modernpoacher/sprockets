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
      root: '.',
      cwd: 'babelrc',
      alias: {
        '#sprockets/check-answers': './src/sprockets/check-answers/index.jsx',
        '#sprockets/error-summary': './src/sprockets/error-summary/index.jsx',
        '#sprockets/fieldset': './src/sprockets/fieldset/index.jsx',
        '#sprockets': './src/sprockets/index.jsx',
        '#components/common/text-content': './src/components/common/text-content/index.jsx',
        '#components/description/fieldset': './src/components/description/fieldset/index.jsx',
        '#components/description': './src/components/description/index.jsx',
        '#components/error-message/fieldset': './src/components/error-message/fieldset/index.jsx',
        '#components/error-message': './src/components/error-message/index.jsx',
        '#components/group/check-answers/answer-title': './src/components/group/check-answers/answer-title.jsx',
        '#components/group/check-answers/answer-value': './src/components/group/check-answers/answer-value.jsx',
        '#components/group/check-answers/change-answer': './src/components/group/check-answers/change-answer.jsx',
        '#components/group/check-answers/visually-hidden-text': './src/components/group/check-answers/visually-hidden-text.jsx',
        '#components/group/check-answers': './src/components/group/check-answers/index.jsx',
        '#components/group/error-summary': './src/components/group/error-summary/index.jsx',
        '#components/group/fieldset': './src/components/group/fieldset/index.jsx',
        '#components/group': './src/components/group/index.jsx',
        '#components/title/check-answers': './src/components/title/check-answers/index.jsx',
        '#components/title/error-summary': './src/components/title/error-summary/index.jsx',
        '#components/title/fieldset': './src/components/title/fieldset/index.jsx',
        '#components/title': './src/components/title/index.jsx',
        '#transformers/check-answers': './src/transformers/check-answers/index.mjs',
        '#transformers/common': './src/transformers/common/index.mjs',
        '#transformers/error-message': './src/transformers/error-message/index.mjs',
        '#transformers/error-summary': './src/transformers/error-summary/index.mjs',
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
