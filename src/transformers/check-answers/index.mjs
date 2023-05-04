import debug from 'debug'

const log = debug('shinkansen-sprockets/transformers/check-answers')

log('`shinkansen` is awake')

export default function transform ({ changeAnswer: { text, href } }, components) {
  log('transform')

  return {
    text,
    href
  }
}
