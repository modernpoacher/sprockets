import React from 'react'
import debug from 'debug'

import CheckAnswersGroupForArray from './check-answers-group-for-array'
import getCheckAnswersGroupForArrayKey from './get-check-answers-group-for-array-key'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function renderCheckAnswersGroupForArray (index = 0, group, resource) {
  log('renderCheckAnswersGroupForArray')

  return (
    <CheckAnswersGroupForArray
      key={getCheckAnswersGroupForArrayKey(index)}
      group={group}
      resource={resource}
    />
  )
}
