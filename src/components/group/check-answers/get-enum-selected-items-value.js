import React from 'react'
import debug from 'debug'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function getEnumSelectedItemsValue (items = [], selectedItems = []) {
  log('getEnumSelectedItemsValue')

  return (
    selectedItems.reduce((accumulator, selectedItem) => (
      (Reflect.has(items, selectedItem))
        ? accumulator.concat(<p>{Reflect.get(items, selectedItem)}</p>)
        : accumulator
    ), '') // || 'Not answered'
  )
}
