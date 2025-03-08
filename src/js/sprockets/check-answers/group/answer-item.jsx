/**
 *  @typedef {SprocketsTypes.AnswerDefinitionType} AnswerDefinitionType
 */

import React from 'react'
import PropTypes from 'prop-types'

import AnswerTitle from './answer-title.jsx'
import AnswerValue from './answer-value.jsx'
import ChangeAnswer from './change-answer.jsx'

/**
 *
 *  @param {AnswerDefinitionType} props
 *  @returns {React.JSX.Element}
 */
export default function AnswerItem ({ answer: { title, value }, changeAnswer: { href, text, visuallyHiddenText } }) {
  return (
    <div className='answer'>
      <AnswerTitle
        title={title}
      />

      <AnswerValue
        value={value}
      />

      <ChangeAnswer
        href={href}
        text={text}
        visuallyHiddenText={visuallyHiddenText}
      />
    </div>
  )
}

AnswerItem.propTypes = {
  answer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.string
      )
    ]).isRequired
  }),
  changeAnswer: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    visuallyHiddenText: PropTypes.string.isRequired
  })
}
