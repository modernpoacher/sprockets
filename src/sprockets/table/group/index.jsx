/**
 * TableGroup component
 *
 * @typedef {import('@modernpoacher/sprockets/components/group').GroupProps} GroupProps
 *
 * Group state
 *
 * @typedef {Object} GroupState
 * @property {{}} [children]
 */

import React, { isValidElement } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Group from '@modernpoacher/sprockets/components/group'
import Title from '@modernpoacher/sprockets/sprockets/table/title'

function getText ({ text }) {
  return text
}

export default class TableGroup extends Group {
  /**
   * @type {GroupState}
   */
  state = {}

  getClassName () {
    return classnames(super.getClassName(), 'table')
  }

  /**
   *  Compare latest 'props' with 'state' for changes to 'children'
   *
   * @param {GroupProps} props   Latest props
   * @param {GroupState} state   Current state
   * @returns {{children: {}}}
   */
  static getDerivedStateFromProps ({ children: c }, { children: C }) {
    return {
      children: (c !== C) ? c : C
    }
  }

  /**
   * Compare latest 'props' with 'state' for changes to 'children'
   *
   * @param {GroupProps} props   Latest props
   * @param {GroupState} state   Current state
   * @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    const {
      head: h,
      body: b
    } = state

    const {
      head: H,
      body: B
    } = this.state

    return (h !== H) || (b !== B)
  }

  render () {
    const {
      groupRef,
      title,
      head,
      body
    } = this.props

    if (head.length || body.length) {
      return (
        <table
          className={this.getClassName()}
          ref={groupRef}>
          <Title
            title={title}
          />
          {head.length && (
            <thead>
              <tr>
              {head.map(({ text }, i) => (
                <th key={i}>
                  {text}
                </th>
              ))}
              </tr>
            </thead>
          )}
          {body.length && (
            <tbody>
              {body.map((row, i) => (
                <tr key={i}>
                  {row.map((item, i) => {
                    if (i) {
                      if (isValidElement(item)) {
                        return (
                          <td key={i}>
                            {item}
                          </td>
                        )
                      }

                      return (
                        <td key={i}>
                          {getText(item)}
                        </td>
                      )
                    }

                    if (isValidElement(item)) {
                      return (
                        <th key={i}>
                          {item}
                        </th>
                      )
                    }

                    return (
                      <th key={i}>
                        {getText(item)}
                      </th>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      )
    }

    return null
  }
}

TableGroup.propTypes = {
  title: PropTypes.string,
  head: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  ),
  body: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired
      })
    )
  ),
  groupRef: PropTypes.shape({
    current: PropTypes.shape().isRequired
  })
}

TableGroup.defaultProps = {
  ...Group.defaultProps
}
