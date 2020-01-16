/**
 * Sprocket component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Legend from 'shinkansen-sprockets/components/legend'

export default class Sprocket extends Component {
  getLegend = () => this.legend
  setLegend = (legend) => !!(this.legend = legend) || delete this.legend

  getClassName () {
    return 'sprocket'
  }

  shouldComponentUpdate (props) {
    return (
      (props.legend !== this.props.legend) ||
      (props.onChange !== this.props.onChange)
    )
  }

  renderLegend () {
    const {
      legend
    } = this.props

    return (
      <Legend
        legend={legend}
        ref={this.setLegend}
      />
    )
  }

  render () {
    const className = this.getClassName()
    const {
      children
    } = this.props

    return (
      <fieldset className={className}>
        {this.renderLegend()}
        {children}
      </fieldset>
    )
  }
}

Sprocket.propTypes = {
  legend: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element
    )
  ])
}

Sprocket.defaultProps = {
  legend: 'Sprocket',
  onChange: () => {}
}
