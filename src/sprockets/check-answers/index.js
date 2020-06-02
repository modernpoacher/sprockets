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
      checkAnswers
    } = this.props

    return (
      <Group
        checkAnswers={checkAnswers}
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
  checkAnswers: PropTypes.array
}

CheckAnswersSprocket.defaultProps = {
  ...Sprocket.defaultProps,
  checkAnswers: []
}
