import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function SummaryValue ({ answer: { value } }) {
  log('SummaryValue')

  return (
    <dd>
      {value}
    </dd>
  )
}

SummaryValue.propTypes = {
  answer: PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired
}
