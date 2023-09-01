import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('@modernpoacher/sprockets/components/group/check-answers')

/**
 * @param {SprocketsTypes.AnswerDefinitionType}
 * @returns {React.JSX.Element}
 */
export default function AnswerTitle ({ title }) {
  log('AnswerTitle')

  return (
    <dt className='answer-title'>
      {title}
    </dt>
  )
}

AnswerTitle.propTypes = {
  title: PropTypes.string.isRequired
}
