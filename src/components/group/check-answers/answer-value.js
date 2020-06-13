import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function SummaryValue ({ answer: { value } }) {
  log('SummaryValue')

  if (Array.isArray(value)) {
    const n = value.length - 1

    return (
      <dd>
        {value
          .reduce((a, v, i) => (
            (i !== n) ? a.concat(v).concat(<br key={i} />) : a.concat(v)
          ), [])}
      </dd>
    )
  }

  return (
    <dd>
      {value}
    </dd>
  )
}

SummaryValue.propTypes = {
  answer: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.string
      )
    ]).isRequired
  }).isRequired
}
