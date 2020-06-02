import debug from 'debug'

import hasTitle from './has-title'
import getTitle from './get-title'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function renderSummaryKey (elements) {
  log('renderSummaryKey')

  if (hasTitle(elements)) {
    return getTitle(elements)
  }

  return null
}
