import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from 'shinkansen-sprockets/sprockets'
import Title from 'shinkansen-sprockets/components/title/check-answers'
import Group from 'shinkansen-sprockets/components/group/check-answers'

export default class CheckAnswersSprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
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
      checkAnswers,
      resource
    } = this.props

    console.log(checkAnswers)

    return (
      <Group
        checkAnswers={checkAnswers}
        resource={resource}
        ref={this.setGroup}
      />
    )
  }

  render () {
    return (
      <div className={this.getClassName()}>
        {this.renderTitle()}
        {this.renderGroup()}
      </div>
    )
  }
}

CheckAnswersSprocket.propTypes = {
  ...Sprocket.propTypes,
  checkAnswers: PropTypes.shape().isRequired,
  resource: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }).isRequired
}

CheckAnswersSprocket.defaultProps = {
  ...Sprocket.defaultProps,
  checkAnswers: {},
  resource: {}
}
