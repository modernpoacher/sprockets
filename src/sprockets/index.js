/**
 * Sprocket component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Label from 'shinkansen-sprockets/components/label'
import Group from 'shinkansen-sprockets/components/group'

export default class Sprocket extends Component {
  getLabel = () => this.label
  getGroup = () => this.group

  setLabel = (label) => !!(this.label = label) || delete this.label
  setGroup = (group) => !!(this.group = group) || delete this.group

  getClassName () {
    return 'sprocket'
  }

  shouldComponentUpdate (props) {
    return (
      (props.label !== this.props.label) ||
      (props.onChange !== this.props.onChange)
    )
  }

  renderLabel () {
    const {
      label
    } = this.props

    return (
      <Label
        label={label}
        ref={this.setLabel}
      />
    )
  }

  renderGroup () {
    const {
      onChange,
      children
    } = this.props

    return (
      <Group
        onChange={onChange}
        ref={this.setGroup}>
        {this.renderLabel()}
        {children}
      </Group>
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderGroup()}
      </div>
    )
  }
}

Sprocket.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element
    )
  ])
}

Sprocket.defaultProps = {
  label: 'Sprocket',
  onChange: () => {}
}
