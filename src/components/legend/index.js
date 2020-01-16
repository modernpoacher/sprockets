/**
 * Legend component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

export default class Legend extends Component {
  textContent () {
    return this.props.legend
  }

  getClassName () {
    return 'legend'
  }

  shouldComponentUpdate (props) {
    return (
      (props.legend !== this.props.legend)
    )
  }

  renderTextContent () {
    const { legend } = this.props

    if (legend) {
      return (
        <TextContent textContent={legend} />
      )
    }
  }

  render () {
    const { children } = this.props

    return (
      <legend className={this.getClassName()}>
        {this.renderTextContent()}
        {children}
      </legend>
    )
  }
}

Legend.propTypes = {
  legend: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element
    )
  ])
}

Legend.defaultProps = {
  legend: 'Legend'
}
