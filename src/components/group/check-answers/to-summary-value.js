import debug from 'debug'

import getValue from './get-value'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function toSummaryValue ({ elements } = {}) {
  log('toSummaryValue')

  const {
    title: value = getValue(elements)
  } = elements

  return value
}
