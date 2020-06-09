/**
 * Sprocket component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from 'shinkansen-sprockets/components/title'
import Group from 'shinkansen-sprockets/components/group'

function onChange () {
  /* */
}

export default class Sprocket extends Component {
  getTitle = () => this.title
  getGroup = () => this.group

  setTitle = (title) => !!(this.title = title) || delete this.title
  setGroup = (group) => !!(this.group = group) || delete this.group

  getClassName () {
    return 'sprocket'
  }

  shouldComponentUpdate (props) {
    return (
      (props.children !== this.props.children) ||
      (props.title !== this.props.title) ||
      (props.onChange !== this.props.onChange)
    )
  }

  renderTitle () {
    const {
      title
    } = this.props

    return (
      <Title
        title={title}
        ref={this.setTitle}
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
        {this.renderTitle()}
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
  title: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element
    )
  ])
}

Sprocket.defaultProps = {
  onChange
}
