/**
 * FieldsetSprocket component
 *
 * @typedef {import('shinkansen-sprockets/sprockets').SprocketProps} SprocketProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from 'shinkansen-sprockets/sprockets'
import Title from 'shinkansen-sprockets/components/title/fieldset'
import Description from 'shinkansen-sprockets/components/description/fieldset'
import ErrorMessage from 'shinkansen-sprockets/components/error-message/fieldset'
import Group from 'shinkansen-sprockets/components/group/fieldset'

export default class FieldsetSprocket extends Sprocket {
  getDescription = () => this.description
  getErrorMessage = () => this.errorMessage

  setDescription = (description) => !!(this.description = description) || delete this.description
  setErrorMessage = (errorMessage) => !!(this.errorMessage = errorMessage) || delete this.errorMessage

  getClassName () {
    const {
      errorMessage
    } = this.props

    return classnames(super.getClassName(), { error: !!errorMessage }, 'fieldset')
  }

  /**
   * @param {SprocketProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.description !== this.props.description) ||
      (props.errorMessage !== this.props.errorMessage)
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

  renderDescription () {
    const {
      description
    } = this.props

    return (
      <Description
        description={description}
        ref={this.setDescription}
      />
    )
  }

  renderErrorMessage () {
    const {
      errorMessage
    } = this.props

    return (
      <ErrorMessage
        errorMessage={errorMessage}
        ref={this.setErrorMessage}
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
        {this.renderDescription()}
        {this.renderErrorMessage()}
        {children}
      </Group>
    )
  }
}

FieldsetSprocket.propTypes = {
  ...Sprocket.propTypes,
  description: PropTypes.string,
  errorMessage: PropTypes.shape({
    type: PropTypes.string.isRequired,
    params: PropTypes.shape().isRequired,
    uri: PropTypes.string.isRequired
  })
}

FieldsetSprocket.defaultProps = {
  ...Sprocket.defaultProps
}
