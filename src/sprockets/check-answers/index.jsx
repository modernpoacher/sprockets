import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from '#sprockets'
import Title from '#components/title/check-answers'
import Group from '#components/group/check-answers'

export default class CheckAnswersSprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
  }

  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.checkAnswers !== this.props.checkAnswers)
    )
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
    const {
      checkAnswers
    } = this.props

    if (checkAnswers.length) {
      return (
        <div className={this.getClassName()}>
          {this.renderTitle()}
          {this.renderGroup()}
        </div>
      )
    }

    return null
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
