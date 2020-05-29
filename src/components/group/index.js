/**
 * Group component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Group extends Component {
  getDOMNode = () => this.domNode
  setDOMNode = (domNode) => !!(this.domNode = domNode) || delete this.domNode

  getClassName () {
    return 'group'
  }

  shouldComponentUpdate (props) {
    return (
      (props.label !== this.props.label) ||
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
  label: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element
    )
  ])
}
