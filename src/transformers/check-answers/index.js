import debug from 'debug'

const log = debug('shinkansen:sprockets:transformers:check-answer')

export default function transform ({ changeAnswer: { text, href } }, components) {
  log('transform')

  return {
    text,
    href
  }
}
