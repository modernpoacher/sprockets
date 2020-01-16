/**
 * FieldsetSprocket component
 */
import React from 'react'
import classnames from 'classnames'

import Sprocket from 'shinkansen-sprockets/sprockets'
import Legend from 'shinkansen-sprockets/components/legend/fieldset'

export default class FieldsetSprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
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
}

FieldsetSprocket.propTypes = {
  ...Sprocket.propTypes
}

FieldsetSprocket.defaultProps = {
  ...Sprocket.defaultProps,
  legend: 'Fieldset Sprocket'
}
