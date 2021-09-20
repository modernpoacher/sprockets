/**
 * CheckAnswersGroup component
 */
import React from 'react'
import PropTypes from 'prop-types'

import debug from 'debug'

import equal from 'fast-deep-equal'
import classnames from 'classnames'

import Group from 'shinkansen-sprockets/components/group'

import {
  getKey
} from 'shinkansen-sprockets/transformers/common'

import AnswerTitle from './answer-title'
import AnswerValue from './answer-value'
import ChangeAnswer from './change-answer'

const log = debug('shinkansen-sprockets:components:group:check-answers')

/* eslint-disable-next-line react/prop-types */
function render ({ params: { answer, changeAnswer: { href, text, ...changeAnswer } } }, index) {
  log('render')

  return (
    <div key={getKey(href, text, index)} className='answer'>
      <AnswerTitle answer={answer} />
      <AnswerValue answer={answer} />
      <ChangeAnswer
        changeAnswer={{ ...changeAnswer, href, text }}
      />
    </div>
  )
}

export default class CheckAnswersGroup extends Group {
  state = {}

  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
  }

  /**
   *  Compare latest 'props' with 'state' for changes to 'checkAnswers'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
   */
  static getDerivedStateFromProps ({ checkAnswers }, { checkAnswers: C }) {
    return {
      checkAnswers: equal(checkAnswers, C) ? C : checkAnswers
    }
  }

  /**
   *  Compare latest 'props' with 'state' for changes to 'checkAnswers'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
   */
  shouldComponentUpdate (props, state) {
    const {
      checkAnswers: c
    } = state

    const {
      checkAnswers: C
    } = this.state

    return (c !== C)
  }

  render () {
    const {
      checkAnswers
    } = this.props

    if (checkAnswers.length) {
      return (
        <dl
          className={this.getClassName()}
          ref={this.setDOMNode}>
          {checkAnswers.map(render)}
        </dl>
      )
    }

    return null
  }
}

CheckAnswersGroup.propTypes = {
  ...Group.propTypes,
  checkAnswers: PropTypes.array
}

CheckAnswersGroup.defaultProps = {
  ...Group.defaultProps,
  checkAnswers: []
}
