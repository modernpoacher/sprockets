/**
 * TableSprocket component
 *
 * @typedef {import('@modernpoacher/sprockets/sprockets').SprocketProps} SprocketProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from '@modernpoacher/sprockets/sprockets'
import Group from './group/index.jsx'

export default class TableSprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'table')
  }

  /**
   * @param {SprocketProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.title !== this.props.title) ||
      (props.head !== this.props.head) ||
      (props.body !== this.props.body)
    )
  }

  renderGroup () {
    const {
      groupRef,
      title,
      head,
      body
    } = this.props

    return (
      <Group
        groupRef={groupRef}
        title={title}
        head={head}
        body={body}
      />
    )
  }

  render () {
    const {
      head,
      body
    } = this.props

    if (head.length || body.length) {
      return (
        <div className={this.getClassName()}>
          {this.renderGroup()}
        </div>
      )
    }

    return null
  }
}

TableSprocket.propTypes = {
  title: PropTypes.string,
  head: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  ),
  body: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired
      })
    )
  ),
  groupRef: PropTypes.shape({
    current: PropTypes.shape().isRequired
  })
}

TableSprocket.defaultProps = {
  ...Sprocket.defaultProps,
  head: [],
  body: []
}
