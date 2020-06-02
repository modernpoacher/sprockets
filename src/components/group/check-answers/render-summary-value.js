import debug from 'debug'

import hasEnum from './has-enum'
import getEnum from './get-enum'
import hasOneOf from './has-one-of'
import getOneOf from './get-one-of'
import hasAnyOf from './has-any-of'
import getAnyOf from './get-any-of'
import hasField from './has-field'
import getField from './get-field'

import renderEnumValue from './render-enum-value'
import renderAnyOfValue from './render-any-of-value'
import renderOneOfValue from './render-one-of-value'
import renderFieldValue from './render-field-value'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function renderSummaryValue (elements) {
  log('renderSummaryValue')

  if (hasEnum(elements)) {
    const field = getEnum(elements)

    return renderEnumValue(field)
  } else {
    if (hasAnyOf(elements)) {
      const field = getAnyOf(elements)

      return renderAnyOfValue(field)
    } else {
      if (hasOneOf(elements)) {
        const field = getOneOf(elements)

        return renderOneOfValue(field)
      } else {
        if (hasField(elements)) {
          const field = getField(elements)

          return renderFieldValue(field)
        }
      }
    }
  }

  return null
}
