/**
 * Label component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

export default class Label extends Component {
  hasTextContent () {
    const { label } = this.props

    return !!label
  }

  getTextContent () {
    const { label } = this.props

    return label
  }

  getClassName () {
    return 'label'
  }

  shouldComponentUpdate (props) {
    return (
      (props.label !== this.props.label)
    )
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
    if (this.hasTextContent()) {
      return (
        <legend className={this.getClassName()}>
          {this.renderTextContent()}
        </legend>
      )
    }

    return null
  }
}

Label.propTypes = {
  label: PropTypes.string
}
