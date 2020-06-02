import React from 'react'
import debug from 'debug'

import CheckAnswersGroupForObject from './check-answers-group-for-object'
import getCheckAnswersGroupForObjectKey from './get-check-answers-group-for-object-key'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function renderCheckAnswersGroupForObject (index = 0, group, resource) {
  log('renderCheckAnswersGroupForObject')

  return (
    <CheckAnswersGroupForObject
      key={getCheckAnswersGroupForObjectKey(index)}
      group={group}
      resource={resource}
    />
  )
}
