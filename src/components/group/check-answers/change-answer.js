import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

import getResourceUrl from './get-resource-url'
import VisuallyHiddenText from './visually-hidden-text'
import getVisuallyHiddenText from './get-visually-hidden-text'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function ChangeAnswer ({ changeAnswer, resource }) {
  log('ChangeAnswer')

  return (
    <dd>
      <a href={getResourceUrl(resource)}>
        <TextContent textContent='Change' />
        {String.fromCharCode(32)}
        <VisuallyHiddenText visuallyHiddenText={getVisuallyHiddenText(changeAnswer)} />
      </a>
    </dd>
  )
}

ChangeAnswer.propTypes = {
  changeAnswer: PropTypes.shape({
    elements: PropTypes.shape()
  }).isRequired,
  resource: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }).isRequired
}
