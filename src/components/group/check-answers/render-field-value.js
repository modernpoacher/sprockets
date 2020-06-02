import debug from 'debug'

import hasValue from './has-value'
import getValue from './get-value'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function renderFieldValue (field = {}) {
  log('renderFieldValue')

  return (
    hasValue(field)
      ? getValue(field)
      : ''
  )
}
