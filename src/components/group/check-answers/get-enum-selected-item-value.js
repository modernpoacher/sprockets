import debug from 'debug'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function getEnumSelectedItemValue (items = [], [selectedItem] = []) {
  log('getEnumSelectedItemValue')

  return (
    Reflect.has(items, selectedItem)
      ? String(Reflect.get(items, selectedItem))
      : '' // 'Not answered'
  )
}
