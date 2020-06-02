import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import SummaryKey from './summary-key'
import SummaryValue from './summary-value'
import ChangeAnswer from './change-answer'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function TypeBooleanAnswer ({ booleanAnswer, resource }) {
  log('TypeBooleanAnswer')

  return (
    <dl>
      <SummaryKey summaryAnswer={booleanAnswer} />
      <SummaryValue summaryAnswer={booleanAnswer} />
      <ChangeAnswer
        changeAnswer={booleanAnswer}
        resource={resource}
      />
    </dl>
  )
}

TypeBooleanAnswer.propTypes = {
  booleanAnswer: PropTypes.shape({
    elements: PropTypes.shape()
  }).isRequired,
  resource: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }).isRequired
}
