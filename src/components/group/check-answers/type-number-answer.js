import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import SummaryKey from './summary-key'
import SummaryValue from './summary-value'
import ChangeAnswer from './change-answer'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function TypeNumberAnswer ({ numberAnswer, resource }) {
  log('TypeNumberAnswer')

  return (
    <dl>
      <SummaryKey summaryAnswer={numberAnswer} />
      <SummaryValue summaryAnswer={numberAnswer} />
      <ChangeAnswer
        changeAnswer={numberAnswer}
        resource={resource}
      />
    </dl>
  )
}

TypeNumberAnswer.propTypes = {
  numberAnswer: PropTypes.shape({
    elements: PropTypes.shape()
  }).isRequired,
  resource: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }).isRequired
}
