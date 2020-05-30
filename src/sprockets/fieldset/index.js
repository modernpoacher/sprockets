/**
 * FieldsetSprocket component
 */
import React from 'react'

import classnames from 'classnames'

import Sprocket from 'shinkansen-sprockets/sprockets'
import Title from 'shinkansen-sprockets/components/title/fieldset'
import Group from 'shinkansen-sprockets/components/group/fieldset'

export default class FieldsetSprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
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
        {children}
      </Group>
    )
  }
}

FieldsetSprocket.propTypes = {
  ...Sprocket.propTypes
}

FieldsetSprocket.defaultProps = {
  ...Sprocket.defaultProps
}
