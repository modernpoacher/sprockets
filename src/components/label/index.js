/**
 * Label component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

export default class Label extends Component {
  textContent () {
    return this.props.label
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
    const { label } = this.props

    if (label) {
      return (
        <TextContent textContent={label} />
      )
    }
  }

  render () {
    return (
      <legend className={this.getClassName()}>
        {this.renderTextContent()}
      </legend>
    )
  }
}

Label.propTypes = {
  label: PropTypes.string
}

Label.defaultProps = {
  label: 'Label'
}
