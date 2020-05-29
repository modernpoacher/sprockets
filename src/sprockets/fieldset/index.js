/**
 * FieldsetSprocket component
 */
import React from 'react'

import classnames from 'classnames'

import Sprocket from 'shinkansen-sprockets/sprockets'
import Label from 'shinkansen-sprockets/components/label/fieldset'
import Group from 'shinkansen-sprockets/components/group/fieldset'

export default class FieldsetSprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }

  renderLabel () {
    const {
      label
    } = this.props

    return (
      <Label
        label={label}
        ref={this.setLabel}
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
        {this.renderLabel()}
        {children}
      </Group>
    )
  }
}

FieldsetSprocket.propTypes = {
  ...Sprocket.propTypes
}

FieldsetSprocket.defaultProps = {
  ...Sprocket.defaultProps,
  label: 'Fieldset Sprocket'
}
