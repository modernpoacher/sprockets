import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

import VisuallyHiddenText from './visually-hidden-text'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function ChangeAnswer ({ changeAnswer: { href, text, visuallyHiddenText } }) {
  log('ChangeAnswer')

  return (
    <dd>
      <a href={href}>
        <TextContent textContent={text} />
        {String.fromCharCode(32)}
        <VisuallyHiddenText visuallyHiddenText={visuallyHiddenText} />
      </a>
    </dd>
  )
}

ChangeAnswer.propTypes = {
  changeAnswer: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    visuallyHiddenText: PropTypes.string.isRequired
  }).isRequired
}
