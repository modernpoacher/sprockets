/**
 * CheckAnswersSprocket component
 *
 * @typedef {import('@modernpoacher/sprockets/sprockets').SprocketProps} SprocketProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from '@modernpoacher/sprockets/sprockets'
import Title from './title/index.jsx'
import Group from './group/index.jsx'

export default class CheckAnswersSprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
  }

  /**
   * @param {SprocketProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.children !== this.props.children)
    )
  }

  renderTitle () {
    const {
      title
    } = this.props

    return (
      <Title
        title={title}
      />
    )
  }

  renderGroup () {
    const {
      children
    } = this.props

    return (
      <Group>
        {children}
      </Group>
    )
  }

  render () {
    const {
      children
    } = this.props

    if (children) {
      return (
        <div className={this.getClassName()}>
          {this.renderTitle()}
          {this.renderGroup()}
        </div>
      )
    }

    return null
  }
}

CheckAnswersSprocket.propTypes = {
  ...Sprocket.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

CheckAnswersSprocket.defaultProps = {
  ...Sprocket.defaultProps
}
