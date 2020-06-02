import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import SummaryKey from './summary-key'
import SummaryValue from './check-answers-group-for-object-summary-value'
import ChangeAnswer from './change-answer'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function CheckAnswersGroupForObject ({ group, resource }) {
  log('CheckAnswersGroupForObject')

  const [
    field
  ] = group

  return (
    <dl>
      <SummaryKey summaryAnswer={field} />
      <SummaryValue group={group} />
      <ChangeAnswer
        changeAnswer={field}
        resource={resource}
      />
    </dl>
  )
}

CheckAnswersGroupForObject.propTypes = {
  group: PropTypes.array,
  resource: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }).isRequired
}
