/**
 * CheckAnswersGroup component
 */
import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import classnames from 'classnames'

import debug from 'debug'

import Group from 'shinkansen-sprockets/components/group'

import {
  getKey
} from 'shinkansen-sprockets/transformers/common'

import AnswerTitle from './answer-title'
import AnswerValue from './answer-value'
import ChangeAnswer from './change-answer'

const log = debug('shinkansen:sprockets:components:group:check-answers')

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
   *  Convert latest 'props' to an Immutable.Map() and store in 'state'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
   */
  static getDerivedStateFromProps ({ checkAnswers }, { checkAnswers: C }) {
    const c = Immutable.Map(checkAnswers)

    return {
      checkAnswers: Immutable.is(C, c) ? C : c
    }
  }

  /**
   *  Compare latest 'props' via 'state' for changes to 'checkAnswers'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Latest state
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
