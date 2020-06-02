/**
 * ErrorSummarySprocket component
 */
import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from 'shinkansen-sprockets/sprockets'
import Title from 'shinkansen-sprockets/components/title/error-summary'
import Group from 'shinkansen-sprockets/components/group/error-summary'

export default class ErrorSummarySprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'error-summary')
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
      errorSummary
    } = this.props

    console.log(errorSummary)

    return (
      <Group
        errorSummary={errorSummary}
        ref={this.setGroup}>
      </Group>
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderTitle()}
        {this.renderGroup()}
      </div>
    )
  }
}

ErrorSummarySprocket.propTypes = {
  ...Sprocket.propTypes,
  errorSummary: PropTypes.array
}

ErrorSummarySprocket.defaultProps = {
  ...Sprocket.defaultProps,
  errorSummary: []
}
