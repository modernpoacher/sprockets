/**
 *  @typedef {SprocketsTypes.Super.Components.ErrorMessage.ErrorMessageProps} ErrorMessageProps
 *  @typedef {SprocketsTypes.Super.Components.ErrorMessage.ErrorMessageState} ErrorMessageState
 */

/**
 *  ErrorMessage component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from '#sprockets/components/common/text-content'

/**
 *  @extends {Component<ErrorMessageProps, ErrorMessageState>}
 */
export default class ErrorMessage extends Component {
  /**
   *  @type {ErrorMessageState}
   */
  state = {}

  getClassName () {
    return 'error-message'
  }

  /**
   *  Compare current and latest `props` for changes to `errorMessage`
   *
   *  @param {ErrorMessageProps} props   Latest props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (props.errorMessage !== this.props.errorMessage)
  }

  render () {
    const {
      errorMessage
    } = this.props

    if (errorMessage) {
      return (
        <span className={this.getClassName()}>
          <TextContent
            textContent={errorMessage}
          />
        </span>
      )
    }

    return null
  }
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string
}
