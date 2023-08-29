/**
 * ErrorSummarySprocket component
 *
 * @typedef {import('@modernpoacher/sprockets/sprockets').SprocketProps} SprocketProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from '@modernpoacher/sprockets/sprockets'
import Title from '@modernpoacher/sprockets/components/title/error-summary'
import Group from '@modernpoacher/sprockets/components/group/error-summary'

export default class ErrorSummarySprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'error-summary')
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
      const className = this.getClassName()

      return (
        <div tabIndex='-1' className={className}>
          {this.renderTitle()}
          {this.renderGroup()}
        </div>
      )
    }

    return null
  }
}

ErrorSummarySprocket.propTypes = {
  ...Sprocket.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

ErrorSummarySprocket.defaultProps = {
  ...Sprocket.defaultProps
}
