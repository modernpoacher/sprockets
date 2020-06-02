/**
 * ErrorSummaryGroup component
 */
import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import classnames from 'classnames'

import debug from 'debug'

import Group from 'shinkansen-sprockets/components/group'

import transform from 'shinkansen-sprockets/transformers/error-summary'
import TextContent from 'shinkansen-sprockets/components/common/text-content'

const log = debug('shinkansen:sprockets:components:group:error-summary')

const CHAR32 = String.fromCharCode(32)
const CHAR45 = String.fromCharCode(45)

function getKey (href, text, index) {
  return (
    `${href}-${text}-${index}`
      .toLowerCase()
      .replace(/^#/, 'error-')
      .replace(/[^\w\-\d]/g, CHAR32).trim()
      .replace(/\s\s+/g, CHAR32)
      .replace(/\-\-+/g, CHAR45) // eslint-disable-line
      .replace(/[\s\s|\-\-|\s\-|\-\s]+/g, CHAR45) // eslint-disable-line
  )
}

function renderError (error, index) {
  log('renderError')

  const {
    href,
    text
  } = transform(error)

  return (
    <li key={getKey(href, text, index)}>
      <a href={href}>
        <TextContent textContent={text} />
      </a>
    </li>
  )
}

export default class ErrorSummaryGroup extends Group {
  state = {}

  getClassName () {
    return classnames(super.getClassName(), 'error-summary')
  }

  /**
   *  Convert latest 'props' to an Immutable.Map() and store in 'state'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
   */
  static getDerivedStateFromProps ({ errorSummary }, { errorSummary: E }) {
    const e = Immutable.Map(errorSummary)

    return {
      errorSummary: Immutable.is(E, e) ? E : e
    }
  }

  /**
   *  Compare latest 'props' via 'state' for changes to 'errorSummary'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Latest state
   */
  shouldComponentUpdate (props, state) {
    const {
      errorSummary: e
    } = state

    const {
      errorSummary: E
    } = this.state

    return (e !== E)
  }

  render () {
    const {
      errorSummary
    } = this.props

    if (errorSummary.length) {
      return (
        <ul
          className={this.getClassName()}
          ref={this.setDOMNode}>
          {errorSummary.map(renderError)}
        </ul>
      )
    }

    return null
  }
}

ErrorSummaryGroup.propTypes = {
  ...Group.propTypes,
  errorSummary: PropTypes.array
}

ErrorSummaryGroup.defaultProps = {
  ...Group.defaultProps,
  errorSummary: []
}
