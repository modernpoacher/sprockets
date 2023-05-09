/**
 * Group component
 *
 * @typedef {import('shinkansen-sprockets/components/group').GroupProps} GroupProps
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Group extends Component {
  getDOMNode = () => this.domNode
  setDOMNode = (domNode) => !!(this.domNode = domNode) || delete this.domNode

  getClassName () {
    return 'group'
  }

  /**
   * @param {GroupProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.onChange !== this.props.onChange) ||
      (props.children !== this.props.children)
    )
  }

  render () {
    const {
      onChange,
      children
    } = this.props

    return (
      <fieldset
        onChange={onChange}
        className={this.getClassName()}
        ref={this.setDOMNode}>
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
  ])
}
