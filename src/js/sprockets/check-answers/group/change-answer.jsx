import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  Link
} from 'react-router'

import TextContent from '#sprockets/components/common/text-content'

import VisuallyHiddenText from '#sprockets/components/common/visually-hidden-text'

const log = debug('@modernpoacher/sprockets/sprockets/check-answers/group/change-answer')

/**
 *  @param {{ textContent?: string, visuallyHiddenText: string }} props
 *  @returns {React.JSX.Element | null}
 */
function TextContentWithVisuallyHiddenText ({ textContent, visuallyHiddenText }) {
  return (
    <>
      <TextContent textContent={textContent} />
      {String.fromCharCode(32)}
      <VisuallyHiddenText visuallyHiddenText={visuallyHiddenText.toLowerCase()} />
    </>
  )
}

TextContentWithVisuallyHiddenText.propTypes = {
  textContent: PropTypes.string,
  visuallyHiddenText: PropTypes.string
}

/**
 *  @param {{ textContent?: string, visuallyHiddenText?: string }} props
 *  @returns {React.JSX.Element | null}
 */
function LinkText ({ textContent, visuallyHiddenText }) {
  if (textContent) {
    return (
      visuallyHiddenText
        ? <TextContentWithVisuallyHiddenText textContent={textContent} visuallyHiddenText={visuallyHiddenText} />
        : <TextContent textContent={textContent} />
    )
  }

  return null
}

LinkText.propTypes = {
  textContent: PropTypes.string,
  visuallyHiddenText: PropTypes.string
}

/**
 *  @param {{ href: string, text: string, visuallyHiddenText?: string }} props
 *  @returns {React.JSX.Element}
 */
export default function ChangeAnswer ({ href, text, visuallyHiddenText }) {
  log('ChangeAnswer')

  return (
    <dd className='change-answer'>
      <Link to={href}>
        <LinkText textContent={text} visuallyHiddenText={visuallyHiddenText} />
      </Link>
    </dd>
  )
}

ChangeAnswer.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  visuallyHiddenText: PropTypes.string
}
