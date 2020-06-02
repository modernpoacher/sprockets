import debug from 'debug'

import getOneOfSelectedItemsValue from './get-one-of-selected-items-value'
import getOneOfSelectedItemValue from './get-one-of-selected-item-value'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function renderOneOfValue ({ items, selectedItems } = {}) {
  log('renderOneOfValue')

  if (selectedItems.length < 1) {
    return ''
  } else {
    if (selectedItems.length > 1) {
      return getOneOfSelectedItemsValue(items, selectedItems)
    }
  }

  return getOneOfSelectedItemValue(items, selectedItems)
}
