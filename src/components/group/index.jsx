/**
 * Group component
 *
 * @typedef {import('@modernpoacher/sprockets/components/group').GroupProps} GroupProps
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  DEFAULT_HANDLE_CHANGE
} from '@modernpoacher/sprockets/common'

export default class Group extends Component {
  getClassName () {
    return 'group'
  }

  /**
   * @param {GroupProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    return (
      (props.onChange !== this.props.onChange) ||
      (props.children !== this.props.children)
    )
  }

  render () {
    const {
      onChange = DEFAULT_HANDLE_CHANGE,
      groupRef,
      children
    } = this.props

    return (
      <fieldset
        onChange={onChange}
        className={this.getClassName()}
        ref={groupRef}>
        {children}
      </fieldset>
    )
  }
}

Group.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ]),
  groupRef: PropTypes.shape({
    current: PropTypes.shape().isRequired
  })
}
