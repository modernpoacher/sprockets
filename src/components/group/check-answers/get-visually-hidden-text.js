import debug from 'debug'

import hasTitle from './has-title'
import getTitle from './get-title'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default ({ elements } = {}) => {
  log('getVisuallyHiddenText')

  if (hasTitle(elements)) {
    return getTitle(elements).toLowerCase()
  }

  return ''
}
