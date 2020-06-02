import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import renderSummaryKey from './render-summary-key'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function SummaryKey ({ summaryAnswer: { elements } }) {
  log('SummaryKey')

  const summaryKey = renderSummaryKey(elements)

  if (summaryKey) {
    return (
      <dt>
        {summaryKey}
      </dt>
    )
  }

  return null
}

SummaryKey.propTypes = {
  summaryAnswer: PropTypes.shape({
    elements: PropTypes.shape()
  }).isRequired
}
