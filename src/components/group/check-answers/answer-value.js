import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('shinkansen-sprockets:components:group:check-answers')

function getAnswerValue (value) {
  if (Array.isArray(value)) {
    const n = value.length - 1

    return (
      value
        .reduce((a, v, i) => {
          const s = String(v)

          return (i !== n)
            ? a.concat(s).concat(<br key={i} />)
            : a.concat(s)
        }, [])
    )
  }

  return String(value)
}

export default function SummaryValue ({ answer: { value } }) {
  log('SummaryValue')

  return (
    <dd className='answer-value'>
      {getAnswerValue(value)}
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
