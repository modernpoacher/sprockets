import debug from 'debug'

import getEnumSelectedItemsValue from './get-enum-selected-items-value'
import getEnumSelectedItemValue from './get-enum-selected-item-value'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function renderEnumValue ({ items, selectedItems } = {}) {
  log('renderEnumValue')

  if (selectedItems.length < 1) {
    return ''
  } else {
    if (selectedItems.length > 1) {
      return getEnumSelectedItemsValue(items, selectedItems)
    }
  }

  return getEnumSelectedItemValue(items, selectedItems)
}
