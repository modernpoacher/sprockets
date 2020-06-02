import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import SummaryKey from './summary-key'
import SummaryValue from './summary-value'
import ChangeAnswer from './change-answer'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function TypeStringAnswer ({ stringAnswer, resource }) {
  log('TypeStringAnswer')

  return (
    <dl>
      <SummaryKey summaryAnswer={stringAnswer} />
      <SummaryValue summaryAnswer={stringAnswer} />
      <ChangeAnswer
        changeAnswer={stringAnswer}
        resource={resource}
      />
    </dl>
  )
}

TypeStringAnswer.propTypes = {
  stringAnswer: PropTypes.shape({
    elements: PropTypes.shape()
  }).isRequired,
  resource: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }).isRequired
}
