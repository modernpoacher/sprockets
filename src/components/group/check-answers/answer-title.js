import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function SummaryTitle ({ answer: { title } }) {
  log('SummaryTitle')

  return (
    <dt className='answer-title'>
      {title}
    </dt>
  )
}

SummaryTitle.propTypes = {
  answer: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}
