import debug from 'debug'

import toSummaryValue from './to-summary-value'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function getOneOfSelectedItemValue (items = [], [selectedItem] = []) {
  log('getOneOfSelectedItemValue')

  return (Reflect.has(items, selectedItem))
    ? toSummaryValue(Reflect.get(items, selectedItem)) // || 'Not answered'
    : '' // 'Not answered'
}
