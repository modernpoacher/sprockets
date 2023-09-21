import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import TextContent from '@modernpoacher/sprockets/components/common/text-content'
import VisuallyHiddenText from '@modernpoacher/sprockets/components/common/visually-hidden-text'

/**
 * @param {SprocketsTypes.AnswerDefinitionType}
 * @returns {React.JSX.Element}
 */
export default function ChangeAnswer ({ href, text, visuallyHiddenText }) {
  return (
    <dd className='change-answer'>
      <Link to={href}>
        <TextContent textContent={text} />
        {String.fromCharCode(32)}
        <VisuallyHiddenText visuallyHiddenText={visuallyHiddenText} />
      </Link>
    </dd>
  )
}

ChangeAnswer.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  visuallyHiddenText: PropTypes.string.isRequired
}
