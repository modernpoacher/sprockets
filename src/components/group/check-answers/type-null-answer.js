import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import SummaryKey from './summary-key'
import SummaryValue from './summary-value'
import ChangeAnswer from './change-answer'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function TypeNullAnswer ({ nullAnswer, resource }) {
  log('TypeNullAnswer')

  return (
    <dl>
      <SummaryKey summaryAnswer={nullAnswer} />
      <SummaryValue summaryAnswer={nullAnswer} />
      <ChangeAnswer
        changeAnswer={nullAnswer}
        resource={resource}
      />
    </dl>
  )
}

TypeNullAnswer.propTypes = {
  nullAnswer: PropTypes.shape({
    elements: PropTypes.shape()
  }).isRequired,
  resource: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }).isRequired
}
