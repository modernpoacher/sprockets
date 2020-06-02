/**
 * CheckAnswersGroup component
 */
import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import classnames from 'classnames'

import debug from 'debug'

import Group from 'shinkansen-sprockets/components/group'

import getCheckAnswersGroupKey from './get-check-answers-group-key'
import hasElementsTitle from './has-elements-title'
import getGroup from './get-group'

import TypeStringAnswer from './type-string-answer'
import TypeNumberAnswer from './type-number-answer'
import TypeBooleanAnswer from './type-boolean-answer'
import TypeNullAnswer from './type-null-answer'

import renderCheckAnswersGroupForObject from './render-check-answers-group-for-object'
import renderCheckAnswersGroupForArray from './render-check-answers-group-for-array'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export function renderCheckAnswersGroup (index = 0, field, resource, array, group) {
  log('renderCheckAnswersGroup')

  const {
    meta: {
      type
    } = {}
  } = field

  switch (type) {
    case 'string':
      return (
        <TypeStringAnswer
          stringAnswer={field}
          resource={resource}
        />
      )
    case 'number':
      return (
        <TypeNumberAnswer
          key={getCheckAnswersGroupKey(index)}
          numberAnswer={field}
          resource={resource}
        />
      )
    case 'object':
      return (
        <ObjectAnswer
          key={getCheckAnswersGroupKey(index)}
          objectAnswer={field}
          resource={resource}
          array={array}
          group={group}
        />
      )
    case 'array':
      return (
        <ArrayAnswer
          key={getCheckAnswersGroupKey(index)}
          arrayAnswer={field}
          resource={resource}
          array={array}
          group={group}
        />
      )
    case 'boolean':
      return (
        <TypeBooleanAnswer
          key={getCheckAnswersGroupKey(index)}
          booleanAnswer={field}
          resource={resource}
        />
      )
    case 'null':
      return (
        <TypeNullAnswer
          key={getCheckAnswersGroupKey(index)}
          nullAnswer={field}
          resource={resource}
        />
      )
  }

  return null
}

export function ObjectAnswer ({ objectAnswer: { elements: { fields = [] } = {} }, resource, array, group }) {
  log('ObjectAnswer')

  return fields.reduce((accumulator, field, i, a) => {
    if (hasElementsTitle(field)) {
      /*
       *  `field` has a title. Put any title-less siblings into `group`
       */
      group = getGroup(i, a)

      if (group.length) {
        /*
         *  Transform `field` and siblings
         */
        return accumulator.concat(renderCheckAnswersGroupForObject(i, [field, ...group], resource))
      }
    }

    return (
      !group.includes(field)
        ? accumulator.concat(renderCheckAnswersGroup(i, field, resource, array, group))
        : accumulator
    )
  }, array)
}

ObjectAnswer.propTypes = {
  objectAnswer: PropTypes.shape({
    elements: PropTypes.shape()
  }).isRequired,
  resource: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }).isRequired,
  array: PropTypes.array,
  group: PropTypes.array
}

ObjectAnswer.defaultProps = {
  objectAnswer: {},
  resource: {},
  array: [],
  group: []
}

export function ArrayAnswer ({ arrayAnswer: { elements: { fields = [] } = {} }, resource, array, group }) {
  log('ArrayAnswer')

  return fields.reduce((accumulator, field, i, a) => {
    if (hasElementsTitle(field)) {
      /*
       *  `field` has a title. Put any title-less siblings into `group`
       */
      group = getGroup(i, a)

      if (group.length) {
        /*
         *  Transform `field` and siblings
         */
        return accumulator.concat(renderCheckAnswersGroupForArray(i, [field, ...group], resource))
      }
    }

    return (
      !group.includes(field)
        ? accumulator.concat(renderCheckAnswersGroup(i, field, resource, array, group))
        : accumulator
    )
  }, array)
}

ArrayAnswer.propTypes = {
  arrayAnswer: PropTypes.shape({
    elements: PropTypes.shape()
  }).isRequired,
  resource: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }).isRequired,
  array: PropTypes.array,
  group: PropTypes.array
}

ArrayAnswer.defaultProps = {
  arrayAnswer: {},
  resource: {},
  array: [],
  group: []
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

  renderAnswers () {
    const {
      checkAnswers
    } = this.props

    const {
      meta: {
        type
      } = {}
    } = checkAnswers

    switch (type) {
      case 'string':
      {
        const {
          resource
        } = this.props

        return (
          <TypeStringAnswer
            stringAnswer={checkAnswers}
            resource={resource}
          />
        )
      }
      case 'number':
      {
        const {
          resource
        } = this.props

        return (
          <TypeNumberAnswer
            numberAnswer={checkAnswers}
            resource={resource}
          />
        )
      }
      case 'object':
      {
        const {
          resource,
          array,
          group
        } = this.props

        return (
          <ObjectAnswer
            objectAnswer={checkAnswers}
            resource={resource}
            array={array}
            group={group}
          />
        )
      }
      case 'array':
      {
        const {
          resource,
          array,
          group
        } = this.props

        return (
          <ArrayAnswer
            arrayAnswer={checkAnswers}
            resource={resource}
            array={array}
            group={group}
          />
        )
      }
      case 'boolean':
      {
        const {
          resource
        } = this.props

        return (
          <TypeBooleanAnswer
            booleanAnswer={checkAnswers}
            resource={resource}
          />
        )
      }
      case 'null':
      {
        const {
          resource
        } = this.props

        return (
          <TypeNullAnswer
            nullAnswer={checkAnswers}
            resource={resource}
          />
        )
      }
    }

    return null
  }

  render () {
    return (
      <div className={this.getClassName()}>
        {this.renderAnswers()}
      </div>
    )
  }
}

CheckAnswersGroup.propTypes = {
  ...Group.propTypes,
  checkAnswers: PropTypes.shape(),
  resource: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  })
}

CheckAnswersGroup.defaultProps = {
  ...Group.defaultProps,
  checkAnswers: {},
  resource: {}
}
