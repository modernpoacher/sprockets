/**
 * ErrorMessage component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import equal from 'fast-deep-equal'

import transform from 'shinkansen-sprockets/transformers/error-message'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

export default class ErrorMessage extends Component {
  state = {}

  hasTextContent () {
    const { errorMessage } = this.props

    const {
      text
    } = transform(errorMessage)

    return !!text
  }

  getTextContent () {
    const { errorMessage } = this.props
    const {
      text
    } = transform(errorMessage)

    return text
  }

  getClassName () {
    return 'error-message'
  }

  /**
   *  Convert latest 'props' to an Immutable.Map() and store in 'state'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
   */
  static getDerivedStateFromProps ({ errorMessage }, { errorMessage: E }) {
    return {
      errorMessage: equal(errorMessage, E) ? E : errorMessage
    }
  }

  /**
   *  Compare latest 'props' via 'state' for changes to 'errorMessage'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Latest state
   */
  shouldComponentUpdate (props, state) {
    const {
      errorMessage: e
    } = state

    const {
      errorMessage: E
    } = this.state

    return (e !== E)
  }

  renderTextContent () {
    if (this.hasTextContent()) {
      const textContent = this.getTextContent()

      return (
        <TextContent textContent={textContent} />
      )
    }

    return null
  }

  render () {
    const { errorMessage } = this.props

    if (errorMessage) {
      return (
        <span className={this.getClassName()}>
          {this.renderTextContent()}
        </span>
      )
    }

    return null
  }
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.shape({
    type: PropTypes.string.isRequired,
    params: PropTypes.shape().isRequired,
    uri: PropTypes.string.isRequired
  })
}
