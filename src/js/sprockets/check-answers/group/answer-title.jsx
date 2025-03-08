import React from 'react'
import PropTypes from 'prop-types'

/**
 *  @param {{ title: string }} props
 *  @returns {React.JSX.Element}
 */
export default function AnswerTitle ({ title }) {
  return (
    <dt className='answer-title'>
      {title}
    </dt>
  )
}

AnswerTitle.propTypes = {
  title: PropTypes.string.isRequired
}
