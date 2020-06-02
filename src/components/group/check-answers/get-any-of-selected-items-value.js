import React from 'react'
import debug from 'debug'

import toSummaryValue from './to-summary-value'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function getAnyOfSelectedItemsValue (items = [], selectedItems = []) {
  log('getAnyOfSelectedItemsValue')

  return (
    selectedItems.reduce((accumulator, selectedItem) => (
      (Reflect.has(items, selectedItem))
        ? accumulator.concat(<p>{toSummaryValue(Reflect.get(items, selectedItem))}</p>)
        : accumulator
    ), '') // || 'Not answered'
  )
}
