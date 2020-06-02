import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import renderSummaryValue from './render-summary-value'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function SummaryValue ({ summaryAnswer: { elements } }) {
  log('SummaryValue')

  const summaryValue = renderSummaryValue(elements)

  if (summaryValue) {
    return (
      <dd>
        {summaryValue}
      </dd>
    )
  }

  return null
}

SummaryValue.propTypes = {
  summaryAnswer: PropTypes.shape({
    elements: PropTypes.shape()
  }).isRequired
}
