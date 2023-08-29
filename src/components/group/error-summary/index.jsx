/**
 * ErrorSummaryGroup component
 *
 * @typedef {import('@modernpoacher/sprockets/components/group').GroupProps} GroupProps
 *
 * Group state
 *
 * @typedef {Object} GroupState
 * @property {{}} [children]
 */

import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Group from '@modernpoacher/sprockets/components/group'

export default class ErrorSummaryGroup extends Group {
  /**
   * @type {GroupState}
   */
  state = {}

  getClassName () {
    return classnames(super.getClassName(), 'error-summary')
  }

  /**
   * Compare latest 'props' with 'state' for changes to 'children'
   *
   * @param {GroupProps} props   Latest props
   * @param {GroupState} state   Current state
   * @returns {GroupState}
   */
  static getDerivedStateFromProps ({ children: e }, { children: E }) {
    return {
      children: (e !== E) ? e : E
    }
  }

  /**
   * Compare latest 'props' with 'state' for changes to 'children'
   *
   * @param {GroupProps} props   Latest props
   * @param {GroupState} state   Current state
   * @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    const {
      children: e
    } = state

    const {
      children: E
    } = this.state

    return (e !== E)
  }

  render () {
    const {
      groupRef,
      children
    } = this.props

    if (children) {
      return (
        <ul
          className={this.getClassName()}
          ref={groupRef}>
          {children}
        </ul>
      )
    }

    return null
  }
}

ErrorSummaryGroup.propTypes = {
  ...Group.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

ErrorSummaryGroup.defaultProps = {
  ...Group.defaultProps
}
