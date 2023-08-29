/**
 * CheckAnswersGroup component
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

export default class CheckAnswersGroup extends Group {
  /**
   * @type {GroupState}
   */
  state = {}

  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
  }

  /**
   *  Compare latest 'props' with 'state' for changes to 'children'
   *
   * @param {GroupProps} props   Latest props
   * @param {GroupState} state   Current state
   * @returns {{children: {}}}
   */
  static getDerivedStateFromProps ({ children: c }, { children: C }) {
    return {
      children: (c !== C) ? c : C
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
      children: c
    } = state

    const {
      children: C
    } = this.state

    return (c !== C)
  }

  render () {
    const {
      groupRef,
      children
    } = this.props

    if (children) {
      return (
        <dl
          className={this.getClassName()}
          ref={groupRef}>
          {children}
        </dl>
      )
    }

    return null
  }
}

CheckAnswersGroup.propTypes = {
  ...Group.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

CheckAnswersGroup.defaultProps = {
  ...Group.defaultProps
}
