/**
 * ErrorSummaryGroup component
 */
import React from 'react'
import PropTypes from 'prop-types'

import debug from 'debug'

import equal from 'fast-deep-equal'
import classnames from 'classnames'

import Group from '#components/group'

import transform from '#transformers/error-summary'
import {
  getKey
} from '#transformers/common'

import TextContent from '#components/common/text-content'

const log = debug('shinkansen-sprockets:components:group:error-summary')

/* eslint-disable-next-line react/prop-types */
function render (error, index) {
  log('render')

  const {
    href,
    text
  } = transform(error)

  return (
    <li key={getKey(href, text, index)} className='error'>
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
   *  Compare latest 'props' with 'state' for changes to 'errorSummary'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
   */
  static getDerivedStateFromProps ({ errorSummary }, { errorSummary: E }) {
    return {
      errorSummary: equal(errorSummary, E) ? E : errorSummary
    }
  }

  /**
   *  Compare latest 'props' with 'state' for changes to 'errorSummary'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
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
          {errorSummary.map(render)}
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
